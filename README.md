# Portfolio_server

이 브런치는 포트폴리오 사이트의 **웹 프레임워크 템플릿** 입니다.

**특징**

 1.  HTTPS 로 구성되어 있습니다.
      보안상의 문제도 있고, 포트폴리오의 '페이스북 패스포트'를 이용하기 위해서는
      페이스북 정책상 웹서버가 HTTPS로 구동되어야 합니다.
2.  프렘워크로 Express 프레임워크를 이용했습니다.
     추가적으로 Express의 미들웨어 및 설정을 개인적인 방식으로 모듈화하여
     유지보수 및 설정을 용이하게 만들었습니다.

**ETC**
\- HTTPS 서버를 위해 인증서와 키 발급을 'Ubuntu Server'에서 **openssl**명령어를 이용하여 발급했습니다.
     **개인키 발급** : openssl genrsa 1024 > key.pem  
     **인증서 발급** : openssl req -x509 -new -key key.pem > cert.pem
