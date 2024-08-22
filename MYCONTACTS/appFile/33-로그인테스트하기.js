// 관리자 등록하기
// 로그인 화면 구성

// 관련파일
// ./routes/contactRoutes-5.js
// ./controllers/contactController-15.js
// ./views/index-4.ejs
// ./views/add-2.ejs
// ./views/update-3.ejs PUT요청하기

// 로그인 관련파일
// ./routes/loginRoutes-2.js
// ./controllers/loginController-2.js
// ./views/home-2/ejs

const express = require("express");
const dbConnect = require("../config/dbConnect");
const methodOverride = require("method-override");

const app = express();

// 뷰엔진 설정하기
app.set("view engine", "ejs");
app.set("Views", "./views");

const port = 3000;

// public 폴더
app.use(express.static("./public"));
// method-override 미들웨어 등록
app.use(methodOverride("_method"));


dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use("/", require("../routes/loginRoutes"));
app.use("/contacts", require("../routes/contactRoutes")); //contactRoutes-3.js

app.listen(port, () => {
    console.log("3000번 포트에서 서버 실행 중 ...");
});