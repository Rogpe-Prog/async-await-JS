
const cep = '01315001'

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

async function getJsonResponse(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}

async function showCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const json = await getJsonResponse(url);
    console.log(json);
}

showCep(cep);


console.log("A");
console.log("B");