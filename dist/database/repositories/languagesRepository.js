"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguagesRepository = void 0;
const entities_1 = require("../entities");
class LanguagesRepository {
    async find() {
        const language = await entities_1.LanguagesEntity.find();
        return language;
    }
    ;
    async findOne(id) {
        const language = await entities_1.LanguagesEntity.findOne(id);
        return language;
    }
    ;
    async create(languageDTO) {
        const language = new entities_1.LanguagesEntity(languageDTO.language);
        language.save();
        return language;
    }
    ;
    async update(languageDTO) {
        const language = await entities_1.LanguagesEntity.findOne(languageDTO.id);
        if (language) {
            language.language = languageDTO.language;
            await language.save();
        }
        ;
        return language;
    }
    ;
    async delete(languageID) {
        await entities_1.LanguagesEntity.delete(languageID);
    }
    ;
}
exports.LanguagesRepository = LanguagesRepository;
;
