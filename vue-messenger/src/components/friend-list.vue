<template>
  <div class="app">
    <div v-for="(user, index) in userlist">
      <div class="listContainer" @click="showToggle(index)">
        &nbsp;&nbsp;&nbsp;
        <font-awesome-icon icon="user" style="font-size:30px;padding-top:10px" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span v-text="user.name" style="font-size:25px"></span>
      </div>
      <div v-show="toggle===index" class="askBox" align="center">
        <router-link id="enter-comm" :to="{name:'comm-screen', params:{commName:user.commid}}">
          <font-awesome-icon icon="comments" style="font-size:30px;padding-top:10px" />
          <span style="font-size:20px;padding-top:2000px">대화하기</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data(){
    return{
      toggle:-1
    }
  },
  computed: mapState(['userlist']),
  methods:{
    showToggle(index){
      this.toggle=index;
    }
  }
}
</script>

<style>

  .listContainer{
    border-bottom: 1.5px solid #CCCCCC;
    height:50px;
  }
  .listContainer:hover{
    background:#CCCCCC;
  }
  .askBox{
    background:#CCCCCC;
    height:50px;
  }
  
  #enter-comm:link { color: black; text-decoration: none;}
  #enter-comm:visited { color: black; text-decoration: none;}
  #enter-comm:hover { color: black; text-decoration: none;}
  #enter-comm:active { color: black; text-decoration: none;}

</style>
