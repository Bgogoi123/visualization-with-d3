import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SideNav from "./components/SideNav";
import SocketContainer from "./components/SocketContainer";
import { ErrorPage } from "./pages/ErrorPage";
import NavbarContent from "./pages/Navigation/NavbarContent";
import NavHeader from "./pages/Navigation/NavHeader";
import Sketchbook from "./pages/Sketchbook";
import Smile from "./pages/Smile";
import TrialPage from "./pages/TrialPage";

const routes = createBrowserRouter([
  {
    path: "/",
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
  return (
    <SocketContainer>
      <RouterProvider router={routes} />
    </SocketContainer>
  );
}

export default App;
