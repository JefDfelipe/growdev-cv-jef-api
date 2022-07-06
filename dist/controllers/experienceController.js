"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceController = void 0;
const services_1 = require("../services");
const errors_1 = require("../errors");
const constants_1 = require("../constants");
class ExperienceController {
    async index(response) {
        const service = new services_1.ExperienceService();
        try {
            const experience = await service.find();
            return response.json(experience.map(experience => {
                return {
                    company: experience.company.toUpperCase(),
                    workPeriod: experience.workPeriod.toUpperCase(),
                    description: experience.description.toUpperCase()
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
        const service = new services_1.ExperienceService();
        try {
            const experience = await service.findOne(parseInt(id));
            return response.json({
                company: experience?.company.toUpperCase(),
                workPeriod: experience?.workPeriod.toUpperCase(),
                description: experience?.description.toUpperCase()
            });
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async store(request, response) {
        const { company, workPeriod, description } = request.body;
        const service = new services_1.ExperienceService();
        try {
            const experience = await service.create({
                company: company,
                workPeriod: workPeriod,
                description: description
            });
            return response.json(experience);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async update(request, response) {
        const { id } = request.params;
        const { company, workPeriod, description } = request.body;
        const service = new services_1.ExperienceService();
        try {
            const experience = await service.update({
                id: parseInt(id),
                company: company,
                workPeriod: workPeriod,
                description: description
            });
            return response.json(experience);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async delete(request, response) {
        const { id } = request.params;
        const service = new services_1.ExperienceService();
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
exports.ExperienceController = ExperienceController;
;
