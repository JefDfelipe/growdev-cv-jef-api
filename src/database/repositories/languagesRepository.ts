import { LanguagesEntity } from '../entities';
import { LanguagesDTO } from '../../dto';

export class LanguagesRepository {
    async find() {
        const language = await LanguagesEntity.find();

        return language;
    };

    async findOne(id: string) {
        const language = await LanguagesEntity.findOne(id);

        return language;
    };

    async create(languageDTO: LanguagesDTO) {
        const language = new LanguagesEntity(
            languageDTO.language
        );

        language.save();

        return language;
    };

    async update(languageDTO: LanguagesDTO) {
        const language = await LanguagesEntity.findOne(languageDTO.id);

        if (language) {
            language.language = languageDTO.language;

            await language.save();
        };

        return language;
    };

    async delete(languageID: string) {
        await LanguagesEntity.delete(languageID);
    };
};