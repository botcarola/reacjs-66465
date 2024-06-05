import './App.css'
import ContainerCard from './components/ContainerCards'
import { useState, useEffect } from 'react'
import { DataProvider } from './contexts/DataContext'

function App() {
  
  return (
    <DataProvider>
      <ContainerCard />
    </DataProvider>
  )
}

export default App
