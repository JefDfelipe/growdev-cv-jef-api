"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableAddress1656797094158 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableAddress1656797094158 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'address',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'street',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                },
                {
                    name: 'city',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                },
                {
                    name: 'state',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                },
                {
                    name: 'cep',
                    type: 'varchar',
                    length: '9',
                    isNullable: false
                },
                {
                    name: 'country',
                    type: 'varchar',
                    length: '60',
                    isNullable: false
                },
                {
                    name: 'user_id',
                    type: 'int',
                    isNullable: false
                }
            ],
            foreignKeys: [
                new typeorm_1.TableForeignKey({
                    columnNames: ['user_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'user'
                })
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('address', true, true, true);
    }
}
exports.CreateTableAddress1656797094158 = CreateTableAddress1656797094158;
