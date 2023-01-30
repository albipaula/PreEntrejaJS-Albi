

let nombre = prompt ("Bienvenido a Cozy holidays departamentos! Cual es su nombre?");
let edad = prompt (`cual es tu edad`);

while ( edad < 18) { alert (`sos menor de 18 años ${ nombre} no podes continuar con la reserva`) 
edad = prompt (`que edad tienes`) ;



}
let email = prompt (`ingresa tu email`);


const personas = parseInt (prompt(`cuantas personas desean hospedarse ${nombre} ?`)) ;

if (edad > 18 ) {


switch (personas){ 
    case 1 : 
        alert ( `La opcion para  ${personas} persona : Departamento  monoambiente ,zona centrica con 1 cama queen`);
        precioTotal (personas);
        break;  

    case 2 : 
        alert ( `La opcion para  ${personas} persona: Departamento monoambiente zona centrica con 1 cama queen y 1 sofa cama`);
        precioTotal (personas);

        break; 
    case 3 : 
        alert ( `La opcion para  ${personas} persona : Departamento  de 1 habitaciones zona centrica con 1 cama queen y 2 single`);
        precioTotal (personas);
        break;
    case 4   : 
        alert ( `La opcion para  ${personas} persona : epartamento  de 1 habitaciones zona centrica con 2 cama queen `); 
        precioTotal (personas);

        break;
    default: 
        alert("lo siento, solo contamos con un maximo de 4 personas, esperamos hospedarlo pronto. ") 
        break;       
}  

}


/*================= FUNCIONES =========================== */

function precioTotal(personas){
    const precioNoche = 1000 * personas;
    alert(`el precio a pagar por noche sera  ARS ${precioNoche} `);
    const desc = prompt("Los usuarios del Banco Santander el dia de hoy tiene un 20% de descuento\nUsted opera con Santander?\n(SI/NO)").toLowerCase();
    if(desc === "si"){
        x = precioNoche * 0.2;
        precioFinal = precioNoche - x;
        alert(`el precio a total a pagar por noche sera  ARS ${precioFinal} , su reserva fue enviada a ${email} . Gracias por confiar en nosotros!  `); 
    }else{
        alert(`el precio a pagar por noche sera  ARS ${precioNoche} , su reserva fue enviada a ${email} . Gracias por confiar en nosotros! `);
    }
}








