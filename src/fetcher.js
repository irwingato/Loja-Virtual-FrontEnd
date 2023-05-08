const BASE_URL = "http://localhost:3001";

export const fetcher = async(url) => {
    let responseObject = { errorMessage: '', data: []};
    try{
        const response = await fetch(BASE_URL + url);
        if (!response.ok){
            throw new Error(`HTTP Error ${response.status}`);
        }
        const responseData = await response.json();
        responseObject.errorMessage = '';
        responseObject.data = responseData;

        return responseObject;
    }
    catch(err){
        responseObject.errorMessage = err.Message;
        return responseObject;
    }
}

export const getCategorias = () => {
    return fetcher('/categorias');
}

export const getProdutos = id => {
    return fetcher('/produtos?catId=' + id)
}

export const getProdutoPorId = id => {
    return fetcher('/produtos/' + id);
}