const Header = () => {
  return (
    <header className="flex justify-around header-background py-12 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <p className="font-bold">{new Date().toDateString()}</p>
    </header>
  );
};

export default Header;
