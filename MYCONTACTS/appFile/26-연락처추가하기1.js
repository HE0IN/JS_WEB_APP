// 뷰템플릿엔진을 사용하여 동적인 콘텐츠 출력하기


// 관련파일
// ./routes/contactRoutes-4.js
// ./controllers/contactController-11.js
// ./views/index-2.ejs
// ./views/add-1.ejs

const express = require("express");
const dbConnect = require("../config/dbConnect");

const app = express();

// 뷰엔진 설정하기
app.set("view engine", "ejs");
app.set("Views", "./views");

const port = 3000;

// public 폴더
app.use(express.static("./public"))


dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use("/contacts", require("../routes/contactRoutes")); //contactRoutes-3.js

app.listen(port, () => {
    console.log("3000번 포트에서 서버 실행 중 ...");
});