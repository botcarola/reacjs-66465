import "./App.css"
import Header from "./components/Header";
import Button from "./components/Button";
import Container from "./components/Container";
import Card from "./components/Card";
import FocusComponent from "./components/FocusComponent";
import ChangeBackground from "./components/ChangeBackground";
import Contador from "./components/Contador";

function App() {

  let contador = 0
  const nomnbre = "Hendersson"

  const handlerClick = ( event ) => {
    console.log(event)
  }

  return (
    <>
      <Contador />
      <ChangeBackground />
      <FocusComponent />
      <Header
        mensaje={"Bienvenido al sitio web"}
      />
      <h4>
        {
          nomnbre
        }
      </h4>
      <Button
      evento={handlerClick}
      />    
      <Container
      propCss={"container-cards"}
      >
        <Card 
        imagen={"https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/fomlbso07d2iohrbs4th8qu832a7/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5"}
        nombre={"Pelota 1"}
        precio={"$50000"}
        />
        <div>
          "Hola mundo"
        </div>
      </Container>
      <Container
      propCss={"container-products"}
      >
        <Card 
        imagen={"https://afaar.vtexassets.com/arquivos/ids/156362/904840-800-800.jpg?v=638288476779600000"}
        nombre={"Pelota 2"}
        precio={"$75000"}
        />
      </Container>
    </>
  );
}

export default App
