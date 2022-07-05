"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsController = void 0;
const services_1 = require("../services");
const errors_1 = require("../errors");
const constants_1 = require("../constants");
class SkillsController {
    async index(response) {
        const service = new services_1.SkillsService();
        try {
            const skills = await service.find();
            return response.json(skills.map(skills => {
                return {
                    skill: skills.skill.toUpperCase()
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
        const service = new services_1.SkillsService();
        try {
            const skills = await service.findOne(id);
            return response.json({
                skill: skills?.skill.toUpperCase()
            });
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async store(request, response) {
        const { skill } = request.body;
        const service = new services_1.SkillsService();
        try {
            const skills = await service.create({
                skill: skill
            });
            return response.json(skills);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async update(request, response) {
        const { id } = request.params;
        const { skill } = request.body;
        const service = new services_1.SkillsService();
        try {
            const skills = await service.update({
                id: id,
                skill: skill
            });
            return response.json(skills);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async delete(request, response) {
        const { id } = request.params;
        const service = new services_1.SkillsService();
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
exports.SkillsController = SkillsController;
;
