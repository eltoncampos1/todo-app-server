import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTodo1638241750729 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table( {
            name: 'todos',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                 {
                    name: 'content',
                    type: 'varchar',
                },
                {
                    name: 'isComplete',
                    type: 'boolean'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: "now()"
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    isNullable: true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('todos')
    }

}
