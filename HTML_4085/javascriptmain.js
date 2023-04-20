// alert('Hola Javascript')

var nombre = "Carlos Diaz";
var edad = 22
var estatura = 170

// document.write(nombre);

var datos = document.getElementById("datos");

datos.innerHTML= `
    <h2>Soy datos</h2>
    <h2>Mi nombre es:</h2>
    <h2>Mi edad es:</h2>
    <h2>Mi estatura es:</h2>
    `;

// Sentencia condicional

if(estatura > 150)
    {
        datos.innerHTML += '<h1>Eres una persona ALTA</h1>';
    }
else
    {
        datos.innerHTML = '<h1>Eres una persona CHAPARRA</h1>';
    }   
