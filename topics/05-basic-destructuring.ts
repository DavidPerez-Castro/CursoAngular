interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;


}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 50,
    songDuration: 240,
    song: "All the Stars",
    details: {
        author: 'Kendrick Lamar, SZA',
        year: 2018
    }
}


//Desestructuración extraer rapidamente las propiedades y se aplica en objetos, modulos, funciones, etc
const song = 'New Song';

const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details;


//console.log('Song: ', anotherSong);
//console.log('Duration: ', duration);
//console.log('Details: ', author);

//Desestructuración de arreglos
const [ , , trunks = 'Not found' ]: string [] = ['Goku', 'Vegeta'];
//const trunks = dbz[3] || 'No hay personaje';

//Se usa el OR || en caso que no hay ninguna propiedad en el arreglo
//console.log('Personaje 3:', dbz[3] || 'No hay personaje' );
console.error('Personaje 3:', trunks)
export {};