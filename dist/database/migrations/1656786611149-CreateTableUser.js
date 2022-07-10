"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUser1656786611149 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableUser1656786611149 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                },
                {
                    name: 'profile',
                    type: 'text',
                    isNullable: false
                },
                {
                    name: 'address_id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'experience_id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'contact_id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'skills_id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false
                }
            ],
            foreignKeys: [
                new typeorm_1.TableForeignKey({
                    columnNames: ['address_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'address'
                }),
                new typeorm_1.TableForeignKey({
                    columnNames: ['experience_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'experience'
                }),
                new typeorm_1.TableForeignKey({
                    columnNames: ['contact_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'contact'
                }),
                new typeorm_1.TableForeignKey({
                    columnNames: ['skills_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'skills'
                })
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('user', true, true, true);
    }
}
exports.CreateTableUser1656786611149 = CreateTableUser1656786611149;
