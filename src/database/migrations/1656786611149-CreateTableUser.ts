import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateTableUser1656786611149 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
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
          isNullable: false
        },
        {
          name: 'experience_id',
          type: 'int',
          isNullable: false
        },
        {
          name: 'contact_id',
          type: 'int',
          isNullable: false
        },
        {
          name: 'skills_id',
          type: 'int',
          isNullable: false
        }
      ],
      foreignKeys: [
        new TableForeignKey({
          columnNames: ['address_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'address'
        }),
        new TableForeignKey({
          columnNames: ['experience_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'experience'
        }),
        new TableForeignKey({
          columnNames: ['contact_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'contact'
        }),
        new TableForeignKey({
          columnNames: ['skills_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'skills'
        })
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user', true, true, true)
  }
}