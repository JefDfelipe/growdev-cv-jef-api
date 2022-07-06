"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableExperience1656797108160 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableExperience1656797108160 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'experience',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'company',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                },
                {
                    name: 'work_period',
                    type: 'varchar',
                    length: '40',
                    isNullable: false
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: false
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('experience', true, true, true);
    }
}
exports.CreateTableExperience1656797108160 = CreateTableExperience1656797108160;
