import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  console.log({ session, status });

  return (
    <header className="header-background py-8 shadow-md bg-white">
      <div className="flex justify-between mb-6 px-4 md:px-32">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <p className="font-bold">{new Date().toDateString()}</p>
      </div>
      <ul
        className={`flex items-center gap-x-6 px-4 md:px-32 text-sm md:text-base ${
          status === "loading" && !session ? "opacity-0" : "opacity-100"
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/todos">Todos</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        {!session && status !== "loading" && (
          <li>
            <button onClick={() => signIn("github")}>Sign-in</button>
          </li>
        )}
        {session && (
          <li>
            <button onClick={() => signOut()}>Sign-out</button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
