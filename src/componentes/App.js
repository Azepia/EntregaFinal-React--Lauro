import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ItemDetailContainer from './components/ItemDetailContainer';

import './style.css';

/* ⚠ Por favor leer el archivo readme 🙏*/
export default function App() {
  return (
    <>
      <NavBar />
      <Hero title="El Rey de la Cerveza" />
      <ItemListContainer />
      <ItemDetailContainer id={3} />
    </>
  );
}
