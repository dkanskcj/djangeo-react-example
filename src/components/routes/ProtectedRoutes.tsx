import Error404Page from "@components/error/Error404Page"
import Home from "@components/home/Home"
import UIPreviewPage from "@components/preview/ui/UIPreviewPage"
import Path from "@utils/path"
import { Navigate, Route, Routes } from "react-router-dom"

const ProtectedRoutes = () => {
  const {HOME, ERR404, LOGIN, UI} = Path;

  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={UI} element={<UIPreviewPage />} />
      <Route path={ERR404} element={<Error404Page />} />
      <Route path={LOGIN} element={<Navigate replace to={HOME} />} />
      <Route path="*" element={<Navigate replace to={ERR404} />} />
    </Routes>
  )
}

export default ProtectedRoutes