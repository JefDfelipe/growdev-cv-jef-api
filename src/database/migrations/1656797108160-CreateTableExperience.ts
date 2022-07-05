import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableExperience1656797108160 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'experience',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isNullable: false
        },
        {
          name: 'company',
          type: 'varchar',
          length: '255',
          isNullable: false
        },
        {
          name: 'work_period',
          type: 'varchar',
          length: '40',
          isNullable: false
        },
        {
          name: 'description',
          type: 'text',
          isNullable: false
        }
      ]
    }));
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('experience', true, true, true);
  };
};