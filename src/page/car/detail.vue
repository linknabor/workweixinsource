<style scoped>
    html{font-size: 100px;}
    .box{width: 100%;position: fixed;height: 100%;top: 0px;background-color: #fff;}
    .money{width: 332px;height:53px;background:#4a77b0;margin: 29px auto;
        box-shadow: 0 1px 3px 0 #5ba0f5;border-radius: 6px;
        line-height: 53px;font-size: 20px;color: #fff;text-align: center }

    .detail{margin-bottom: 40px;}
    .justify { text-align: justify; width:100%; font-size:16px; height:22px;}
    .justify > span { display: inline-block /* Opera */; padding-left: 100%; }
    .top_left{height: 22px;width: 100%;margin-left: 20px;color:#000;
        line-height: 22px;font-size: 16px;margin-bottom: 20px;}
    .left-left{height: 22px;}
    .left-con{height: 22px;}
    .df{height: 22px;line-height: 22px;}
    .left-right{height: 22px;}

    .top_right{height: 40px;width: 100%;background: #fff;margin-top: 5pxm;
        border-radius: 20px;border:1px solid #eee;}
    .right-left{width: 30px;height: 30px;border-radius: 50%;background: #fff;
        position: relative;top: 5px;left: 10px;}
    .right-left img{width: 100%;height: 100%;}
    .right-right{height: 40px;font-size: 12px;color: #666;width: 100%;
        line-height: 40px;text-align: center}

    .xian{width: 100%;height: 7px;background: #efefef;}

    .main-top{margin-top: 15px;width: 100%;height: 22px;margin-bottom: 10px;}
    .hen{width: 100%;height: 0.2px;position: relative;top:10px;background: #000; }
    .title{height: 22px;line-height: 22px;width: 100%;text-align: center;
        font-size: 16px;}

    .data2{width: 86%;height: 70px;border-bottom: 1px solid #b1b1b1;margin: 0 auto}
    /* .data2:last-child{border-bottom: none} */
    .time{width: 100%;font-size: 16px;height: 70px;;line-height: 70px;}
    .type{font-size: 16px;color: #626262;height: 40px;line-height: 40px;}
    .qa{font-size: 12px;color: #b1b1b1;}
</style>
<template>
    <div class="box">
        <div class="money" @click="go()">
            <span>逾期欠费: {{money}}元</span>
        </div>
        <Row class="detail">
            <Col span="14" class="qa">
                <div v-for="(item,index) in data1" :key="index">
                    <Row class="top_left">
                        <Col span="8" class="left-left">
                            <div class="justify">{{item.key}}<span></span></div>
                        </Col>
                        <Col span="1"  class="left-con">
                            <span class="df">:</span>
                        </Col>
                        <Col span="14" class="left-right" offset="1">
                            <span class="df">{{item.val}}</span>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col span="8" offset="2">
                <Row class="top_right">
                    <Col span="6">
                        <div class="right-left">
                            <img src="../../assets/image/crm/wx.png" alt="">
                        </div>
                    </Col>
                    <Col span="16">
                        <p class="right-right">联系业主</p>
                    </Col>
                </Row>
            </Col>
        </Row>
        <div class="xian"></div>
        <Row class="main-top">
            <Col span="5" offset="4">
                <div class="hen"></div>
            </Col>
            <Col span="6">
                <p class="title">服务记录</p>
            </Col>
            <Col span="5" >
                <div class="hen"></div>
            </Col>
        </Row>
        <div v-for="(item,index) in data2" :key="index" class="bottom">
            <Row class="data2">
                <Col span="8">
                    <div class="time">{{item.time}}</div>
                </Col>
                <Col span="10" offset="1">
                    <div class="type">{{item.type}}</div>
                    <div class="qa">{{item.qa}}</div>
                </Col>
            </Row>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            money: ' ￥450.00',
            data1:[
                {
                    key: '业主姓名',
                    val: '胡大姐'
                },
                {
                    key: '电话',
                    val: '18866668888'
                },
                {
                    key: '车牌',
                    val: this.$route.query.chepai
                },
                {
                    key: '地址',
                    val: '塞纳风光3号楼5号501室'
                },
            ],
            data2:[
                {
                    time: '2018年6月8日',
                    type: '报修',
                    qa: '快递费分开了会飞..'
                },
                {
                    time: '2018年6月8日',
                    type: '报修',
                    qa: '快递费分开了会飞..'
                },
                {
                    time: '2018年6月8日',
                    type: '报修',
                    qa: '快递费分开了会飞..'
                },
                {
                    time: '2018年6月8日',
                    type: '报修',
                    qa: '快递费分开了会飞..'
                }
            ]
        };
    },
    created(){
        // document.title = this.$route.query.unit + this.$route.query.room;
    },
    components: {},

    computed: {},

    mounted(){},

    methods: {
        go(){
            this.$router.push({
                name: 'bill',
                query:{
                    money:this.money
                }
            })
        }
    }
}

</script>