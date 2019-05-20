<style scoped>
    .box{width: 98%;margin: auto;}
    .row-style{height: 80px;border-bottom: 1px solid #ccc;}
    .row-style1{pointer-events: none;height: 80px;opacity: 0.6;border-bottom: 1px solid #ccc}
    .checkbox {display: inline-block; width: 30px;height:30px;
       background:url("../../assets/notcheck.png") no-repeat;background-size: 30px;margin-top: 25px;}
    .ischeck{display: inline-block; width: 30px;height: 30px;
       background:url("../../assets/check.png") no-repeat;background-size: 30px;margin-top: 25px;}
    .div-img{height:60px; width:60px;margin:10px auto;border:1px solid #ccc;border-radius: 50%;overflow: hidden;}
    .name{height: 40px;line-height: 40px;}
    .type{height: 40px;line-height: 40px;}
    .state{height: 80px;line-height: 80px;}
    .repair-click{height: 50px;width: 100%;position: fixed;left: 0;bottom: 0;background: cornflowerblue;line-height: 50px;
        text-align: center;color: white;font-size: 18px;letter-spacing: 5px;font-size: 18px; }
</style>
<template>
    <div class="box">
        <div>
            <Row class="row-style">
                <Col span="2" offset="1">
                    <i class="checkbox" :class="{ischeck:ischeck}" @click="isChoose"></i>
                </Col>
                <Col span="4" offset="1">
                     <div class="div-img">
                        <img src="../../assets/qa.jpg" alt="" style="width:100%;height:100%; margin:auto;">    
                    </div>
                </Col>
                <Col span="11" offset="1">
                    <p class="name">陈巨星</p>
                    <p class="type">弱点维修、木工</p>
                </Col>
                <Col span="4">
                    <p class="state">已签到</p>
                </Col>
            </Row>
            <Row class="row-style1">
                <Col span="2" offset="1">
                    <i class="checkbox"></i>
                </Col>
                <Col span="4" offset="1">
                     <div class="div-img">
                        <img src="../../assets/qa.jpg" alt="" style="width:100%;height:100%; margin:auto;">    
                    </div>
                </Col>
                <Col span="11" offset="1">
                    <p class="name">陈巨星</p>
                    <p class="type">弱点维修、木工</p>
                </Col>
                <Col span="4">
                    <p class="state">未签到</p>
                </Col>
            </Row>
        </div>
        <div class="repair-click" @click="fenpai">
            报修登记
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.query.id,
            icon:'',
            ischeck:false,
        };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
        isChoose(){
            this.ischeck = !this.ischeck;
        },
        fenpai(){
            if(this.ischeck == false){
                alert('请选择陈巨星为你服务');
                return
            };
            let url = "crm/repairOder/addRepairAssignPepole?repairId="+this.id+"";
            this.axios({
                url: url,
                method: 'post',
                data:{
                    assignPepoleId: 'ChenJuXing',
                    assignPepoleName: '陈巨星',
                    assignPepoleImg: "http://p.qlogo.cn/bizmail/jC4bsXhaRRxhZ4YcjiaMeOOUQpiakvRicFsEHLxOYv0V0PmBVoUxN93mw/0",
                    assignPepolePhone:"15721479076"
                }
            }).then(res=>{
                console.log(res.data);
                this.$router.push({
                    name: 'detail',
                    query:{
                        id: this.id
                    }
                })
            })
        }
    }
}

</script>