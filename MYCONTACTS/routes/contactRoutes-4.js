const express = require("express");
const router = express.Router();
const { getAllContacts,
        createContact,
        getContact,
        updateContact,
        deleteContact,
        addContactFrom  //연락처 추가폼
        } = require("../controller/contactController"); //컨트롤러 분리



// localhost:3000/contacts
router.route("/").get( getAllContacts ).post( createContact);
router.get("/add", addContactFrom);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

module.exports = router;