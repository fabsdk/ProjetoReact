//chamando o pacote que eu instalei para dentro
//do meu projeto para poder usá-lo
const express = require('express');
const eventosServices = require('./services/eventosServices');
const usersServices = require('./services/usersServices');
const { checkEmailExists } = require('./services/usersServices');
const body = require('body-parser');
const cors = require('cors');
const e = require('express');

//crio uum objeto app para recer todas as funções do express
const app = express();
app.use(cors());
app.use(body.json());


//callback => função que é passada como parâmetro para ser executada
app.get('/eventos', (req, res)=>{
    res.status(200).json(eventosServices.buscarEventos());
});

app.get('/buscarEventosPorArtista/:artist', (req, res)=>{
    const {artist} = req.params;
    const resultado = eventosServices.buscarEventosPorArtista(artist);

    if(resultado){
        res.status(200).send(resultado);
    }
    else{
        res.status(404).send('Evento não encontrado');
    }

});


app.post('/addUser', (req, res)=>{
    const {name, email, password} = req.body;
    if(name && password && email){
        if(checkEmailExists(email)){
            res.status(400).send('Email já cadastrado');
            return;
        }
        else {
            usersServices.addUser(name, email, password);
            res.status(200).send('Usuário cadastrado com sucesso');
        }
    }
    else {
        res.status(400).send('Erro ao cadastrar usuário');
    }
})

app.post('/login', async (req, res)=>{
    const {email, password} = req.body;

    if(email && password){
    const result = await usersServices.ValidateLogin(email, password);
        if(result){
            res.status(200).send('Login realizado com sucesso');
        }
        else{
            res.status(400).send('Erro ao realizar login');
        }
    }
    else {
        res.status(400).send('Erro ao realizar login');
    }
})


app.listen(8080)