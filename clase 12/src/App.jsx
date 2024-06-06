import './App.css'
import ContainerTable from './components/ContainerTable'
import { GestionProvider } from './contexts/GestionContext'

function App() {
  return (
    <>
      <GestionProvider>
        <ContainerTable />
      </GestionProvider>
    </>
  )
}

export default App
