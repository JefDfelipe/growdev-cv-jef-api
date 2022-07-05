"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressService = void 0;
const repositories_1 = require("../database/repositories");
class AddressService {
    async find() {
        const repository = new repositories_1.AddressRepository();
        const user = await repository.find();
        return user;
    }
    ;
    async findOne(id) {
        const repository = new repositories_1.AddressRepository();
        const user = await repository.findOne(id);
        return user;
    }
    ;
    async create(userDTO) {
        const repository = new repositories_1.AddressRepository();
        const user = await repository.create(userDTO);
        return user;
    }
    ;
    async update(userDTO) {
        const repository = new repositories_1.AddressRepository();
        const user = await repository.update(userDTO);
        return user;
    }
    ;
    async delete(userID) {
        const repository = new repositories_1.AddressRepository();
        await repository.delete(userID);
    }
    ;
}
exports.AddressService = AddressService;
;
