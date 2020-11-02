import React, {useLayoutEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import "./Home.scss";
import Logo from "../../assets/logo-brain-2.svg";
import LogoWords from "../../assets/caloriapp.png";


const Home = () => {

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

  const [show, setShow] = useState(
    {itemOne: 1, 
      itemTwo: 1, 
      itemThree: 1
    });

    useLayoutEffect(() => {
      const topPos = element => element.getBoundingClientRect().top;
      const botPos = element => element.getBoundingClientRect().bottom;
      const div1PosTop = topPos(firstRef.current);
      const div2PosTop = topPos(secondRef.current);
      const div3PosTop = topPos(thirdRef.current);

      const div1PosBot = botPos(firstRef.current);
      const div2PosBot = botPos(secondRef.current);
      const div3PosBot = botPos(thirdRef.current);
      
      const pend1 = 1/(div1PosBot - div1PosTop)
      const pend2 = 1/(div2PosBot - div2PosTop)
      const pend3 = 1/(div3PosBot - div3PosTop)

      const onScroll = () => {
        const scrollPos = window.scrollY;
        if (div1PosTop < scrollPos) {
          const value = 1 - Math.min((scrollPos - div1PosTop)*pend1,1);
          setShow(state => ({ ...state, itemOne: value }));
        }
        if (div2PosTop < scrollPos) {
          const value = 1 - Math.min((scrollPos - div2PosTop)*pend2,1);
          setShow(state => ({ ...state, itemTwo: value }));
        }
        if (div3PosTop < scrollPos) {
          const value = 1 - Math.min((scrollPos - div3PosTop)*pend3,1);
          setShow(state => ({ ...state, itemThree: value }));
        }
      };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
 
  return (
    <div className="home-main-container">
      <div ref={firstRef} 
        className="container"
        // style={{opacity: show.itemOne }}
        id="presentation">
        <div className="big-logo">
          <img src={Logo} alt="brain" height="250"/>
        </div>
        <div className="flex pres-body">
          <div className="text">
            Estimación de calorias a base de reconocimiento de imagenes
            usando deep learning
          </div>
          <Button 
            variant="contained" 
            className="btn-demo"
            onClick={()=>scrollToRef(thirdRef)}>
              Probar nuestro demo
          </Button>
        </div>
      </div>
      {/* Here goes the about section */}
      <div 
        ref={secondRef} 
        className="container"
        id="Algorithm"
        // style={{opacity: show.itemTwo}} 
      >
        <div className="title">
          <span className="about-word">Sobre </span> 
          <img src={LogoWords} alt="logo" height="100" width="400"/>
        </div>
        <div className="text">
          <p>Lorem ipsum</p>
        </div>
      </div>
      <div 
        ref={thirdRef} 
        className="container"
        id="demo"
        // style={{opacity: show.itemThree }}
      >
        <div className="title">
          <img src={LogoWords} alt="logo" className="demo-logo" height="100" width="400"/>
          <span className="about-word">Demo</span> 
        </div>
        <div className="text-demo">
          <p>
            Prueba nuestro demo siguiendo los siguientes pasos:
          </p>
          <ol>
            <li>Subir la imagen que desees tamaño minimo: 960x960 pixeles</li>
            <li>Selecciona las imagenes que contengan la comida que desees analizar</li>
            <li>Presiona el botón de estimar</li>
          </ol>
        </div>
        <ImageUploader />
      </div>
     
    </div>
  );
};

export default Home;
