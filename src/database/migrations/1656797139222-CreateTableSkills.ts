import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTableSkills1656797139222 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'skills',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          isNullable: false
        },
        {
          name: 'skill',
          type: 'text',
          isNullable: false
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('skills', true, true, true)
  }
}