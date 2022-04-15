import express from "express";
const app = express();
// const {Server} = require("socket.io");
import { Server as WebSocket } from "socket.io";
import http from "http";
import { Stream } from "stream";
const server = http.createServer(app);
const io = new WebSocket(server);

app.use(express.static(__dirname + "/public"));



/* app.get("/public", (req, res) => {
    res.send("Hola a todos, vamos!!!");
}); */
let datos = [{
    Id: 1,
    Comentario: "mensaje de mensajes",
    Autor: "Carlos Alcantara",
}, ];

io.on("connection", (socket) => {
    /* console.log("${socket} new connection", socket.id);
    socket.emit("nice");
    socket.on("hello", () => {
        console.log('vamos peru');
    }); */
    console.log("${socket} new connection");
    socket.on("hello", (message) => {
        console.log('${message} from hello');
        socket.emit("nice", { user: "Daniel Lugo" });
    });
    socket.on('cliente:nuevoautor', datos => {
        console.log(datos)
    })
});
/* app.get("/public", (req, res) => {
    res.json(datos);
});
app.post("/public", (req, res) => {
    const body = req.body;
    body.Id = datos.length + 1;
    datos.push(body);
    res.json(datos);
}); */
//app.use("./public/", userRouter);
server.listen(3000);


/* app.listen(3000, () => {
    console.log("Example app listenig on port 3000");
}); */