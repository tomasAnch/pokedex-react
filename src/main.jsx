import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, PokeDetail } from './pages'

import './index.scss'
import PokemonProvider from './context/PokemonContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/:pokeId',
    element: <PokeDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <RouterProvider router={router}/>
    </PokemonProvider>
  </React.StrictMode>,
);
