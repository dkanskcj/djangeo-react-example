import TopBar from "@components/layouts/TopBar";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";
import UnauthenticatedRoutes from "@components/routes/UnauthenticatedRoutes";
import useAuth from "@store/auth/useAuth";
import Path from "@utils/path";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// React Snippets => rafce 화살표 함수 컴포넌트(+ export까지)

function App() {
  const pathsHasNav: string[] = [Path.HOME, /* ... */];
  // useLocation 안 해도 원래 location이 있지만 상태관리 안 되어 있는 애고
  // useLocation() 사용해서 가져와야 상태관리 되어 있는 애라서 -> useEffect 등등에 deps로 넣거나 등등.
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const [hasNav, setHasNav] = useState(false);
  // Boolean 명명:
  // isAbc, setAbc
  // isEditable -> canEdit(조동사: can, will(should))
  // 3인칭 단수 현재형으로 시작(hasNext, exists, ...)

  //      localhost:3000/login
  //      localhost:3000/login/
  useEffect(() => {
    let pathname = location.pathname;

    // 치환:
    // / -> /
    // /login/ -> /login
    if (location.pathname.length > 1 && pathname.endsWith("/")) {
      pathname = pathname.substring(0, -1); // Python, ...
    }

    // ["/login", "/", ...]
    const hasNav = pathsHasNav.includes(pathname);
    setHasNav(hasNav);
  }, [location.pathname])

  return (
    <div>
      {hasNav && <TopBar />}
      <div>
        {isAuthenticated && <ProtectedRoutes />}
        {!isAuthenticated && <UnauthenticatedRoutes />}
      </div>
    </div>
  )
}

export default App
