import Home from "./pages/Home";
import { ReactNode} from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/index.tsx";
import Error404 from "./pages/404/index.tsx";
import Favoritos from "./pages/Favoritos/index.tsx";
import { useAuth } from "./hooks/useAuth.ts";


// autorização
function PrivateRoute({
  children,
  redirectTo,
}: {
  children: ReactNode;
  redirectTo: string;
}) {
  const { user } = useAuth();
  const isAuthenticate = user ? true : false;
  console.log('isso')

  return isAuthenticate ? children : <Navigate to={redirectTo} />;
}

function PrivateLogin({
  children,
  redirectTo,
}: {
  children: ReactNode;
  redirectTo: string;
}) {
  const { user } = useAuth();
  const isAuthenticate = !user ? false : true;
  console.log('auth',user?.providerId)

  return !isAuthenticate ? children : <Navigate to={redirectTo} />;
}


function MyRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/auth"
        element={<PrivateLogin redirectTo="/" children={<Auth />} />}
      />

      <Route
        path="/favoritos"
        element={<PrivateRoute redirectTo={"/"} children={<Favoritos />} />}
      />
    </Routes>
  );
}

export default MyRoutes;
