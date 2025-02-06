
import reactImg from '../assets/react-core-concepts.png'; //aislar imagen para cuando se suba a produccion no de errores
import "./Header.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function Header(){
    function genRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
            going to build!
          </p>
      </header>
    )
  }

  export default Header;