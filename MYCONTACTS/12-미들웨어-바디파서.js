// 바디파서(Body Parser) 미들웨어
// 바디파서란 요청 본문(request body)에 담긴 것을 파싱하는 미들웨어이다.
// 파싱이란 전송된 자료를 프로젝트에서 사용할 수 있는 형식으로 변화하는 것을 말함.

// 함수 목록
// .json       : JSON형식의 본문을 파싱한다.
// .urlencoded : URL로 인코딩된 본문을 파싱한다.
//             : URL 주소줄이 문구가 깨지지 않도록 암호화하는 것을 url encoded라 한다.
// .raw        : 가공되지 않은 바이너리 자료를 파싱한다.
// .text       : 텍스트 형식의 본문을 파싱한다

// 익스프레스 4.16.0 버전부터는 바디파서 함수 중 일부를 익스프레스가 포함하고 있어서,
// 바디파서 모듈을 따로 설치하지 않아도 된다.
// "express" : "^4.19.2"
// app.use(express.json())
// app.use(express.urlencoded({ extended : true}));

// raw함수나 text 함수를 사용하려면 바디파서 모듈을 설치해야함
// npm


// app.use



// 라우터 코드를 외부 파일로 분리하기

// 관련파일
// ./routes/contactRoutes-2.js

// 실행파일
// ./routes/contactRoutes.js

// req.body
// {
//     "name" : "hong",
//     "email" : "hong@email.com"
//     "phone" : "010-1111-2222"
// }

const express = require("express");
const app = express();

const port = 3000;

// JSON 및 URL-encoded 데이터 파싱 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 기본 라우트 설정
app.get("/", (req, res) => {
    res.status(200).send("Hello Node!");
});

// 라우터 미들웨어 등록
app.use("/contacts", require("./routes/contactRoutes"));

// 서버 실행
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

