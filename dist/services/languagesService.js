"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguagesService = void 0;
const repositories_1 = require("../database/repositories");
class LanguagesService {
    async find() {
        const repository = new repositories_1.LanguagesRepository();
        const language = await repository.find();
        return language;
    }
    ;
    async findOne(id) {
        const repository = new repositories_1.LanguagesRepository();
        const language = await repository.findOne(id);
        return language;
    }
    ;
    async create(languageDTO) {
        const repository = new repositories_1.LanguagesRepository();
        const language = await repository.create(languageDTO);
        return language;
    }
    ;
    async update(languageDTO) {
        const repository = new repositories_1.LanguagesRepository();
        const language = await repository.update(languageDTO);
        return language;
    }
    ;
    async delete(languageID) {
        const repository = new repositories_1.LanguagesRepository();
        await repository.delete(languageID);
    }
    ;
}
exports.LanguagesService = LanguagesService;
;
