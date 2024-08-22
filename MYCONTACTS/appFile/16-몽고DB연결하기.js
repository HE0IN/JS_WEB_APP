// 몽고DB 연결하기

// 관련파일
// ./route/contactRoute-2.js
// ./config/dbConnect.js
// ./.env

// .env에 DB_CONNECT 문자열을 저장하기
// dotenv 모듈을 설치하기
// npm i dotenv

const express = require("express");
const dbConnect =  require("../config/dbConnect");

const app = express();

const port = 3000;

dbConnect();

app.use(express.json());
app.use(express.urllencoded({extended : true}));

app.get("/", (req, res) => {
    res.send("Hello, Node!!!!!!!!!!!");
});

app.use("/contacts", require("../routes/contactRoutes"));

app.listen(port, () => {
    console.log(("Server is running on port 3000")); 
});