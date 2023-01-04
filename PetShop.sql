CREATE TABLE "public.Pets" (
	"id" serial NOT NULL,
	"nome" varchar(80) NOT NULL,
	"idade" int NOT NULL,
	"especie" char(1) NOT NULL,
	"raca" varchar(80) NOT NULL,
	"nomeDono" varchar(80) NOT NULL,
	"telefoneDono" varchar(15) NOT NULL,
	CONSTRAINT "Pets_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





