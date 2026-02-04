import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ item, type }) => {
const { store, actions } = useContext(Context);
const [details, setDetails] = useState(null);
const isFav = store.favorites.some(f => f.name === item.name);

useEffect(() => {
const key = `${type}_${item.uid}`;
if (store.detailsCache[key]) {
setDetails(store.detailsCache[key]);
} else {
const timer = setTimeout(() => {
actions.getDetails(type, item.uid).then(data => setDetails(data));
}, 100); 
return () => clearTimeout(timer);
}
}, [item.uid]);

return (
<div className="card m-2 border-0 shadow-sm" style={{ minWidth: "18rem", borderRadius: "0" }}>
<div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: "200px", fontSize: "1.2rem" }}>
400 x 200
</div>
<div className="card-body bg-white text-dark border">
<h5 className="card-title fw-bold">{item.name}</h5>
<div className="card-text small mb-4 mt-3" style={{ minHeight: "60px" }}>
{details ? (
<>
<p className="m-0 text-capitalize">{type === "people" ? "Gender: " + details.gender : type === "planets" ? "Population: " + details.population : "Model: " + details.model}</p>
<p className="m-0 text-capitalize">{type === "people" ? "Hair Color: " + details.hair_color : type === "planets" ? "Climate: " + details.climate : "Class: " + details.vehicle_class}</p>
<p className="m-0 text-capitalize">{type === "people" ? "Eye Color: " + details.eye_color : type === "planets" ? "Terrain: " + details.terrain : "Cost: " + details.cost_in_credits}</p>
</>
) : (
<>
<p className="m-0 text-muted">A Star Wars {type === "people" ? "People" : type.slice(0,-1)}</p>
<p className="m-0 text-muted">Click learn more for details</p>
</>
)}
</div>
<div className="d-flex justify-content-between">
<Link to={"/details/" + type + "/" + item.uid} className="btn btn-outline-primary px-3 fw-bold">Learn more!</Link>
<button className="btn btn-outline-warning" onClick={() => actions.toggleFavorite({...item, type})}>
<i className={isFav ? "fas fa-heart text-warning" : "far fa-heart"}></i>
</button>
</div>
</div>
</div>
);
};
