"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsuario1711822523834 = void 0;
class CreateTableUsuario1711822523834 {
    async up(queryRunner) {
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
    async down(queryRunner) {
        queryRunner.query(`
            DROP TABLE public.usuario;
        `);
    }
}
exports.CreateTableUsuario1711822523834 = CreateTableUsuario1711822523834;
//# sourceMappingURL=1711822523834-create_table_usuario.js.map