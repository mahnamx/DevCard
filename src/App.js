import "./styles.css";
import { Router, Outlet, ReactLocation } from "react-location";
import CreateCard from "./CreateCard";
import CardShowcase from "./CardShowcase";

const location = new ReactLocation();

export default function App() {
  const routes = [
    {
      path: "/",
      element: <CreateCard />
    },
    {
      path: "showcase",
      element: <CardShowcase />
    }
  ];

  return (
    <Router routes={routes} location={location}>
      <div>
        <Outlet />
      </div>
    </Router>
  );
}
