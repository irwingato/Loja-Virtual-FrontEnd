import React, { useState, useEffect } from 'react';
import './App.css';

import { fetcher, getCategorias, getProdutos } from './fetcher';
import Categoria from './componentes/Categoria';
import CategoriaProduto from './componentes/categoriaProdutos';

function App() {
  const [categorias, setCategorias] = useState({ errorMessage: '', data: [] });
  const [produtos, setProdutos] = useState({ errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategorias();
      setCategorias(responseObject);
    };
    fetchData();
  }, []);

  const lidarCategoriaClique = async (id) => {
    const responseObject = await getProdutos(id);
    setProdutos(responseObject);
  };

  const renderCategorias = () => {
    return categorias.data.map((categoria) => (
      <Categoria
        key={categoria.id}
        id={categoria.id}
        título={categoria.título}
        onCategoriaClique={() => lidarCategoriaClique(categoria.id)}
      />
    ));
  };

  const renderProdutos = () => {
    return (
      <div className="produto-container">
        {produtos.data.map((produto) => (
          <CategoriaProduto key={produto.id} {...produto}>
            {produto.título}
          </CategoriaProduto>
        ))}
      </div>
    );
  };

  return (
    <>
      <header><img src="../assets/Logo_Miracle_Mart.png"></img></header>
      <section>
        <nav>
          {categorias.errorMessage && <div>Error: {categorias.errorMessage}</div>}
          {categorias.data && renderCategorias()}
        </nav>
        <main>
          {produtos.errorMessage && <div>Error: {produtos.errorMessage}</div>}
          <h1>Produtos</h1>
          {produtos.data.length > 0 ? renderProdutos() : <p>Selecione uma categoria para ver seus produtos.</p>}
        </main>
      </section>

      <footer>
        Copyright © 2023 [Irwing Seiji Ato]. Todos os direitos reservados
      </footer>
    </>
  );
}

export default App;