<template>
    <div id="app">
        <div id="bg">
            <div id="messagelist">
            </div>
            <b-form-textarea id="messageinput"
                     v-model="message"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="3"
                     :no-resize="true">
            </b-form-textarea>
            <b-button id="messagesubmit" size="sm" variant="warning" :disabled="isdisabled">
                전송
            </b-button>

        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            message:'',
            isdisabled:true
        }
    },
    watch:{
        message(text){
            if(text.trim().length===0){
               this.isdisabled=true; 
            }else{
                this.isdisabled=false;
            }
        }
    }
}
</script>
<style>
#bg{
    background-image: url("../assets/messenger-bg.png");
    height:600px;
}
#messagelist{
    border:1px solid black;
    height:510px;
}
#messageinput{
    width:325px;
    display : inline;
}
#messagesubmit{
    width:55px;
    margin-bottom:78px;
    height:85px;
}
</style>