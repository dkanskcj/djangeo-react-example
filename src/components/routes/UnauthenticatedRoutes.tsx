import LoginProgress from "@components/auth/LoginProgress";
import Home from "@components/home/Home";
import Path from "@utils/path";
import { Navigate, Route, Routes } from "react-router-dom"

const UnauthenticatedRoutes = () => {
  const { LOGIN } = Path;

  return (
    <Routes>
      <Route path={LOGIN} element={<LoginProgress />} />
      <Route path="*" element={<Navigate replace to={LOGIN} />} />
    </Routes>
  )
}

export default UnauthenticatedRoutes