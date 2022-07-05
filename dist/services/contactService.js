"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const repositories_1 = require("../database/repositories");
class ContactService {
    async find() {
        const repository = new repositories_1.ContactRepository();
        const contact = await repository.find();
        return contact;
    }
    ;
    async findOne(id) {
        const repository = new repositories_1.ContactRepository();
        const contact = await repository.findOne(id);
        return contact;
    }
    ;
    async create(contactDTO) {
        const repository = new repositories_1.ContactRepository();
        const contact = await repository.create(contactDTO);
        return contact;
    }
    ;
    async update(contactDTO) {
        const repository = new repositories_1.ContactRepository();
        const contact = await repository.update(contactDTO);
        return contact;
    }
    ;
    async delete(contactID) {
        const repository = new repositories_1.ContactRepository();
        await repository.delete(contactID);
    }
    ;
}
exports.ContactService = ContactService;
;
