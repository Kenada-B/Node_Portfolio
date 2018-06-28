CREATE DATABASE potfolio_db DEFAULT CHARACTER SET utf8;

CREATE TABLE user (
  userid varchar(10) not null PRIMARY KEY,
  userpw varchar(50) not null
)ENGINE=InnoDB;

insert into potfolio_db.user values("maru", password("1234"));

CREATE TABLE board (
  num int not null PRIMARY KEY auto_increment,
  title varchar(60) not null,
  content varchar(400) not null,
  userid varchar(10) not null,
  mod_time timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
  view_num int DEFAULT '1'
)ENGINE=InnoDB;

CREATE TABLE comment (
  num int not null PRIMARY KEY auto_increment,
  article_num int not null,
  comment varchar(400) not null,
  userid varchar(10) not null,
  mod_time timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
)ENGINE=InnoDB;