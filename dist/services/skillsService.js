"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsService = void 0;
const repositories_1 = require("../database/repositories");
class SkillsService {
    async find() {
        const repository = new repositories_1.SkillsRepository();
        const skill = await repository.find();
        return skill;
    }
    ;
    async findOne(id) {
        const repository = new repositories_1.SkillsRepository();
        const skill = await repository.findOne(id);
        return skill;
    }
    ;
    async create(skillDTO) {
        const repository = new repositories_1.SkillsRepository();
        const skill = await repository.create(skillDTO);
        return skill;
    }
    ;
    async update(skillDTO) {
        const repository = new repositories_1.SkillsRepository();
        const skill = await repository.update(skillDTO);
        return skill;
    }
    ;
    async delete(skillID) {
        const repository = new repositories_1.SkillsRepository();
        await repository.delete(skillID);
    }
    ;
}
exports.SkillsService = SkillsService;
;
