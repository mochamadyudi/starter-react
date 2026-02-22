import {TheHeader} from "@components/templates/dashboard";
import TheSider from "@components/templates/dashboard/TheSider.tsx";
import {Outlet} from "react-router-dom";
import TheContent from "@components/templates/dashboard/TheContent";
import {MenuDemo} from "@components/atoms/menu/Menu.tsx";

export default function TheDashboard() {
  return (
    <div className="app-dashboard">
      <div className="app-dashboard-main">
        <TheSider />
        <div className="app-dashboard-content">
          <TheHeader />
          <TheContent>
            <Outlet />
            <MenuDemo />
          </TheContent>
        </div>
      </div>
    </div>
  );
}
