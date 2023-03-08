create schema e_sports;

drop If exists time;
create table e_sports.time (
	id SERIAL,
	nome VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY(id)
);

drop If exists jogador;
create table e_sports.jogador (
	id SERIAL,
    id_time INT,
	nome VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_time FOREIGN KEY(id_time) REFERENCES time(id) ON DELETE SET NULL      
);

