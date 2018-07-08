<template>
  <div id="app">
    <table border="1" id="app-main">
      <tr>
        <td class="main-menu">
          <router-link :to="{name:'friend-list'}"><font-awesome-icon icon="user" />친구목록</router-link>
        </td>
        <td class="main-menu">
          <router-link :to="{name:'messageroom-list'}"><font-awesome-icon icon="comments" />대화목록</router-link>
        </td>
      </tr>
      <tr>
        <td id="list" valign="top" colspan="2">
          <transition name="slide-fade" mode="out-in">
            <router-view/>
          </transition>    
        </td>
      </tr>
    </table> 
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.$store.dispatch("connect",{socekt:""})
    this.$store.state.logininfo.socket.emit('login',{
      id:this.$store.state.logininfo.id
    });

    var created_this=this;
    created_this.$store.state.logininfo.socket.on("sendGroup",function(data){
      created_this.$store.commit('addMessagelog',{message:data});
    });

    created_this.$store.state.logininfo.socket.on('message',function(data){
      created_this.$store.commit('addMessagelog',{message:data});
    });
  }
}
</script>

<style>
  #app-main{
    border:1px solid #333333;
    border-collapse: collapse;
    width:390px;
  }

  .main-menu{
    background:linear-gradient(to bottom, #666666, #333333, #000000);
    text-align:center;
    height:60px;
    font-size:30px;
    color:white;
  }

  .main-menu>a:link { color: white; text-decoration: none;}
  .main-menu>a:visited { color: white; text-decoration: none;}
  .main-menu>a:hover { color: white; text-decoration: none;}
  .main-menu>a:active { color: #333333; text-decoration: none;}

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
  {
    transform: translateX(10px);
    opacity: 0;
  }
  #list{
    height:600px;
  }

</style>