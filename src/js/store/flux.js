const getState = ({ getStore, getActions, setStore }) => {
return {
store: {
people: JSON.parse(localStorage.getItem("people")) || [],
planets: JSON.parse(localStorage.getItem("planets")) || [],
vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
favorites: JSON.parse(localStorage.getItem("favorites")) || [],
detailsCache: JSON.parse(localStorage.getItem("detailsCache")) || {},
searchResult: []
},
actions: {
getInitialData: async () => {
const store = getStore();
const categories = ["people", "planets", "vehicles"];
for (let cat of categories) {
if (store[cat].length === 0) {
try {
const res = await fetch("https://www.swapi.tech/api/" + cat);
const data = await res.json();
setStore({ [cat]: data.results });
localStorage.setItem(cat, JSON.stringify(data.results));
} catch (e) { console.error(e); }
}
}
},
getDetails: async (type, id) => {
const store = getStore();
const key = `${type}_${id}`;
if (store.detailsCache[key]) return store.detailsCache[key];
try {
const res = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
const data = await res.json();
const details = data.result.properties;
const newCache = { ...store.detailsCache, [key]: details };
setStore({ detailsCache: newCache });
localStorage.setItem("detailsCache", JSON.stringify(newCache));
return details;
} catch (e) { return null; }
},
toggleFavorite: (item) => {
const store = getStore();
const exists = store.favorites.find(f => f.name === item.name);
const newFavs = exists ? store.favorites.filter(f => f.name !== item.name) : [...store.favorites, item];
setStore({ favorites: newFavs });
localStorage.setItem("favorites", JSON.stringify(newFavs));
},
searchData: (text) => {
const store = getStore();
if (!text || text.length < 2) { setStore({ searchResult: [] }); return; }
const all = [...store.people.map(i=>({...i,type:"people"})), ...store.planets.map(i=>({...i,type:"planets"})), ...store.vehicles.map(i=>({...i,type:"vehicles"}))];
setStore({ searchResult: all.filter(i => i.name.toLowerCase().includes(text.toLowerCase())) });
}
}
};
};
export default getState;
