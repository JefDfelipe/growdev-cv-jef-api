import { SkillsRepository } from '../database/repositories';
import { SkillsDTO } from '../dto';

export class SkillsService {
    async find() {
        const repository = new SkillsRepository();
        const skill = await repository.find();

        return skill;
    };

    async findOne(id: string) {
        const repository = new SkillsRepository();
        const skill = await repository.findOne(id);

        return skill;
    };

    async create(skillDTO: SkillsDTO) {
        const repository = new SkillsRepository();
        const skill = await repository.create(skillDTO);

        return skill;
    };

    async update(skillDTO: SkillsDTO) {
        const repository = new SkillsRepository();
        const skill = await repository.update(skillDTO);

        return skill;
    };

    async delete(skillID: string) {
        const repository = new SkillsRepository();
        await repository.delete(skillID);
    };
};