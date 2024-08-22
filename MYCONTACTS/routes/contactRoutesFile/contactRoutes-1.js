const express = require("express");
const router = express.Router();

router
    .route("/")
    //모든 연락처 가져오기
    .get((req, res) => {
        res.status(200).send("연락처 페이지");
    })
    .post((req, res) => {
        res.status(201).send("연락처 추가하기");
    });

router
    .route("/:id")
    .get((req, res) => {
        res.status(200).send(`연락처 페이지 : ID : ${req.params.id}`);
    })
    // 연락처 수정하기
    .put((req, res) => {
        res.status(200).send(`연락처 수정하기 : ID : ${req.params.id}`);
    })
    // 연락처 삭제하기
    .delete((req, res) => {
        res.status(200).send(`연락처 삭제하기 : ID : ${req.params.id}`);
    });


module.exports = router;