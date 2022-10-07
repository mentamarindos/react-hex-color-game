import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/styles/index.css'
import { ColorContextProvider } from '@/context/HexaColorProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ColorContextProvider>
        <App />
      </ColorContextProvider>
  </React.StrictMode>
)