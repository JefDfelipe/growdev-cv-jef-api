import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTableLanguages1656797131450 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
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
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('languages', true, true, true)
  }
}