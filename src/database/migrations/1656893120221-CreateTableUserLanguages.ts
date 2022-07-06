import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateTableUserLanguages1656893120221 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
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
        new TableForeignKey({
          referencedColumnNames: ['id'],
          referencedTableName: 'user',
          columnNames: ['user_id']
        }),
        new TableForeignKey({
          referencedColumnNames: ['id'],
          referencedTableName: 'languages',
          columnNames: ['languages_id']
        })
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_languages', true, true, true)
  }
}