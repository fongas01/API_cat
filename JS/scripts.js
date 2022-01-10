//1º -  Criar a constante padrão BASE_URL para armazenar o endereço da API
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catImg = document.getElementById('cat');
const catBtn = document.getElementById('change-cat');

//PUXANDO OS DADOS DA URL / API
//2º - Criar a função (ARROW FUNCTION), assíncrona (ASYNC) para puxar os gatinhos da url;com os dados (DATA)
//3º - Converter os dados em em arquivo JSON para depois em json do js
//Retornando em um arquivo selecionado menos pesado (webpurl) na url

/*const getCats = async() =>{
    const data = await fetch (BASE_URL);
    const json = await data.json();

    return json.webpurl;
}
*/

//OU podemos usar o TRY CATCH para o mesmo efeito de pegar os gatinhos
const getCats = async() =>{
    try{
        const data = await fetch (BASE_URL);
    const json = await data.json();

    return json.webpurl;
    } catch (e){
        console.log(e.message);
    }
};

    const loadImg = async () =>{
        catImg.src =await getCats();
    }

catBtn.addEventListener('click',loadImg);

loadImg();

//EXIBINDO OS RESULTADOS 
//Usando a manutenção da DOM
//1- No HTML, pegamos os id referidos e colocamos na LINHA 3 e 4 (Em baixo da BASE_URL)
//2 - Fazer o  LOAD da IMG (também é Arrow function assíncrona) 
//na linha 31 depois do return da função que criamos para pegar os gatinhos.
//achando (src) as imagens pelo await no getCats

// Na linha 35 faremos o LISTINER DO BOTÃO

// Nalina 37, determinamos que o projeto já abra com uma img