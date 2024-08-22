const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt")
const User = require("../models/userModel");

// @desc 로그인폼(화면)
// @route GET /
const getLogin = (req, res) => {
    res.render("home-2");
};

// @desc 로그인 처리(액선)
// @route PIST /
const loginUser = asyncHandler(async (req, res) => {
    // 로그인 처리를 위해서는 아이디/암호를 로그인폼으로부터 받아온다.
    const {username, password } = req.body;
    if (username === "admin" && password === "1234"){
        res.send("로그인 성공!");
    }else {
        res.send("로그인 실패!");
    }
});

// @ desc 사용자등록폼
// @ route GET /register
const getRegister = (req, res) => {
    res.render("register-1");
};

const registerUser = asyncHandler(async (req, res) => {
    const {username, password, password2 } = req.body;
    if ( !username || !password || !password2) {
        res.send("필수값이 없습니다.");
        return;
    }
    if ( password === password2){
        // 사용자가 입력한 비밀번호를 암호화함
        // 10 : 해시함수를 열 번 돌림
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(password);
        console.log(hashedPassword);
        const user = await User.create({namename, password : hashedPassword})
        res.status(201).json({message : "사용자가 등록되었습니다", user})
    }else {
        res.send("비밀번호가 맞지 않습니다.");
    }
});

module.exports = { getLogin, loginUser, getRegister, registerUser };