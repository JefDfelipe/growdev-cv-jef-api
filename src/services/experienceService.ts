import { ExperienceRepository } from '../database/repositories';
import { ExperienceDTO } from '../dto';

export class ExperienceService {
  async find() {
    const repository = new ExperienceRepository();
    const experience = await repository.find();

    return experience;
  };

  async findOne(id: string) {
    const repository = new ExperienceRepository();
    const experience = await repository.findOne(id);

    return experience;
  };

  async create(experienceDTO: ExperienceDTO) {
    const repository = new ExperienceRepository();
    const experience = await repository.create(experienceDTO);

    return experience;
  };

  async update(experienceDTO: ExperienceDTO) {
    const repository = new ExperienceRepository();
    const experience = await repository.update(experienceDTO);

    return experience;
  };

  async delete(experienceID: string) {
    const repository = new ExperienceRepository();
    await repository.delete(experienceID);
  };
};