const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const { getAllContacts, createContact, getContact, updateContact, deleteContact, addContactFrom } = require("../controller/contactController");
const checkLogin = require("../middleware/checkLogin");

// 미들웨어 등록
router.use(cookieParser());

// 로그인 체크를 먼저하고, 그 다음 next() 함수를 통해 두 번째 콜백 함수 실행
// localhost:3000/contacts
router.route("/").get(checkLogin, getAllContacts);

// localhost:3000/contacts/add
router.route("/add")
    .get(checkLogin, addContactFrom)
    .post(checkLogin, createContact);

// localhost:3000/contacts/:id
router.route("/:id")
    .get(checkLogin, getContact)
    .put(checkLogin, updateContact)
    .delete(checkLogin, deleteContact);

module.exports = router;
