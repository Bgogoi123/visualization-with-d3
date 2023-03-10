import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SideNav from "./components/SideNav";
import { ErrorPage } from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import NavbarContent from "./pages/Navigation/NavbarContent";
import NavHeader from "./pages/Navigation/NavHeader";
import Sketchbook from "./pages/Sketchbook";
import Smile from "./pages/Smile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <SideNav navContent={<NavbarContent />} navHeader={<NavHeader />}>
        <HomePage />
      </SideNav>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/smiley",
    element: (
      <SideNav navContent={<NavbarContent />} navHeader={<NavHeader />}>
        <Smile />
      </SideNav>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/sketchbook",
    element: (
      <SideNav navContent={<NavbarContent />} navHeader={<NavHeader />}>
        <Sketchbook />
      </SideNav>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
