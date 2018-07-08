<template>
    <div id="app">
        <div id="bg">
            <div id="messagelist">
                <template v-for="(message) in getMessageList">
                    <p :class="specifyMyMessage(message.sender)" v-html="message.message"></p>
                </template>
            </div>
            <b-form-textarea id="messageinput"
                     v-model="message"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="3"
                     :no-resize="true">
            </b-form-textarea>
            <b-button id="messagesubmit" size="sm" variant="warning" @click="sendMessage()" :disabled="isdisabled">
                전송
            </b-button>

        </div>
    </div>
</template>
<script>
export default{
    created(){
        var created_this=this;
        if(created_this.$route.params.commName.startsWith("everyone")){
            created_this.getSocket.emit('enterRoom');
        }
    },
    data(){
        return {
            message:'',
            isdisabled:true,
        }
    },
    computed:{
        getSocket(){
            return this.$store.state.logininfo.socket;
        },
        getMessageList(){
            return this.$store.state.commlist[this.$route.params.commName].commlog;
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
    },
    methods:{
        sendMessage(){
            var data={
                sender:this.$store.state.logininfo.id,
                receiver:this.$route.params.commName,
                message:this.message,
                sendtime:Date.now(),
                roomid:this.$route.params.commName
            }
            
            if(this.$route.params.commName.startsWith("everyone")){
                this.getSocket.emit('RoomMessage', data);
            }else{
                this.getSocket.emit('message', data);
                this.$store.commit('addMessagelog',{message:data})
            }
            this.message='';
        },
        specifyMyMessage(who){
            if(who===this.$store.state.logininfo.id){
                return {MyMessage:true}
            }else{
                return {FriendMessage:true}
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
    height:510px;
    padding:5px;
    overflow:auto;
}
#messageinput{
    width:320px;
    display : inline;
    margin-left:3px;
}
#messagesubmit{
    width:55px;
    margin-bottom:78px;
    margin-left:2px;
    height:85px;
}

.MyMessage{
    text-align:right;
    background:white;
    border-radius: 5px;
    clear:both;
    float:right;
    padding:5px;
    margin-left:40px;

}
.FriendMessage{
    background:yellow;
    border-radius: 5px;
    clear:both;
    float:left;
    padding:5px;
    margin-right:40px;
}
</style>