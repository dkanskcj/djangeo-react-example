import useAuth from "@store/auth/useAuth";
import Path from "@utils/path"
import { useState } from "react";
import { CgProfile } from "react-icons/cg"
import { Link } from "react-router-dom"

const TopBar = () => {
  const auth = useAuth();

  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <header className="grid grid-cols-6 gap-4 px-8 h-24 items-end pb-4 border-b shadow-md">
      <h1 className="uppercase select-none text-4xl">React Sample</h1>
      <nav className="col-span-3">
        <ul className="flex gap-4 select-none">
          <Link to={Path.HOME}>
            <li>Home</li>
          </Link>
          <Link to={Path.UI}>
            <li>UI Preivew</li>
          </Link>
          <Link to={Path.ERR404}>
            <li>404</li>
          </Link>
        </ul>
      </nav>
      <div className="relative col-span-2 flex flex-col justify-center items-end">
        <CgProfile
          className="w-[10vw] max-w-[4rem] h-full cursor-pointer"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        />
        {
          isDropdownOpen && (
            <ul className="absolute top-full w-32 border border-dark divide-y divide-dark rounded-md bg-light">
              <li className="my-li">
                <button className="uppercase w-full h-full" onClick={() => auth.logout()}>Logout</button>
              </li>
              <li className="my-li">
                <button className="uppercase w-full h-full" onClick={() => auth.logout()}>Logout</button>
              </li>
              <li className="my-li">
                <button className="uppercase w-full h-full" onClick={() => auth.logout()}>Logout</button>
              </li>
            </ul>
          )
        }
      </div>
    </header>
  )
}

export default TopBar