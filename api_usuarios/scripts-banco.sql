
CREATE DATABASE USUARIOS;

CREATE TABLE USER_TYPE (
  ID INTEGER PRIMARY KEY,
  TIPO VARCHAR(100)
);

CREATE TABLE USER_MODEL (
  ID INTEGER PRIMARY KEY,
  NOME VARCHAR(100),
  SOBRENOME VARCHAR(100),
  EMAIL VARCHAR(100),
  SENHA VARCHAR(100),
  NIVEL_ACESSO INTEGER
);