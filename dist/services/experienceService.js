"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceService = void 0;
const repositories_1 = require("../database/repositories");
class ExperienceService {
    async find() {
        const repository = new repositories_1.ExperienceRepository();
        const experience = await repository.find();
        return experience;
    }
    ;
    async findOne(id) {
        const repository = new repositories_1.ExperienceRepository();
        const experience = await repository.findOne(id);
        return experience;
    }
    ;
    async create(experienceDTO) {
        const repository = new repositories_1.ExperienceRepository();
        const experience = await repository.create(experienceDTO);
        return experience;
    }
    ;
    async update(experienceDTO) {
        const repository = new repositories_1.ExperienceRepository();
        const experience = await repository.update(experienceDTO);
        return experience;
    }
    ;
    async delete(experienceID) {
        const repository = new repositories_1.ExperienceRepository();
        await repository.delete(experienceID);
    }
    ;
}
exports.ExperienceService = ExperienceService;
;
