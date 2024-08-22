const express = require("express");
const router = express.Router();
const { getAllContacts,
        createContact,
        getContact,
        updateContact,
        deleteContact,
        addContactFrom,  //연락처 추가폼

        } = require("../../controller/contactController"); //컨트롤러 분리



// localhost:3000/contacts
router.route("/").get( getAllContacts);
// localhost:3000/contacts/add
router.route("/add").get(addContactFrom).post(createContact);
// localhost:3000/contacts/:id/edit
router.route("/:id/edit").get(editContactForm);
// localhost:3000/contacts/:id
router.route("/:id").get(getContact).post(updateContactAction).delete(deleteContact);

module.exports = router;