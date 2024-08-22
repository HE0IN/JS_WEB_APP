const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc : 코드 설명
// @route : 메소드와 경로

// @desc : 전체 연락처 가져오기
// @route : GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    // 헤더와 푸터를 나눈
    res.render("index-2", {contacts : contacts}); 
});

// @desc 새 연락처 추가하기
// @route POST /contacts
const createContact = asyncHandler(async (req, res) => {
    //객체 구조분해할당 key와 value가 동일함.
    const {name, email, phone} = req.body;
    if( !name || !email || !phone){
        return res.status(400).send("필수값이 입력되지 않음");
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(200).send("새 연락처 추가");
});

// @desc 연락처 상세보기
// @route GET /contacts/:id
const getContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    // const contact = await Contact.findByOne({name : name});
    res.status(200).send(contact);
});

// @desc 연락처 수정하기
// @route PUT /contacts/:id
const updateContact = asyncHandler( async (req, res) => {
    // res.status(200).send(`연락처 수정하기 ID : ${req.params.id}`);
    const id = req.params.id;
    const {name, email, phone} = req.body;
    const updateContact = await Contact.findByIdAndUpdate(
        id,
        {name, email, phone}, 
        {new : true} // 수정한 후의 도큐먼트로 반환 해주는 옵션
    )

    res.status(200).send( updateContact );
});

// @desc 연락처 삭제하기
// @route DELETE /contacts/:id
const deleteContact = asyncHandler( async (req, res) => {
    // res.status(200).send(`연락처 삭제하기 ID : ${req.params.id}`);
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("연락처를 찾을 수 없습니다. (ID 없음)");
    }
    await Contact.deleteOne();
    res.status(200).send("연락처 삭제됨.");

});

module.exports = { getAllContacts, createContact, getContact, updateContact, deleteContact };