<style scoped>
    .ov{overflow: hidden;}
    .box{width: 98%;margin: auto;border-bottom: 1px solid #e0e0e0;}
    .repair{height: 80px;}
    .huibiao{width:20px;height:20px;background:rgb(255, 0, 0);font-size: 14px;color: white;
        position: absolute;border-radius: 50%;right: -5px;top: -5px;line-height: 20px;text-align: center;}
    .div-img{width:60px;height: 60px; margin:10px auto;border:1px solid #ccc;position: relative;}
    .repair-title{line-height: 20px;height: 20px;font-size: 16px;font-weight: 600;margin-top: 10px;}
    .repair-dom{line-height: 20px;height: 20px; font-size: 14px;font-weight: 300;color: #bbb(231, 118, 118);}
    .repair-right{line-height: 20px;height: 20px;text-align: right;font-size: 16px;font-size: 500;color: black}
</style>
<template>
    <div class="box">
        <div @click="togo">
            <Row class="repair" style="border-bottom:1px solid #e0e0e0;">
                <Col span="8">
                    <div class="div-img">
                        <div class="huibiao" v-show="ifNum">{{num}}</div>
                        <img src="../../assets/repair.png" alt="" style="width:100%;height:100%; margin:auto;">
                    </div>
                </Col>
                <Col span="14">
                    <Row class="repair-title">
                        <Col span="24">
                            <span>报修订单</span>
                        </Col>
                    </Row>
                    <Row >
                        <Col span="24" class="repair-right">
                            <span>{{result}}</span>
                        </Col>
                    </Row>
                    <Row class="repair-dom ov">
                        <Col span="24">
                            <span v-if="num>0">有{{num}}条最新的报修信息</span>  
                            <span v-else>没有新的报修信息</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
            
        <Row class="repair">
            <Col span="8">
                <div class="div-img">
                    <img src="../../assets/complain.png" alt="" style="width:100%;margin:auto;">
                </div>
            </Col>
            <Col span="14">
                <Row class="repair-title">
                    <Col span="16">
                        <span>投诉处理</span>
                    </Col>
                </Row>
                <Row >
                    <Col span="24" class="repair-right">
                        <span>上午11:09</span>
                    </Col>
                </Row>
                <Row class="repair-dom">
                    <Col span="20">
                        <span></span>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ifNum: false,
            num:'',
            time: '',
            result: '',
            user:this.$route.query
        };
    },

    components: {},

    computed: {},

    mounted(){
        console.log(this.$route.query)
        this.qa()
    },

    methods: {
        qa(){
            this.axios({
                url: '/crm/repairOder/getNotLookOrder',
                method: 'get'
            }).then(res=>{
                console.log(res.data);
                let data = JSON.parse(res.data);
                console.log(data)
                this.num = data.result.count;
                if(this.num>0){
                    this.ifNum = true;
                }
                let date = data.result.date;//标准时间
                let date1 = this.getDateTimeStamp(date) //时间戳
                this.getDateDiff(date1)
            })
        },
        getDateTimeStamp(dateStr){
            return Date.parse(dateStr.replace(/-/gi,"/"));
        },
        getDateDiff(dateTimeStamp){
            var minute = 1000 * 60;
            var hour = minute * 60;
            var day = hour * 24;
            var halfamonth = day * 15;
            var month = day * 30;
            var now = new Date().getTime();
            var diffValue = now - dateTimeStamp;
            if(diffValue < 0){return;}
            var monthC =diffValue/month;
            var weekC =diffValue/(7*day);
            var dayC =diffValue/day;
            var hourC =diffValue/hour;
            var minC =diffValue/minute;
            if(monthC>=1){
                this.result="" + parseInt(monthC) + "月前";
            }
            else if(weekC>=1){
                this.result="" + parseInt(weekC) + "周前";
            }
            else if(dayC>=1){
                this.result=""+ parseInt(dayC) +"天前";
            }
            else if(hourC>=1){
                this.result=""+ parseInt(hourC) +"小时前";
            }
            else if(minC>=1){
                this.result=""+ parseInt(minC) +"分钟前";
            }else
            this.result="刚刚";
            return this.result;
        },
        togo(){
            this.$router.push({
                name: 'propertyList',
                query:this.user
            })
        }
    }
}

</script>