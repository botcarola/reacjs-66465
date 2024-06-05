import Card from "./Card";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const ContainerCard = () => {
    const data = useContext(DataContext) 
    console.log(data)
  
    return(
        <>
        {
            data && data.results.map( element => (
                <Card key={element.id} name={element.name}/>                   
            ))
        }
        </>
    )
}

export default ContainerCard;