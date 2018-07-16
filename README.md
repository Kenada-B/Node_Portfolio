# passport_mysql

이 브런치는 포트폴리오 사이트의 **게시판 소스** 입니다.

**특징**
 - NPM에서 passport 모듈을 이용하였습니다.(passport, passport-local, passport-facebook)
 - passport-local모듈(전략)을 이용하여 mysql에 저장되어 있는 User정보와 일치한지 검증합니다.
 - passport-facebook 모듈(전략)을 이용하여 facebook사이트의 검증기능을 이용하여 검증후
    페이스북에서 사용자 실명만 전달받습니다.
 - 게시판의 기능은 보편적인 웹 상의 게시판 기능과 동일합니다.
 - NPM에서 제공하는 mysql모듈을 이용하여
    조회수를 올리는 기능에서는 '멀티스테이트'기능을 이용하여 구현하였으며,
    글을 삭제하는 기능에서는 '트랜잭션'을 이용하였습니다.


**ETC**

 - passport-facebook모듈(전략)을 이용하기 위해서는 웹 서버가 HTTPS로 구동되어야 합니다.
 - Mysql Version : 5.7.22(개발서버에서 사용)
