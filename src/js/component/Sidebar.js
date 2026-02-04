import React from "react";

export const Sidebar = () => {
const cats = [
{ n: "CHARACTERS", i: "https://starwars-visualguide.com/assets/img/categories/character.jpg" },
{ n: "PLANETS", i: "https://starwars-visualguide.com/assets/img/categories/planets.jpg" },
{ n: "VEHICLES", i: "https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" }
];
return (
<div className="bg-light border-end p-4 d-none d-md-block" style={{ width: "260px", minHeight: "100vh" }}>
<p className="text-muted small fw-bold border-bottom pb-2 mb-4">BROWSE DATABANK //</p>
{cats.map(c => (
<div key={c.n} className="sidebar-link mb-3 text-secondary pointer">
<img src={c.i} className="rounded-circle me-3 border" style={{width:"35px", height:"35px", filter: "grayscale(100%)"}} />
<span className="small fw-bold">{c.n}</span>
</div>
))}
</div>
);
};
