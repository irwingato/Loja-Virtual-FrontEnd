import React from "react";

const Categoria = ({id, título, onCategoriaClique}) => {
    return (
        <div key={id} onClick={() => onCategoriaClique(id)}>{título}</div>
    )
}

export default Categoria;