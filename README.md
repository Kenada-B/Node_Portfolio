
# googlemap_mongodb

이 브런치는 포트폴리오 사이트의  **위치 기반 서비스 소스**  입니다.

**특징**

-   NPM에서 mongoose모듈을 이용했습니다.
-   UI 부분에서는 Google에서 제공하는 GoogleMap API를 이용하였습니다.
-  GoogleMap에서 제공하는 위치 정보를 Local MongoDB의 geometry index로 저장한 후,

    MonogoDB의 geometry 메서드를 이용하여 가까운 장소를 찾는 기능, 반경 안의 장소를 찾는 기능을 제공합니다.

**ETC**

-   MongoDB Version : 2.6(개발서버에서 사용)
