import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { RealizadosProvider } from './context/cardRealizado.tsx'

createRoot(document.getElementById('root')!).render(
  <RealizadosProvider>
  <StrictMode>

    <App />

  </StrictMode>
  </RealizadosProvider>
 
)
