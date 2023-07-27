import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import DribbleBar from "./widgets/layout/dribbleBar";
import routes, { navItems } from "@/routes";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="absolute left-2/4 z-10 mx-auto w-full -translate-x-2/4 py-4 ">
        <Navbar
          routes={navItems}
          theme={location.pathname !== "/contact" ? "dark" : "light"}
        />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <DribbleBar />
    </>
  );
}

export default App;
