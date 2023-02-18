import Link from "next/link";

const Header = () => {
  return (
    <header className="header-background py-8 shadow-md bg-white">
      <div className="flex justify-between mb-6 px-4 md:px-32">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <p className="font-bold">{new Date().toDateString()}</p>
      </div>
      <ul className="flex items-center gap-x-6 px-4 md:px-32 text-sm md:text-base">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/todos">Todos</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="#">Sign-in</Link>
        </li>
        <li>
          <Link href="#">Sign-out</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
