

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'David',
}

const passenger2: Passenger = {
    name: 'Nazor',
}

const passenger3: Passenger = {
    name: 'Gustavo',
    children: ['Fatima','Estrella']
}

const printChildren = ( passenger: Passenger ) => {

    const howManyChildren = passenger.children?.length || 0;

    console.log( passenger.name, howManyChildren);
}

printChildren( passenger1 );
