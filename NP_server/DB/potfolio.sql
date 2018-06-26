CREATE DATABASE potfolio_db DEFAULT CHARACTER SET utf8;

CREATE TABLE user (
  userid varchar(10) not null PRIMARY KEY,
  userpw varchar(50) not null
)ENGINE=InnoDB;

insert into potfolio_db.user values("maru", password("1234"));
