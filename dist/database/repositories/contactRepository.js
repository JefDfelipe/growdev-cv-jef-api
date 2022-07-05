"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRepository = void 0;
const entities_1 = require("../entities");
class ContactRepository {
    async find() {
        const contact = await entities_1.ContactEntity.find();
        return contact;
    }
    ;
    async findOne(id) {
        const contact = await entities_1.ContactEntity.findOne(id);
        return contact;
    }
    ;
    async create(contactDTO) {
        const contact = new entities_1.ContactEntity(contactDTO.phoneNumber, contactDTO.email);
        contact.save();
        return contact;
    }
    ;
    async update(contactDTO) {
        const contact = await entities_1.ContactEntity.findOne(contactDTO.id);
        if (contact) {
            contact.phoneNumber = contactDTO.phoneNumber;
            contact.email = contactDTO.email;
            await contact.save();
        }
        ;
        return contact;
    }
    ;
    async delete(contactID) {
        await entities_1.ContactEntity.delete(contactID);
    }
    ;
}
exports.ContactRepository = ContactRepository;
;
