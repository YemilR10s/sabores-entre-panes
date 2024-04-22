import "./menu.css"

export const Menu = () => {
  return (

    <>

        <div className="containerMenu">

            <div className="cajas">
                <div className="hamburger">

                    <div className="imagen"></div>

                    <div className="description">

                        <h3>Hamburguesa Clásica</h3>
                        <p>Deliciosa hamburguesa con carne de res, lechuga, tomate y salsa especial.   </p>
                        <p className="price">$5.99</p>

                    </div>
                </div>
            </div>

            <div className="cajas">
                <div className="arepa">
                    <div className="imagen"></div>
                    <div className="description">
                        <h3>Arepa Tradicional</h3>
                        <p>Deliciosa arepa rellena con queso amarillo derretido.</p>
                        <p className="price">$3.49</p>
                    </div>
                </div>
            </div>

            <div className="cajas">
                <div className="perro">
                    <div className="imagen"></div>
                    <div className="description">
                    <h3>Perro Caliente Clásico</h3>
                    <p>Delicioso perro caliente con salchicha, pan fresco y tus ingredientes favoritos.</p>
                    <p className="price">$2.99</p>
                    </div>
                </div>
            </div>

            <div className="cajas">
                <div className="Salchipapa">
                    <div className="imagen"></div>
                    <div className="description">
                    <h3>Salchipapa Especial</h3>
                    <p>Deliciosa combinación de papas fritas y salchichas, acompañadas de salsa de tu elección.</p>
                    <p className="price">$4.49</p>
                    </div>
                </div>
            </div>

            <div className="cajas">
                <div className="patacon">
                    <div className="imagen"></div>
                    <div className="description">
                    <h3>Patacón Relleno</h3>
                    <p>Delicioso patacón relleno de carne desmechada, aguacate, tomate y queso.</p>
                    <p className="price">$3.99</p>
                    </div>
                </div>
            </div>
            <div className="cajas">
                <div className="hamburger">
                    <div className="imagen"></div>
                    <div className="description"></div>
                </div>
            </div>
            <div className="cajas">
                <div className="hamburger">
                    <div className="imagen"></div>
                    <div className="description"></div>
                </div>
            </div>
            <div className="cajas">
                <div className="hamburger">
                    <div className="imagen"></div>
                    <div className="description"></div>
                </div>
            </div>
        </div>

    </>
  )
}
