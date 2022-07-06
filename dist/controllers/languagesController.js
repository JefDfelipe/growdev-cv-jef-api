"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguagesController = void 0;
const services_1 = require("../services");
const errors_1 = require("../errors");
const constants_1 = require("../constants");
class LanguagesController {
    async index(response) {
        const service = new services_1.LanguagesService();
        try {
            const languages = await service.find();
            return response.json(languages.map(languages => {
                return {
                    language: languages.language.toUpperCase()
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
        const service = new services_1.LanguagesService();
        try {
            const languages = await service.findOne(parseInt(id));
            return response.json({
                language: languages?.language.toUpperCase()
            });
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async store(request, response) {
        const { language } = request.body;
        const service = new services_1.LanguagesService();
        try {
            const languages = await service.create({
                language: language
            });
            return response.json(languages);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async update(request, response) {
        const { id } = request.params;
        const { language } = request.body;
        const service = new services_1.LanguagesService();
        try {
            const languages = await service.update({
                id: parseInt(id),
                language: language
            });
            return response.json(languages);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async delete(request, response) {
        const { id } = request.params;
        const service = new services_1.LanguagesService();
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
exports.LanguagesController = LanguagesController;
;
