import { ExperienceEntity } from '../entities';
import { ExperienceDTO } from '../../dto';

export class ExperienceRepository {
  async find() {
    const experience = await ExperienceEntity.find();

    return experience;
  };

  async findOne(id: number) {
    const experience = await ExperienceEntity.findOne(id);

    return experience;
  };

  async create(experienceDTO: ExperienceDTO) {
    const experience = new ExperienceEntity(
      experienceDTO.company,
      experienceDTO.workPeriod,
      experienceDTO.description
    );

    experience.save();

    return experience;
  };

  async update(experienceDTO: ExperienceDTO) {
    const experience = await ExperienceEntity.findOne(experienceDTO.id);

    if (experience) {
      experience.company = experienceDTO.company;
      experience.workPeriod = experienceDTO.workPeriod;
      experience.description = experienceDTO.description;

      await experience.save();
    };

    return experience;
  };

  async delete(experienceID: number) {
    await ExperienceEntity.delete(experienceID);
  };
};