// 라우터에서 컨트롤러로 코드 이전하기

// MVC 패턴
// Model - view - Controller
// 데이터 UI화면  로직코드

// SW를 만들 때, MVC 패턴을 지키면, 코드의 이해가 빠르고, 
// 직관적이고 품질좋은 코드를 만들 수 있다.

// 관련파일
// ./config/dbConnect
// ./route/contactRoutes-3.js
// ./controller/contactController-1.js
// 실행파일 contactController.js

// @desc 연락처 찾기
// @route GET /contacts/:id


const express = require("express");
const dbConnect = require("../config/dbConnect");

const app = express();

const port = 3000;

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use("/contacts", require("../routes/contactRoutes")); //contactRoutes-3.js

app.listen(port, () => {
    console.log("3000번 포트에서 서버 실행 중 ...");
});