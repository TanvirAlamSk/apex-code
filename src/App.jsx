import { createBrowserRouter, RouterProvider } from "react-router";
import Footer from "./components/footer/Footer";
import Navber from "./components/navber/Navber";
import Home from "./pages/Home";
import { routes } from "./routers/routes";

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
