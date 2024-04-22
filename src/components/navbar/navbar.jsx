import "./navbar.css"

export const Navbar = () => {
  return (
    <>
    <div className="containerElementes">
        <div className="logo">Logo</div>
        <ul className="links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/">sobre nosotros</a></li>
            <li><a href="/">Galeria</a></li>
            <li><a href="/">Contactame</a></li>
        </ul>
        <div className="hamburguer"></div>
    </div>
    </>
  )
}

