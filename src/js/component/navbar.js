import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
const { store, actions } = useContext(Context);
const [search, setSearch] = useState("");
const navigate = useNavigate();

return (
<nav className="navbar navbar-light bg-white border-bottom px-5 py-3 sticky-top">
<Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" style={{ width: "80px" }} /></Link>
<div className="d-flex gap-3 align-items-center">
<div className="position-relative">
<input type="text" className="form-control border-secondary" placeholder="Search..." 
value={search} onChange={(e) => { setSearch(e.target.value); actions.searchData(e.target.value); }} />
{store.searchResult.length > 0 && (
<ul className="list-group position-absolute w-100 mt-1 shadow" style={{zIndex: 1000}}>
{store.searchResult.map(i => (
<li key={i.uid} className="list-group-item list-group-item-action pointer" 
onClick={()=>{navigate("/details/"+i.type+"/"+i.uid); setSearch(""); actions.searchData("");}}>
{i.name}
</li>
))}
</ul>
)}
</div>
<div className="dropdown">
<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
Favorites <span className="badge bg-secondary ms-1">{store.favorites.length}</span>
</button>
<ul className="dropdown-menu dropdown-menu-end shadow border-0">
{store.favorites.length === 0 ? <li className="dropdown-item text-muted">(empty)</li> : store.favorites.map((f, i) => (
<li key={i} className="dropdown-item d-flex justify-content-between align-items-center" style={{minWidth: "200px"}}>
<Link to={"/details/" + f.type + "/" + f.uid} className="text-decoration-none text-dark text-truncate me-2">{f.name}</Link>
<i className="fas fa-trash-alt text-dark" style={{ cursor: "pointer" }} onClick={() => actions.toggleFavorite(f)}></i>
</li>
))}
</ul>
</div>
</div>
</nav>
);
};
