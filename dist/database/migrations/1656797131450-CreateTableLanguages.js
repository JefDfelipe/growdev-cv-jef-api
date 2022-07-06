"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableLanguages1656797131450 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableLanguages1656797131450 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'languages',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'language',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('languages', true, true, true);
    }
}
exports.CreateTableLanguages1656797131450 = CreateTableLanguages1656797131450;
