import React from 'react';

import { Link, useNavigate} from 'react-router-dom';

import styled from 'styled-components';

const CategoriaProduto = ({id, título, imagem, preço, descrição}) => {
    const navigate = useNavigate();
    return (
        <ProdutoInfoArtigo>
            <ProdutoTítulo>
                <Link to={`/produtos/${id}`}>{título}</Link>
            </ProdutoTítulo>

            <ProdutoImagemContainer>
                <Link to={`/produtos/${id}`}>
                    <ProdutoImagem src={`./assets/${imagem}`} alt={título} />
                </Link>
            </ProdutoImagemContainer>        

            <ProdutoInfoFinançasPreço>
                {"R$: "+preço}
                <br></br>{descrição}
            </ProdutoInfoFinançasPreço>
        </ProdutoInfoArtigo>
    )
}

export default CategoriaProduto;

const ProdutoTítulo = styled.div`
    grid-column: 1 / span 3;
    color: darkslategray;
    font-weight: bold;
    font-size: 1.5em;
    padding: 10px;
`;

const ProdutoImagemContainer = styled.div`
    grid-column: 1 / span 3;
    padding: 10px;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
`;

const ProdutoImagem = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ProdutoInfoFinançasPreço = styled.div`
    grid-column: 1 / span 3;
    color: darkslategray;
    font-size: 12px;
    font-weight: bold;
    padding: 10px;
`;

const ProdutoInfoArtigo = styled.article`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
`;