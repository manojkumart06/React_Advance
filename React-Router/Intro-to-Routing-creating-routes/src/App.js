import { createBrowserRouter, RouterProvider} from "react-router-dom";
// import {createRoutesFromElements,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";



function App() {
  const router = createBrowserRouter([
    { 
      path : "/", element : <Navbar />,
        children : [
        { index : true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path : "/items", element : <Items />}
      ],
    },
  ]);

  //Another way of creating routes

  // const routes = createRoutesFromElements(
  //       <>
  //         <Route path = "/" element = {<Navbar />}>
  //         <Route index element = {<Home />}/>
  //         <Route path = "/about" element = {<About />}/>
  //         <Route path = "/items" element = {<Items />}/>
  //         </Route>
  //       </>
  // )

  // const router = createBrowserRouter(routes);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
