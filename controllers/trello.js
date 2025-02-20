//Datos de Trello
//import dotenv from './dotenv';
//dotenv.config();
const trelloRouter = require('express').Router();
const apiKey = process.env.API_KEY;
const token = process.env.TOKEN;

trelloRouter.post('/', async (request, response) => {
    try {
        const { nombreTablero, nombreTarjeta, descripcionTarjeta } = request.body;

        //TABLERO Y LISTA
        let idLista = '';
        if (nombreTablero === 'Fraude BB') {
            idLista = process.env.LISTA_POR_SUBIR_BB;
        } else if (nombreTablero === 'Fraude TB') {
            idLista = process.env.LISTA_POR_SUBIR_TB;
        }
        
        //API de Trello
        const urlTrello = `https://api.trello.com/1/cards?key=${apiKey}&token=${token}&idList=${idLista}&name=${nombreTarjeta}&desc=${descripcionTarjeta}`;
        
        await fetch(urlTrello, {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            return response.status(200).json({data})        
        })
        .catch(error => {
            console.error('Error al crear la tarjeta:', error);
            return response.sendStatus(400); 
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = trelloRouter;