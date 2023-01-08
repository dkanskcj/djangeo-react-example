import TopBar from "@components/layouts/TopBar";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";
import UnauthenticatedRoutes from "@components/routes/UnauthenticatedRoutes";
import { useState } from "react";

// React Snippets => rafce 화살표 함수 컴포넌트(+ export까지)

function App() {

  const [isAuthenticated, setAuthenticated] = useState(false);
  
  return (
    <div>
      <TopBar />
      {isAuthenticated && <ProtectedRoutes />}
      {!isAuthenticated && <UnauthenticatedRoutes />}
    </div>
  )
}

export default App
