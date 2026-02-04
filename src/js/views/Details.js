import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
const { type, id } = useParams();
const { actions } = useContext(Context);
const [info, setInfo] = useState(null);
const imgType = type === "people" ? "characters" : type;

useEffect(() => {
setInfo(null);
actions.getDetails(type, id).then(data => setInfo(data));
}, [type, id]);

if (!info) return <div className="text-danger text-center mt-5 p-5 fw-bold">RETRIEVING DATA FROM ARCHIVES...</div>;

return (
<div className="container mt-5">
<div className="row d-flex align-items-center mb-4">
<div className="col-md-6 text-center">
<div className="bg-secondary rounded d-flex align-items-center justify-content-center overflow-hidden shadow" style={{ minHeight: "400px" }}>
<img 
src={"https://starwars-visualguide.com/assets/img/" + imgType + "/" + id + ".jpg"} 
className="img-fluid"
style={{ minHeight: "400px", objectFit: "cover" }}
onError={(e) => { e.target.src = "https://via.placeholder.com/400x600?text=800x600"; }}
/>
</div>
</div>
<div className="col-md-6 text-center px-4">
<h1 className="display-4 fw-bold">{info.name}</h1>
<p className="lead mt-3">
Detailed record of the entity retrieved from SWAPI.tech Databank. 
Information contains validated biological and technical specifications. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
</div>
</div>
<hr className="border-danger border-2 opacity-100 mb-4" />
<div className="row text-center text-danger fw-bold py-2">
<div className="col-2 border-end border-danger border-opacity-25">
<p className="mb-2">Name</p>
<div className="text-dark fw-normal">{info.name}</div>
</div>
<div className="col-2 border-end border-danger border-opacity-25">
<p className="mb-2">{type === "people" ? "Birth Year" : "Model"}</p>
<div className="text-dark fw-normal">{info.birth_year || info.model}</div>
</div>
<div className="col-2 border-end border-danger border-opacity-25">
<p className="mb-2">{type === "people" ? "Gender" : "Class"}</p>
<div className="text-dark fw-normal">{info.gender || info.vehicle_class || "n/a"}</div>
</div>
<div className="col-2 border-end border-danger border-opacity-25">
<p className="mb-2">{type === "people" ? "Height" : "Length"}</p>
<div className="text-dark fw-normal">{info.height || info.length}</div>
</div>
<div className="col-2 border-end border-danger border-opacity-25">
<p className="mb-2">{type === "people" ? "Skin Color" : "Climate"}</p>
<div className="text-dark fw-normal">{info.skin_color || info.climate}</div>
</div>
<div className="col-2">
<p className="mb-2">{type === "people" ? "Eye Color" : "Terrain"}</p>
<div className="text-dark fw-normal">{info.eye_color || info.terrain}</div>
</div>
</div>
</div>
);
};
