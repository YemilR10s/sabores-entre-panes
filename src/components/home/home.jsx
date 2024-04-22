import "./home.css"
import video from "./bckGround.mp4"
import {motion} from "framer-motion"

export const Home = () => {
  return (
    <>
    
      <div className="homeSection">

            <div className="video">
              <video 
                autoPlay  
                loop muted 
                src={video} 
                type="video/mp4">
                  {/* Puedes agregar más sources para otros formatos de video */}
                  Tu navegador no soporta el elemento de video.
              </video>

                <div className="content">


                  <motion.h1 
                      variants={{
                      hiddent: {opacity: 0, y: -100},
                      visible: {opacity: 1, y: 0}
                      }}  
                      initial= "hiddent"
                      animate= "visible"
                      transition={{duration: 3}}
                      className="homeH1">
                      Bienvenido a Sabores entre   Panes
                  </motion.h1>
                  <motion.p 
                      variants={{
                      hiddent: {opacity: 0, y: 100},
                      visible: {opacity: 1, y: 0}
                    }}
                      initial= "hiddent"
                      animate = "visible"
                      transition={{duration: 3}}
                      className="homeTexto">
                      En Sabores entre Panes nos enorgullecemos de ofrecer una experiencia gastronómica única donde cada hamburguesa es una obra maestra culinaria. Ubicado en el corazón de la ciudad, nuestro restaurante combina el encanto de un ambiente acogedor con la emoción de sabores innovadores.
                  </motion.p>

               <motion.div 
                        variants={{
                        initial: {opacity: 0, y: 100},
                        visible: {opacity: 1, y: 0}
                      }}
                        initial="initial"
                        animate="visible"
                        transition={{duration: 3}}
                        
                        className="iconosYbutton">
                  <motion.button
                        whileHover={{scale: 1.1}}
                        >Mira Nuestro Menu
                  </motion.button> 

                  <motion.i 
                    whileHover={{scale: 1.2}}
                  className="fa-brands fa-facebook"></motion.i>
                  <motion.i 
                    whileHover={{scale: 1.2}}
                  className="fa-brands fa-instagram"></motion.i>
                  <motion.i 
                    whileHover={{scale: 1.2}}
                  className="fa-brands fa-tiktok"></motion.i>

                 
                </motion.div>
                </div>
            
            </div>

            
      </div>

        
      {/* <div className="especialidad">
            <div className="imagen">
              <div className="img"></div>
            </div>
            <div className="texto">
              <h2>Nuestra Especialidad: La Hamburguesa <br /> Gourmet Fuego y Pasión</h2>
              <p>
              Destacamos entre la multitud con nuestra especialidad, la Hamburguesa Gourmet Fuego y Pasión. Preparada con una jugosa carne de res a la parrilla, esta hamburguesa es una explosión de sabores picantes y exóticos que despiertan los sentidos. Combinando nuestro exclusivo aderezo de salsa de chipotle, queso pepper jack fundido, cebollas caramelizadas y una pizca de cilantro fresco, cada bocado es una experiencia ardiente y apasionada que te dejará ansiando más.
              </p>
            </div>
        </div>
     */}
  

    </>
  )
}
  