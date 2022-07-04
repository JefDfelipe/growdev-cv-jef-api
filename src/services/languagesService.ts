import { LanguagesRepository } from '../database/repositories';
import { LanguagesDTO } from '../dto';

export class LanguagesService {
  async find() {
    const repository = new LanguagesRepository();
    const language = await repository.find();

    return language;
  };

  async findOne(id: string) {
    const repository = new LanguagesRepository();
    const language = await repository.findOne(id);

    return language;
  };

  async create(languageDTO: LanguagesDTO) {
    const repository = new LanguagesRepository();
    const language = await repository.create(languageDTO);

    return language;
  };

  async update(languageDTO: LanguagesDTO) {
    const repository = new LanguagesRepository();
    const language = await repository.update(languageDTO);

    return language;
  };

  async delete(languageID: string) {
    const repository = new LanguagesRepository();
    await repository.delete(languageID);
  };
};