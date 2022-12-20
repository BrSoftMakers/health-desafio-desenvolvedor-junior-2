create database petshop;


create table if not exists usuarios(
	id serial primary key,
  	nome text not null,
  	email text not null unique,
  	senha text not null

);


create table if not exists clientes(
	id serial primary key,
  	nome text not null,
    cpf varchar(15),
  	telefone text not null,
  	cep text,
  	logradouro text,
	complemento text,
  	bairro text,
 	cidade text,
  	estado text

);


create table pets(
	id serial primary key,
  	cliente_id integer not null,
  	nome text not null,
  	idade smallint not null,
  	tipo text not null,
  	raca text not null,
  	foreign key (cliente_id) references clientes (id)

);
