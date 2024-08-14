//익스프레스 서버 만들기

//app.js에서 실행시킨다
const express = require("express");
const { appendFileSync } = require("fs");
const app = express();

const port = 3000;

//get : get 메소드를 지원하는 서버를 생성
app.get("/", (req, res) => {
    res.status(200); //상태코드를 200으로 설정
    res.send("hello Express~");
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행중`);
});