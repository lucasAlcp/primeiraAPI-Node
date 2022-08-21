const {response} = require('express');
const express = require('express');

const app = express();

app.get("/texto", (request, response) => {
    return response.send("Bom inicio");
});

app.get("/json/", (request, response)=> {
    return response.json({"message": "Bom inicio"});
});

app.get("/json2/", (request, response)=> {
    return response.json({"message": "show"});
});

app.post("/incluir", (request, response) => {
    const body = request.body;
    console.log(body);
    const {nome,image,categoria,descricao,status} = request.body;

    min = Math.ceil(0);
    max = Math.floor(99);

    const id = Math.floor(Math.random() * (max - min )) + min;
 
    var objeto = {
        id,
        nome,
        image,
        categoria,
        status,
        descricao
    };

    return response.json(objeto);
})


app.listen(3000);