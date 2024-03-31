import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUsuario1711822523834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE public.usuario
            (
                id integer NOT NULL,
                nome character varying(100) NOT NULL,
                sobrenome character varying(100) NOT NULL,
                email character varying(100) NOT NULL,
                senha character varying(100) NOT NULL,
                nivel_acesso integer,
                CONSTRAINT usuario_pkey PRIMARY KEY (id),
                CONSTRAINT constraint_email_unico UNIQUE (email)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE public.usuario;
        `);
    }

}
