import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";

export const Home = () => {
const { store } = useContext(Context);
const sections = [
{ title: "Characters", data: store.people, type: "people" },
{ title: "Planets", data: store.planets, type: "planets" },
{ title: "Vehicles", data: store.vehicles, type: "vehicles" }
];

return (
<div className="container">
{sections.map(s => (
<div key={s.title} className="mb-5">
<h2 className="text-danger fw-bold mb-4">{s.title}</h2>
<div className="d-flex overflow-auto pb-3 shadow-sm" style={{ gap: "15px" }}>
{s.data.map(item => <Card key={item.uid} item={item} type={s.type} />)}
</div>
</div>
))}
</div>
);
};
