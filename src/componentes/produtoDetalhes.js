import React from "react";
import { useParams } from "react-router-dom";
import { getProdutoPorId } from '../fetcher';
import styled from 'styled-components';

const ProdutoDetalhes = () => {
    const [produto, setProduto] = React.useState({
        errorMessage: "",
        data: {},
    });
    const {produtoId}= useParams();

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProdutoPorId(produtoId);
            setProduto(responseObject);
        }
        fetchData();
    }, [produtoId]);

    const criarMarcação = () => {
        return { __html: produto.data?.descrição };
    };

    return (        
        <ProdutoInfoArtigo>
            <ProdutoTítulo>{produto.data.título}</ProdutoTítulo>
            <figure>
                <ProdutoImagemContainer>
                    <ProdutoImagem
                        src={`/assets/${produto.data.imagem}`}
                        alt={produto.data.título}
                    />
                </ProdutoImagemContainer>
            </figure>
            <aside>
                <ProdutoInfo>
                    <ProdutoInfoCabeçalho>Dimensões</ProdutoInfoCabeçalho>
                    <label>{produto.data.especificações?.Dimensões}</label>
                </ProdutoInfo>

                {produto.data.especificações?.Capacidade && (
                    <ProdutoInfo>
                    <ProdutoInfoCabeçalho>Capacidade</ProdutoInfoCabeçalho>
                    <label>{produto.data.especificações?.Capacidade}</label>
                    </ProdutoInfo>
                )}
                
                <ProdutoInfo>
                    <ProdutoInfoCabeçalho>Características</ProdutoInfoCabeçalho>
                    <ul>
                        {produto.data.características?.map((f, i) => {
                            return (
                                <ProdutoInfoListItem key={`característica${i}`}>
                                    {f}
                                </ProdutoInfoListItem>
                            );
                        })}
                    </ul>
                </ProdutoInfo>  
            </aside>  
            <aside>
                <ProdutoInfoFinançasPreço>
                        {"R$: " + produto.data.preço}
                </ProdutoInfoFinançasPreço>               
             
                    <ProdutoInfoEstoque>
                        <ProdutoInfoEstoqueRótulo>
                            Nível de estoque: {produto.data.estoque}
                        </ProdutoInfoEstoqueRótulo>
                        <ProdutoInfoEstoqueRótulo>Entregra GRÁTIS</ProdutoInfoEstoqueRótulo>
                    </ProdutoInfoEstoque>
            </aside>
            <ProdutoInfoDescrição
                dangerouslySetInnerHTML={criarMarcação()}
            ></ProdutoInfoDescrição>    
        </ProdutoInfoArtigo>         
    );
};

export default ProdutoDetalhes;

const ProdutoInfoArtigo = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  column-gap: 20px;
`;

const ProdutoTítulo = styled.h1`
  grid-column: 1 / span 3;
  color: #333;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background-color: #f2f2f2;
  border: 2px solid #ccc;
  border-radius: 5px;
`;

const ProdutoImagemContainer = styled.div`
  grid-column: 1 / span 2;
  padding: 10px;
`;

const ProdutoImagem = styled.img`
  width: 100%;
  height: 100%;
`;

const ProdutoInfo = styled.div`
  grid-column: 3 / span 1;
  display: flex;
  flex-direction: column;
`;

const ProdutoInfoCabeçalho = styled.h3`
  color: #333;
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ProdutoInfoListItem = styled.li`
  padding-top: 5px;
`;

const ProdutoInfoEstoque= styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f2f2f2;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProdutoInfoEstoqueRótulo = styled.label`
  padding-bottom: 5px;
`;

const ProdutoInfoFinançasContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f2f2f2;
  border: 2px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProdutoInfoFinançasPreço = styled.div`
  color: #333;
  font-size: 2em;
  font-weight: bold;
  padding-top: 10px;
`;

const ProdutoInfoDescrição = styled.div`
  grid-column: 1 / span 3;
  padding: 10px;
`;
