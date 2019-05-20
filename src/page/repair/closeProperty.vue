<style scoped>
    .box{width: 96%;margin: auto;}
    .p{margin: 30px auto 10px;padding-left: 10px;font-size: 16px;font-weight: 700;letter-spacing: 2px;}
    .div{margin-left: 10px;margin-right: 10px;}
    .close{height: 40px;width: 100%; line-height: 40px;text-align: center;font-size: 18px;letter-spacing: 4px;font-weight: bold;background: #0086ff;
        color: white;position: fixed;left: 0;bottom: 0;}
</style>
<template>
    <div class="box">
        <p class="p">请填写关闭原因</p>
        <div class="div">
            <Input v-model="textarea" type="textarea" :rows="6" :maxlength="max" placeholder="请填写关闭原因..."/>
        </div>
        <dir class="close" @click="close">
            <span>关闭订单</span>
        </dir>
    </div>
</template>

<script>
export default {
    data () {
        return {
            textarea:'',
            max:200,
            id: this.$route.query.id
        };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
        close(){
            if(this.textarea==""){
                alert("请填写关闭原因");
                return      
            };
            if(this.textarea.length>200){
                alert('字数不能超过200字');
                return
            };
            this.axios({
                url: '/crm/repairOder/closeRepairOrder',
                method: 'get',
                params:{
                    repairId: this.id,
                    repairCloseResion: this.textarea
                }
            }).then(res=>{
                let data = JSON.parse(res.data);
                if(data.success==true){
                    alert(data.result);
                    this.$router.push('/propertyList');
                }
            })
        }
    }
}

</script>