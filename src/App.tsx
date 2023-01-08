import Error404Page from "@components/error/Error404Page";
import Home from "@components/home/Home";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";
import UnauthenticatedRoutes from "@components/routes/UnauthenticatedRoutes";
import Path from "@utils/path";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// React Snippets => rafce 화살표 함수 컴포넌트(+ export까지)

function App() {

  const [isAuthenticated, setAuthenticated] = useState(false);
  
  return (
    <div>
      {isAuthenticated && <ProtectedRoutes />}
      {!isAuthenticated && <UnauthenticatedRoutes />}
    </div>
  )
}

export default App
