export const productos = [
    {   id: '1', 
        nombre: 'Limpieza', 
        foto: 'https://i.ibb.co/sH1R4HN/ldh-limpieza-emulsion-Peque-a.jpg', 
        categoria: 'limpieza',
        detalle: 'Suave emulsión con un sistema microemulsionado de higiene profunda que remueve eficazmente el maquillaje y las impurezas. ',
        stock: 2,
        precio: 111,
    },
    {
        id: '2', 
        nombre: 'Detoxify gel limpieza', 
        foto: 'https://i.ibb.co/rQ8Mb4V/ldh-detoxify-gel-limpieza-Peque-a.jpg', 
        categoria: 'gel',
        detalle: 'Gel jabonoso con capacidad de adsorción de toxinas.',
        stock: 5,
        precio: 222,
    },
    {
        id: '3', 
        nombre: 'Hidrosomas  ', 
        foto: 'https://i.ibb.co/YjMW0ng/ldh-hidrosomas-Peque-a.jpg',
        categoria: 'gel',
        detalle: 'Gel liposomado de óptima penetración que ayuda a reparar la barrera epicutánea porque hidrata y retiene la humedad en forma prolongada.',
        stock: 7,
        precio: 333,
    }
]

export const getFetch = new Promise( (res, rej) => {

    let url = 'skiney.com';

    if(url === 'skiney.com') {
        setTimeout( () => {
            res(productos)
        }, 500);
    } else {
        rej('404 not found');
    }
} )


export const getFetchName = new Promise( (res, rej) => {

    let url = 'skiney.com';

    if(url === 'skiney.com') {
        setTimeout( () => {
            res(productos)
        }, 2000);
    } else {
        rej('404 not found');
    }
} )

