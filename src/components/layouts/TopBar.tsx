import { CgProfile } from "react-icons/cg" 

const TopBar = () => {
  return (
    <header className="grid grid-cols-6 gap-4 px-8 h-24 items-end pb-4 border-b shadow-md">
      <h1 className="uppercase select-none text-4xl">React Sample</h1>
      <nav className="col-span-3">
        <ul className="flex gap-4 select-none">
          <li>Home</li>
          <li>어디</li>
          <li>어디</li>
        </ul>
      </nav>
      <div className="col-span-2 flex flex-col justify-center items-end">
        <CgProfile className="w-[10vw] max-w-[4rem] h-full" />
      </div>
    </header>
  )
}

export default TopBar