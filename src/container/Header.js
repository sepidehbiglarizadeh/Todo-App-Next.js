import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

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
          <button onClick={() => signIn('github')}>Sign-in</button>
        </li>
        <li>
          <button onClick={() => signOut()}>Sign-out</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
