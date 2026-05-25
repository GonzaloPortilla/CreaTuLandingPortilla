import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <h2>TecnoShop</h2>

      <ul className="menu">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Ofertas</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;