<template>
  <div>
    <b-card no-body>
  <b-tabs card>
    <b-tab no-body title="구성도" active>
      <b-card-img bottom src="../../potfolio_structure.png" />
    </b-tab>
    <b-tab no-body title="개발환경">
      <ul>
        <br>
        <li class="de-title">서버</li>
        <li style="list-style-type: none;">
          <ul>
            <li>개발서버OS : VMware ubuntu server 16.04LTS</li>
            <li>릴리즈 서버OS : Amazon AWS Windows Server 2016</li>
          </ul>
        </li>
        <br>
        <br>
        <li class="de-title">웹서버</li>
        <li style="list-style-type: none;">
          <ul>
            <li>Node.js - v8.11.1</li>
          </ul>
        </li>
        <br>
        <br>
        <li class="de-title">웹 프레임워크</li>
        <li style="list-style-type: none;">
          <ul>
            <li>Express Framework 4</li>
            <li>Vue.js</li>
            <li>Nuxt.js</li>
            <li>Bootstrap 4</li>
          </ul>
        </li>
        <br>
        <br>
        <li class="de-title">DB</li>
        <li style="list-style-type: none;">
          <ul>
            <li>Mysql - v5.7.22</li>
            <li>MongoDB - v2.6.10</li>
          </ul>
        </li>
        <br>
        <br>
        <li class="de-title">그외 사용한 툴</li>
        <li style="list-style-type: none;">
          <ul>
            <li>Visual Studio Code(에디터)</li>
            <li>Samba Server(Windows와 리눅스 간에 파일공유)</li>
          </ul>
        </li>
        <br>
        <br>
      </ul>  
    </b-tab>
    <b-tab no-body title="Passport&Mysql">
      <ul>
        <br>
        <li class="de-title">사용된 핵심 모듈</li>
        <li style="list-style-type: none;">
          <ul>
            <li>mysql</li>
            <li>passport-local</li>
            <li>passport-facebook</li>
          </ul>
        </li>
        <br>
        <br>
        <li class="de-title">핵심 포인트</li>
        <li style="list-style-type: none;">
          <ul>
            <li>passport-local모듈을 이용하여 로컬 DB에 저장된<br>
                데이터와 비교하여 로그인 검증을 이용할 수 있다.</li><br>
            <li>passport-facebook모듈을 이용하여 facebook 인증을<br>
                거쳐서 게시판에 로그인할 수 있다.</li><br>
            <li>게시물 보기 기능에서 조회수 증가 쿼리과 게시물 데이터를<br>
                가져 오는 쿼리를 Mysql 'Multi State' 기능을 이용해서 구현했다.</li><br>
            <li>게시물 삭제 기능에서 게시글 Table의 Row와 해당 게시글에 관련된 댓글 테이블의 Row들을<br>
                 삭제하는 기능에서 Mysql 'Transaction' 기능을 이용해서 구현했다.</li><br>
          </ul>
        </li>
      </ul>
    </b-tab>
    <b-tab no-body title="GoogleMap&MongoDB">
      <ul>
        <br>
        <li class="de-title">사용된 핵심 모듈</li>
        <li style="list-style-type: none;">
          <ul>
            <li>MongoDB</li>
            <li>GoogleMap javascript API</li>
          </ul>
        </li>
        <br>
        <br>
        <li class="de-title">핵심 포인트</li>
        <li style="list-style-type: none;">
          <ul>
            <li>GoogleMap javascript API를 이용하여 지도 출력 및 장소 검색을 이용할 수 있다.</li><br>
            <li>MongoDB의 'Geomerty index'를 이용하여 원하는 장소의 위도/경도를 기록할 수 있다.</li><br>
            <li>MongoDB의 'near'메서드를 이용하여 지정된 장소로 부터 '즐겨찾기'에 추가된 장소 중<br>
                가장 가까운 장소를 찾을 수 있다</li><br>
            <li>MongoDB의 'within'메서드를 이용하여 지정된 장소로 부터 '즐겨찾기'에 추가된 장소 중<br>
                출력된 지도의 반경에 있는 모든 장소를 찾을 수 있다</li><br>
          </ul>
        </li>
      </ul>
    </b-tab>
    <b-tab no-body title="VUE&Socekt.io">
      <ul>
        <br>
        <li class="de-title">사용된 핵심 모듈</li>
        <li style="list-style-type: none;">
          <ul>
            <li>socket.io</li>
            <li>vue-socekt.io</li>
            <li>vue-bootstrap</li>
          </ul>
        </li>
        <br>
        <br>
        <li class="de-title">핵심 포인트</li>
        <li style="list-style-type: none;">
          <ul>
            <li>Express프레임워크의 ejs템플릿에 Vue.js 프레임워크를 삽입하였다.</li><br>
            <li>socket.io를 이용하여 웹 채팅이 가능하다.</li><br>
            <li>만든 웹 채팅은 1:1 채팅을 지원한다.</li><br>
            <li>만든 웹 채팅은 socekt.io의 'room 관리' 기능을 이용하여 그룹채팅을 지원한다.</li><br>
          </ul>
        </li>
      </ul>
    </b-tab>
    <b-tab no-body title="VUE&NUXT">
      <ul>
        <br>
        <li class="de-title">사용된 핵심 모듈</li>
        <li style="list-style-type: none;">
          <ul>
            <li>nuxt</li>
            <li>vue-bootstrap</li>
          </ul>
        </li>
        <br>
        <br>
        <li class="de-title">핵심 포인트</li>
        <li style="list-style-type: none;">
          <ul>
            <li>'iframe'태그를 이용하여 nuxt의 라우팅에 접근하게 하여 출력했다.</li><br>
            <li>VUE&Socekt.io 프로젝트와 달리 '프레임 소스 보기'를 이용하면<br>
                서버 사이드 렌더링 된 Vue 템플리의 소스코드가 html코드로 변환되서<br>
                출력된다.<br>
                VUE&Socekt.io 프로젝트는 '소스보기'를 이용하면 div태그에 id=app 속성이<br>
                주어진 채로 태그 내에 별다른 코드가 없다.<br>
                (참고 : SPA계열의 프레임워크는 출력된 화면에 대한 코드가 자바스크립트에 기록되기 때문에<br>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;검색엔진에 노출되지 않으므로 Vue의 경우 nuxt를 이용한다.</li><br>
          </ul>
        </li>
      </ul>
    </b-tab>
  </b-tabs>
</b-card>

  </div>
</template>

<style>
.de-title{
  font-size:20px;
}
</style>

