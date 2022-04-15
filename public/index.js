//import { socket } from "socket.io"
//alert('daniel')
/* const socket = io();
socket.on("nice", () => {
    socket.emit("hello");
}); */
const socket = io();
socket.emit("hello", "Hola a todos!!");

socket.on("nice", (message) => {
    console.log(message);
});

const notita = document.querySelector("#notita")
const codigo = document.querySelector("#codigo")
const autor = document.querySelector("#autor")
const comentario = document.querySelector("#comentario")


notita.addEventListener("submit", a => {

    //console.log("enviado datos")
    a.preventDefault()
    socket.emit('cliente:nuevoautor', {
        Id: codigo.value,
        Comentario: comentario.value,
        Autor: autor.value
    })

});