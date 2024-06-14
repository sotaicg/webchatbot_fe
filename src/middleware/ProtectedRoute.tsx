import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { PAGE } from "src/constants/router";
import DefaultLayout from "src/layout/DefaultLayout";

export function ProtectedRoute() {
  const token = Cookies.get("AccessToken");
  return token ? (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  ) : (
    <Navigate to={PAGE.LOGIN} />
  );
}
