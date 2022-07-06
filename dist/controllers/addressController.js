"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressController = void 0;
const services_1 = require("../services");
const errors_1 = require("../errors");
const constants_1 = require("../constants");
class AddressController {
    async index(response) {
        const service = new services_1.AddressService();
        try {
            const address = await service.find();
            return response.json(address.map((address) => {
                return {
                    street: address.street.toUpperCase(),
                    city: address.city.toUpperCase(),
                    state: address.state.toUpperCase(),
                    cep: address.cep.toUpperCase(),
                    country: address.country.toUpperCase()
                };
            }));
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async show(request, response) {
        const { id } = request.params;
        const service = new services_1.AddressService();
        try {
            const address = await service.findOne(parseInt(id));
            return response.json({
                street: address?.street.toUpperCase(),
                city: address?.city.toUpperCase(),
                state: address?.state.toUpperCase(),
                cep: address?.cep.toUpperCase(),
                country: address?.country.toUpperCase()
            });
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async store(request, response) {
        const { street, city, state, cep, country } = request.body;
        const service = new services_1.AddressService();
        try {
            const address = await service.create({
                street: street,
                city: city,
                state: state,
                cep: cep,
                country: country
            });
            return response.json(address);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async update(request, response) {
        const { id } = request.params;
        const { street, city, state, cep, country } = request.body;
        const service = new services_1.AddressService();
        try {
            const address = await service.update({
                id: parseInt(id),
                street: street,
                city: city,
                state: state,
                cep: cep,
                country: country
            });
            return response.json(address);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async delete(request, response) {
        const { id } = request.params;
        const service = new services_1.AddressService();
        try {
            await service.delete(parseInt(id));
            return response.sendStatus(204);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
}
exports.AddressController = AddressController;
;
