function Navbar({ children }) {
  return (
    <div>
      <nav className="bg-gray-100 py-4 shadow-sm">
        <div className="container mx-auto">
          <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 tracking-widest uppercase">
            {children}
          </h1>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;