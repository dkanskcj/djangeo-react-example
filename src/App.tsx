import Error404Page from "@components/error/Error404Page";
import Home from "@components/home/Home";
import Path from "@utils/path";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path={Path.HOME} element={<Home />} />
        <Route path={Path.ERR404} element={<Error404Page />} />
        <Route path="*" element={<Navigate replace to={Path.ERR404} />} />
      </Routes>
    </div>
  )
}

export default App
