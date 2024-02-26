import "./styles.css";
import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { createBrowserRouter, RouterProvider,createRoutesFromElements,Route } from "react-router-dom";

export default function App() {
  // const [page, setPage] = useState("home");

  /*const router = createBrowserRouter([
    {path : "/", element : <Home />},
    {path : "/list", element : <List />},
    {path : "/contact", element : <Contact />}
  ])*/
 
    const routes = createRoutesFromElements(
        <>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/list" element = {<List />}/>
        <Route path = "/contact" element = {<Contact />}/>
        </>
  )

  const router = createBrowserRouter(routes);



  return (

    <div className="App">
      <Navbar/>
      {/*Refactor this to use routes here */}
      {/* {page === "home" && <Home />}
      {page === "list" && <List />}
      {page === "contact" && <Contact />} */}
      <RouterProvider router={router} />
    </div>
  );
}
