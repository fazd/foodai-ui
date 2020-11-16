import React, {useLayoutEffect, useEffect, useRef, useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import UserContext from "../../context/UserContext";

import * as Api from "../../services/AuthService";

import "./Home.scss";


import Logo from "../../assets/logo-brain-2.svg";
import LogoWords from "../../assets/caloriapp.png";

import Image1 from "../../assets/sample_images/image1.jpg";
import Image2 from "../../assets/sample_images/image2.jpg";
import Image3 from "../../assets/sample_images/image3.jpg";
import Image4 from "../../assets/sample_images/image4.jpg";
import Image5 from "../../assets/sample_images/image5.jpg";
import Image6 from "../../assets/sample_images/image6.jpg";
import Image7 from "../../assets/sample_images/image7.jpg";

const Home = () => {

  const setAuthState = useContext(UserContext).setAuthState;
 

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null); 
  const fourthRef = useRef(null);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

    const [scrolled, setScrolled] = useState(false);
    useLayoutEffect(() => {
      if(window.scrollY > 0){
        setScrolled(true);
      }

      const onScroll = () => {
        if(window.scrollY >=20){
          setScrolled(true);
        }
        else if (window.scrollY < 20){
          setScrolled(false);
        }
      };
      
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
 
  useEffect(() => {
    if(Api.autoLogin){
      setAuthState({ user: localStorage.getItem("user"), reported: true });      
    }
  }, [localStorage.getItem("token")]);

  return (
    <div className="home-main-container">
      <div className="leftsize">
        <div ref={firstRef} 
          className="container"
          id="presentation">
          <div className="big-logo">
            <img src={Logo} alt="brain" height="200"/>
          </div>
          <div className="flex pres-body">
            <div className="text">
              Conoce nuestro método de a base de reconocimiento 
              de imagenes usando deep learning para 
              la clasificación de alimentos y estimación de calorias 
            </div>
            <div className="btn-group">
              <Button 
                variant="contained" 
                className="btn-demo"
                onClick={()=>scrollToRef(secondRef)}>
                  Conoce nuestro método
              </Button>
              <Button 
                variant="contained" 
                className="btn-demo"
                onClick={()=>scrollToRef(thirdRef)}>
                  Demo
              </Button>
            </div>
          </div>
        </div>
        {/* Here goes the about section */}
        <div 
          ref={secondRef} 
          className="container"
          id="algorithm"
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
              <li>Se te mostrarán las categorias estimadas por nuestro modelo, sin embargo, por favor 
                marca las categorias que son correctas para un mejor estimado
              </li>
              <li>
                Presiona en estimar calorias para obtener el resultado final
              </li>
              <li>
                Presiona el botón de guardar para registrar tus resultados 
              </li>
            </ol>
          </div>
          <ImageUploader />
        </div>
      </div>
      <div className="rightside">
        <div 
          ref={fourthRef} 
          className="container"
          id="imagesPreviews"
        >
          <div className={`image-ball ${scrolled? "move-1" : ""}`} id="img-1">
            <img src={Image1} alt=""/> 
          </div>
          <div className={`image-ball ${scrolled? "move-2" : ""}`} id="img-2">
            <img src={Image2} alt=""/> 
          </div>
          <div className={`image-ball ${scrolled? "move-3" : ""}`} id="img-3">
            <img src={Image3} alt=""/> 
          </div>
          <div className={`image-ball ${scrolled? "move-4" : ""}`} id="img-4">
            <img src={Image4} alt=""/> 
          </div>
          <div className={`image-ball ${scrolled? "move-5" : ""}`} id="img-5">
            <img src={Image5} alt=""/> 
          </div>
          <div className={`image-ball ${scrolled? "move-6" : ""}`} id="img-6">
            <img src={Image6} alt=""/> 
          </div>
          <div className={`image-ball ${scrolled? "move-7" : ""}`} id="img-7">
            <img src={Image7} alt=""/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
