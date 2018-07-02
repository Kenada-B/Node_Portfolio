<template>
  <div class="app">
    <div v-for="(username, index) in userlist">
      <div class="listContainer" @click="showToggle(index)">
        &nbsp;&nbsp;&nbsp;
        <font-awesome-icon icon="user" style="font-size:30px;padding-top:10px" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span v-text="username" style="font-size:25px"></span>
      </div>
      <div v-show="toggle===index" class="askBox" align="center">
        <font-awesome-icon icon="comments" style="font-size:30px;padding-top:10px" />
        &nbsp;<span style="font-size:20px"> 대화하기</span>
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
  

</style>
