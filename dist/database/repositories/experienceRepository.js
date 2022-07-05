"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRepository = void 0;
const entities_1 = require("../entities");
class ExperienceRepository {
    async find() {
        const experience = await entities_1.ExperienceEntity.find();
        return experience;
    }
    ;
    async findOne(id) {
        const experience = await entities_1.ExperienceEntity.findOne(id);
        return experience;
    }
    ;
    async create(experienceDTO) {
        const experience = new entities_1.ExperienceEntity(experienceDTO.company, experienceDTO.workPeriod, experienceDTO.description);
        experience.save();
        return experience;
    }
    ;
    async update(experienceDTO) {
        const experience = await entities_1.ExperienceEntity.findOne(experienceDTO.id);
        if (experience) {
            experience.company = experienceDTO.company;
            experience.workPeriod = experienceDTO.workPeriod;
            experience.description = experienceDTO.description;
            await experience.save();
        }
        ;
        return experience;
    }
    ;
    async delete(experienceID) {
        await entities_1.ExperienceEntity.delete(experienceID);
    }
    ;
}
exports.ExperienceRepository = ExperienceRepository;
;
