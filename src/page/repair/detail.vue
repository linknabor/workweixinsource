<style scoped>
html,body{height: 100%;width: 100%;}
    .box{width: 100%;margin: auto;padding-top: 30px;height: 100%;}
    .row-style{height:30px;line-height: 30px;margin-bottom: 10px;}
    .fs16{font-size: 16px;}
    .fs14{font-size: 14px;}
    .fs12{font-size: 12px;}
    .fw7{font-weight: 700;}
    .clear{clear:both;}
    .qqq{width: 84%;margin: 10px auto 30px;overflow: hidden;}
    .liuyan{line-height: 24px;text-indent: 32px;margin-bottom: 10px;}
    .img-div{float: left;height: 100px;width: 30%;margin: 0 1.6%}
    .img-style{width: 100%;height: 100%;margin: auto;}
    .repair{height: 80px;border-bottom:1px solid #e0e0e0;}
    .div-img{height: 60px; width:60px;margin:10px auto;border:1px solid #ccc;
        border-radius: 50% 50%;overflow: hidden;}
    .repair-title{line-height: 40px;height: 40px;font-size: 16px;font-weight: 600;margin-top: 10px }
    .bot{height: 40px;line-height: 40px;background: #0086ff;color: white;
        text-align: center;letter-spacing: 2px;}
    .fenpai{position: fixed;font-size: 18px; height: 50px;width: 100%;line-height: 50px; bottom: 0;left: 0;
        background: #0086ff;color: white;text-align: center;letter-spacing: 4px;}
</style>
<template>
    <div class="box" v-show="isbox">
        <Row class="row-style">
            <Col span="6" offset="2" class="fs14 fw7">
                <span>报修类型:</span> 
            </Col>
            <Col span="16" class="fs12">
                <span>{{order.repairType}}</span>
            </Col>
        </Row>
        <Row class="row-style">
            <Col span="6" offset="2" class="fs14 fw7">
                <span>报修地址:</span>
            </Col>
            <Col span="16" class="fs12">              
                <span>{{order.repairAddress}}</span>
            </Col>
        </Row>
        <Row class="row-style">
            <Col span="6" offset="2" class="fs14 fw7">
                <span>报修人电话:</span>
            </Col>
            <Col span="16" class="fs12">
                <span>{{order.repairPhone}}</span>
            </Col>
        </Row>
        <Row class="row-style fs14 fw7">
            <Col span="6" offset="2">
                <span>报修内容:</span>
            </Col>
        </Row>
        <Row>
            <Col span="20" offset="2">
                <p class="liuyan">{{order.repairContent}}</p>
            </Col>
        </Row>
        <div  class="qqq">
            <div v-for="(item,index) in imgData" :key="index">
                <div class="img-div">
                    <img :src="item.filePath" alt="" class="img-style">
                </div>
            </div>
        </div>
        <Row v-show="close">
            <Col span="22" offset="2">
                <p><strong>关闭原因:</strong> &nbsp;{{order.repairCloseResion}}</p>
            </Col>
        </Row>
        <div v-show="isweixiu">
            <Row>
                <Col span="4" offset="2">
                    <span><strong>分派信息</strong></span>
                </Col>
            </Row>
            <Row class="repair">
                <Col span="8">
                    <div class="div-img">
                        <img :src="weixiu.assignPepoleImg" alt="" style="width:100%;height:100%; margin:auto;">
                    </div>
                </Col>
                <Col span="14">
                    <Row class="repair-title">
                        <Col span="20">
                            <span>{{weixiu.assignPepoleName}}</span>
                        </Col>
                    </Row>
                    <Row class="repair-tel">
                        <Col span="24">
                            <span>{{weixiu.assignPepolePhone}}</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        <div style="width:100%;height:10px;"></div>
        <Row>
            <Col span="8" offset="2" class="bot">
                <span>联系业主</span>
            </Col>
            <Col span="8" offset="4" class="bot" v-show="isclose">
                <span  @click="closeClick" >关闭订单</span>
            </Col>
        </Row>
        <div style="width:100%;height:80px;"></div>
        <div class="fenpai" v-if="isfenpai" @click="fenpaiClick">
            <span>分派</span>
        </div>
        <div class="fenpai" v-else @click="fenpaiClick">
            <span>重新分派</span>
        </div>
    </div>
</template>

<script>
import img from '../../assets/json/img.json'
export default {
    data () {
        return {
            isbox: false,
            order:{
                repairType: '',
                repairAddress: '',
                repairPhone: '',
                repairContent: '',
                repairCloseResion: ''
            },
            id: this.$route.query.id,
            close: false,
            max: 200,
            imgData: [
                {
                    filePath: ''
                }
            ],
            weixiu: {
                assignPepoleName: '',
                assignPepolePhone: '',
                assignPepoleImg: ''
            },
            isclose:false,
            isweixiu:false,
            isfenpai:false
        };
    },

    components: {},

    computed: {},

    mounted(){
        console.log(this.$route.query.id);
        this.initData()
    },
    methods: {
        initData(){

            let url = "/crm/repairOder/getRepairOrderDetail"
            this.axios({
                url: url,
                method: 'get',
                params: {
                    repairId: this.id
                }
            }).then(res=>{
                console.log(res.data);
                var res = JSON.parse(res.data);
                this.weixiu = res.result.repairAssign;
                this.order = res.result.repairOrder;
                if(this.order.repairType == '0'){
                    this.order.repairType = '公共部位报修';
                }else{
                    this.order.repairType = '私家部位报修';
                };
                if(res.result.repairOrder.repairStatus=='2'){
                    this.close = true;
                };
                if(res.result.repairOrder.repairStatus=='1' || res.result.repairOrder.repairStatus =='3'){
                    this.isweixiu = true;
                };
                if(res.result.repairOrder.repairStatus=="0"){
                    this.isfenpai = true;
                    this.isclose = true;
                }
                this.imgData = res.result.list;
                this.isbox = true;
            })
        },
        closeClick(){
            this.$router.push({
                name:'closeProperty',
                query:{
                    id:this.id
                }
            })
        },
        fenpaiClick(){
            this.$router.push({
                name: 'propertyAssign',
                query:{
                    id: this.id
                }
            })
        }
    }
}

</script>