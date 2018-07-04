<template>
  <div class="app">
    <div v-for="(val, key, index) in commlist">
      <div class="listContainer">        
        &nbsp;&nbsp;&nbsp;
        <router-link id="comm" :to="{name:'comm-screen', params:{commName:val.id}}">
          <font-awesome-icon icon="comments" style="font-size:30px;padding-top:10px" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span v-text="val.name" style="font-size:25px"></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: mapState(['commlist'])
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
  
  #comm:link { color: black; text-decoration: none;}
  #comm:visited { color: black; text-decoration: none;}
  #comm:hover { color: black; text-decoration: none;}
  #comm:active { color: black; text-decoration: none;}
</style>