import { SkillsEntity } from '../entities';
import { SkillsDTO } from '../../dto';

export class SkillsRepository {
  async find() {
    const skill = await SkillsEntity.find();

    return skill;
  };

  async findOne(id: string) {
    const skill = await SkillsEntity.findOne(id);

    return skill;
  };

  async create(skillDTO: SkillsDTO) {
    const skill = new SkillsEntity(
      skillDTO.skill
    );

    skill.save();

    return skill;
  };

  async update(skillDTO: SkillsDTO) {
    const skill = await SkillsEntity.findOne(skillDTO.id);

    if (skill) {
      skill.skill = skillDTO.skill;

      await skill.save();
    };

    return skill;
  };

  async delete(skillID: string) {
    await SkillsEntity.delete(skillID);
  };
}