"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const services_1 = require("../services");
const errors_1 = require("../errors");
const constants_1 = require("../constants");
class ContactController {
    async index(response) {
        const service = new services_1.ContactService();
        try {
            const contact = await service.find();
            return response.json(contact.map(contact => {
                return {
                    phoneNumber: contact.phoneNumber.toUpperCase(),
                    email: contact.email.toUpperCase()
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
        const service = new services_1.ContactService();
        try {
            const contact = await service.findOne(id);
            return response.json({
                phoneNumber: contact?.phoneNumber.toUpperCase(),
                email: contact?.email.toUpperCase()
            });
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async store(request, response) {
        const { phoneNumber, email } = request.body;
        const service = new services_1.ContactService();
        try {
            const contact = await service.create({
                phoneNumber: phoneNumber,
                email: email
            });
            return response.json(contact);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async update(request, response) {
        const { id } = request.params;
        const { phoneNumber, email } = request.body;
        const service = new services_1.ContactService();
        try {
            const contact = await service.update({
                id: id,
                phoneNumber: phoneNumber,
                email: email
            });
            return response.json(contact);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async delete(request, response) {
        const { id } = request.params;
        const service = new services_1.ContactService();
        try {
            await service.delete(id);
            return response.sendStatus(204);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
}
exports.ContactController = ContactController;
;
