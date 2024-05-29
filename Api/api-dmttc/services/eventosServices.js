const fs = require('fs');
// Biblioteca para ler arquivos
// Crio uma constante que recebe o conteúdo do arquivo
const meusEventos = fs.readFileSync('eventos.json', 'utf-8');

exports.buscarEventos = () =>{
    return JSON.parse(meusEventos);
}

exports.buscarEventosPorArtista = (artist) =>{
    const eventos = JSON.parse(meusEventos);
    return eventos.filter( evento => evento.artist.toLowerCase().includes(artist.toLowerCase()));
}