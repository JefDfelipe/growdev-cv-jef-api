"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRepository = void 0;
const entities_1 = require("../entities");
class AddressRepository {
    async find() {
        const address = await entities_1.AddressEntity.find();
        return address;
    }
    ;
    async findOne(id) {
        const address = await entities_1.AddressEntity.findOne(id);
        return address;
    }
    ;
    async create(addressDTO) {
        const address = new entities_1.AddressEntity(addressDTO.street, addressDTO.city, addressDTO.state, addressDTO.cep, addressDTO.country);
        address.save();
        return address;
    }
    ;
    async update(addressDTO) {
        const address = await entities_1.AddressEntity.findOne(addressDTO.id);
        if (address) {
            address.street = addressDTO.street;
            address.city = addressDTO.city;
            address.state = addressDTO.state;
            address.cep = addressDTO.cep;
            address.country = addressDTO.country;
            await address.save();
        }
        ;
        return address;
    }
    ;
    async delete(addressID) {
        await entities_1.AddressEntity.delete(addressID);
    }
    ;
}
exports.AddressRepository = AddressRepository;
;
