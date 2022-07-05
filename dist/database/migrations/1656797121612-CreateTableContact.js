"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableContact1656797121612 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableContact1656797121612 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "contact",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: "phone_number",
                    type: "varchar",
                    length: "11",
                    isNullable: false
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
            ]
        }));
    }
    ;
    async down(queryRunner) {
        await queryRunner.dropTable("contact", true, true, true);
    }
    ;
}
exports.CreateTableContact1656797121612 = CreateTableContact1656797121612;
