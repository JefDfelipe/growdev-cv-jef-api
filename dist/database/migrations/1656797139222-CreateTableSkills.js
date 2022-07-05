"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableSkills1656797139222 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableSkills1656797139222 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "skills",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: "skill",
                    type: "text",
                    isNullable: false
                }
            ]
        }));
    }
    ;
    async down(queryRunner) {
        await queryRunner.dropTable("skills", true, true, true);
    }
    ;
}
exports.CreateTableSkills1656797139222 = CreateTableSkills1656797139222;
;
