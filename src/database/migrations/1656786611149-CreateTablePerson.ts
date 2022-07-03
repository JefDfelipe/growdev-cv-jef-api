import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTablePerson1656786611149 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "person",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
          isNullable: false
        },
        {
          name: "nome",
          type: "varchar",
          length: "255",
          isNullable: false
        },
        {
          name: "profile",
          type: "text",
          isNullable: false
        },
        {
          name: "address_id",
          type: "varchar",
          isNullable: false
        },
        {
          name: "experience_id",
          type: "varchar",
          isNullable: false
        },
        {
          name: "contact_id",
          type: "varchar",
          isNullable: false
        },
        {
          name: "languages_id",
          type: "varchar",
          isNullable: false
        },
        {
          name: "skills_id",
          type: "varchar",
          isNullable: false
        }
      ],
      foreignKeys: [
        new TableForeignKey({
          columnNames: ["address_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "address"
        }),
        new TableForeignKey({
          columnNames: ["experience_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "experience"
        }),
        new TableForeignKey({
          columnNames: ["contact_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "contact"
        }),
        new TableForeignKey({
          columnNames: ["languages_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "languages"
        }),
        new TableForeignKey({
          columnNames: ["skills_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "skills"
        })
      ]
    }));
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("person", true, true, true);
  };
};