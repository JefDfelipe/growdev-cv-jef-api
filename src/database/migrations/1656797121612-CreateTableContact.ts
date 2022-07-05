import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableContact1656797121612 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'contact',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isNullable: false
        },
        {
          name: 'phone_number',
          type: 'varchar',
          length: '11',
          isNullable: false
        },
        {
          name: 'email',
          type: 'varchar',
          length: '255',
          isNullable: false
        },
      ]
    }));
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contact', true, true, true);
  };

}
