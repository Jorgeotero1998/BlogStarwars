import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Details } from "./views/Details";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";

const Layout = () => {
return (
<div>
<BrowserRouter>
<Navbar />
<div className="container-fluid p-4" style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/details/:type/:id" element={<Details />} />
<Route path="*" element={<h1>Not found!</h1>} />
</Routes>
</div>
</BrowserRouter>
</div>
);
};
export default injectContext(Layout);
