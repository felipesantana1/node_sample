require("./server/db/mongoose");

const controller = require("./server/controller/controller");

//Start express webserver
const express = require("express");
const app = express();

//Use multer for multimedia file uploads
const multer = require("multer");
const upload = multer({ dest: './static/uploads/'});

//Start axios for https req res
const ax = require("axios");
const url = "https://jsonplaceholder.typicode.com";

//GET request for all users
// ax.get(`${url}/users`)
//     .then(res => {
//         return fillUsersDB(res.data);
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log("Axios GET method completed!"))

// const fillUsersDB = (users) => {
//     for(let i = 0; i < users.length; i++){
//         controller.fill_db(users[i]);
//     }
// }

app.get("/", (req, res) => {
    res.status(404).send(Error)
})

app.listen("8100", () => {
    console.log("Listening on port 8100")
})