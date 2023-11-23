
//Crear arreglos
//Definir arreglos de string:
const villains: string[] = ['Sukuna','Mahito','Kenjaku'];

interface Character {
    name: string;
    hp: number;
    alliance: string[];
    category?: string; //Poner ? indica a ts que la propiedad es opcional
}

//Objeto de js
const shibuya: Character = {
    name: 'Incidente de shibuya',
    hp: 100,
    alliance: ['Sukuna', 'Kenjaku', 'Mahito']
}

//Hace referencia a mi objeto
shibuya.category = 'Especial';

//Imprime los valores en una tabla
console.table(shibuya);

export {};