const libro = {
    titulo: 'Lord of the Rings: The Fellowship of the Ring' ,
    autor: 'JRR Tolkien',
    genero: 'Fantasy',
    anoPublicacion: 1954,
    editorial: 'Penguin',

    infoLibro: function() {
        console.log('Titulo: ' + this.titulo);
        console.log('Autor: ' + this.autor);
        console.log('Genero: ' + this.genero);
        console.log('Año de Publicacion: ' + this.anoPublicacion);
        console.log('Editorial: ' + this.editorial);
    }

}

libro.infoLibro();