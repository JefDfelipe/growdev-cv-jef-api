import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateTableAddress1656797094158 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
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
        new TableForeignKey({
          columnNames: ['user_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'user'
        })
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('address', true, true, true)
  }
}