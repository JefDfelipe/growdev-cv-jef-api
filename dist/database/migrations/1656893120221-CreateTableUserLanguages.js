"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUserLanguages1656893120221 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableUserLanguages1656893120221 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user_languages',
            columns: [
                {
                    name: 'user_id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'languages_id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false
                }
            ],
            foreignKeys: [
                new typeorm_1.TableForeignKey({
                    referencedColumnNames: ['id'],
                    referencedTableName: 'user',
                    columnNames: ['user_id']
                }),
                new typeorm_1.TableForeignKey({
                    referencedColumnNames: ['id'],
                    referencedTableName: 'languages',
                    columnNames: ['languages_id']
                })
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('user_languages', true, true, true);
    }
}
exports.CreateTableUserLanguages1656893120221 = CreateTableUserLanguages1656893120221;
