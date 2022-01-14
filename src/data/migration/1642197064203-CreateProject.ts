import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProject1642197064203 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name: "projects",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar"
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "status",
                    type: "int"
                },
                {
                    name: "owner",
                    type: "varchar"
                },
                {
                    name: "priority",
                    type: "int"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "closed_at",
                    type: "timestamp",
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        return await queryRunner.dropTable("projects");
    }

}
