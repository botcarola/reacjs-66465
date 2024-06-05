import Container from "./Container"
import { DataProvider } from "../contexts/DataContext"

const Personajes = () => {

    return (
        <DataProvider>
            <Container>
                <h2>
                    Personajes
                </h2>
            </Container>
        </DataProvider>
    )
}

export default Personajes