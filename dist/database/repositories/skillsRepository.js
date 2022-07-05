"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsRepository = void 0;
const entities_1 = require("../entities");
class SkillsRepository {
    async find() {
        const skill = await entities_1.SkillsEntity.find();
        return skill;
    }
    ;
    async findOne(id) {
        const skill = await entities_1.SkillsEntity.findOne(id);
        return skill;
    }
    ;
    async create(skillDTO) {
        const skill = new entities_1.SkillsEntity(skillDTO.skill);
        skill.save();
        return skill;
    }
    ;
    async update(skillDTO) {
        const skill = await entities_1.SkillsEntity.findOne(skillDTO.id);
        if (skill) {
            skill.skill = skillDTO.skill;
            await skill.save();
        }
        ;
        return skill;
    }
    ;
    async delete(skillID) {
        await entities_1.SkillsEntity.delete(skillID);
    }
    ;
}
exports.SkillsRepository = SkillsRepository;
