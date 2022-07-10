"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const services_1 = require("../services");
const errors_1 = require("../errors");
const constants_1 = require("../constants");
class UserController {
    async index(response) {
        const service = new services_1.UserService();
        try {
            const user = await service.find();
            return response.json(user.map(user => {
                return {
                    name: user.name.toUpperCase(),
                    profile: user.profile.toUpperCase(),
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
        const service = new services_1.UserService();
        try {
            const user = await service.findOne(parseInt(id));
            return response.json({
                name: user?.name.toUpperCase()
            });
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async store(request, response) {
        const { name, profile, address, contact, experience, languages, skills } = request.body;
        const userService = new services_1.UserService();
        const addressService = new services_1.AddressService();
        const contactService = new services_1.ContactService();
        const experienceService = new services_1.ExperienceService();
        const languageService = new services_1.LanguagesService();
        const skillService = new services_1.SkillsService();
        const dto = {
            name,
            profile,
            address: [],
            contact: [],
            experience: [],
            languages: [],
            skills: []
        };
        try {
            address.forEach(async (address) => {
                const resultQuery = await addressService.findOne(address);
                if (resultQuery && resultQuery.id) {
                    dto.address?.push(resultQuery.id);
                }
                ;
            });
            contact.forEach(async (contact) => {
                const resultQuery = await contactService.findOne(contact);
                if (resultQuery && resultQuery.id) {
                    dto.contact?.push(resultQuery.id);
                }
                ;
            });
            experience.forEach(async (experience) => {
                const resultQuery = await experienceService.findOne(experience);
                if (resultQuery && resultQuery.id) {
                    dto.experience?.push(resultQuery.id);
                }
                ;
            });
            languages.forEach(async (language) => {
                const resultQuery = await languageService.findOne(language);
                if (resultQuery && resultQuery.id) {
                    dto.languages?.push(resultQuery.id);
                }
                ;
            });
            skills.forEach(async (skill) => {
                const resultQuery = await skillService.findOne(skill);
                if (resultQuery && resultQuery.id) {
                    dto.skills?.push(resultQuery.id);
                }
                ;
            });
            const user = await userService.create(dto);
            return response.json(user);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async update(request, response) {
        const { id } = request.params;
        const { name, profile, address, contact, experience, languages, skills } = request.body;
        const service = new services_1.UserService();
        try {
            const user = await service.update({
                id: parseInt(id),
                name: name,
                profile: profile,
                address: address,
                contact: contact,
                experience: experience,
                languages: languages,
                skills: skills
            });
            return response.json(user);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async delete(request, response) {
        const { id } = request.params;
        const service = new services_1.UserService();
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
exports.UserController = UserController;
;
