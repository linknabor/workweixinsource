<style scoped>
    .ov{overflow: hidden;}
    .box{width: 98%;margin: auto;}
    .loading{position: fixed;left: 50%;top: 50%;-webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);transform: translate(-50%,-50%);
        width: 60px;height: 60px;}
    .loading-img{width: 100%;height: 100%;}
    .repair{height: 80px;border-bottom:1px solid #e0e0e0;}
    .div-img{height: 60px; width:60px;margin:10px auto;border:1px solid #ccc;border-radius: 50% 50%;overflow: hidden;}
    .repair-title{line-height: 20px;height: 20px;font-size: 16px;font-weight: 600;margin-top: 10px }
    .repair-dom{line-height: 20px;height: 20px; font-size: 14px;font-weight: 300;color: #bbb(231, 118, 118);}
    .map{width: 20px;height: 20px;}
    .repair-right{line-height: 20px;height: 20px;text-align: right;font-size: 16px;font-weight: 500;color: black}
    .repair-click{height: 40px;width: 100%;position: fixed;left: 0;bottom: 0;background: cornflowerblue;line-height: 40px;
        text-align: center;color: white;font-size: 18px;letter-spacing: 5px; }
    
</style>
<template>
    <div class="box">
        <div v-if="isLoading" class="loading">
            <img src="../../assets/loading.gif" alt="" class="loading-img">
        </div>
        <div v-else>
            <mt-loadmore
                :bottomMethod="loadBottom"
                :bottomAllLoaded="allLoaded"
                :auto-fill="false"
                ref = "loadmore">
                <div v-for="(item,index) in listData" :key="index" @click="toRouter(item)">
                    <Row class="repair" >
                        <Col span="8">
                            <div class="div-img">
                                <img v-if="item.repairPepoleImg==null" src="../../assets/qa.jpg" alt=""  style="width:100%;height:100%; margin:auto;"> 
                                <img v-else :src="item.repairPepoleImg" alt="" style="width:100%;height:100%; margin:auto;">
                            </div>
                        </Col>
                        <Col span="14">
                            <Row class="repair-title">
                                <Col span="20" offset="2">
                                    <span>{{item.repairPepoleName}}</span>
                                </Col>
                            </Row>
                            <Row >
                                <Col span="24" class="repair-right ov">
                                    <span>{{item.date2}}</span>
                                </Col>
                            </Row>
                            <Row class="repair-dom ov">
                                <Col span="2" style="font-size:18px">
                                    <div class="map">
                                        <img src="../../assets/map.png" alt="" style="width:100%;height:100%; margin:auto;">
                                    </div>
                                </Col>
                                <Col span="20" offset="1" style="line-height:25px">
                                    <span>{{item.repairAddress}}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </mt-loadmore>
            <div style="width:100%;height:45px;"></div>
            <div class="repair-click" @click="repairClick">
                报修登记
            </div>
        </div>
    </div>
</template>

<script>
import {Indicator, Loadmore} from 'mint-ui';
export default {
    data () {
        return {
            isLoading: true,
            listData:[
                {
                    repairAddress: 'addres',
                    repairDate: 'time'
                }
            ],
            user: this.$route.query,
            result: '',
            page: 1,
            allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉
			bottomLoadingTextVal: '加载中...',
        };
    },

    components: {},

    computed: {},
    created() {
        
    },
    mounted(){
        this.dataList();
        this.state();
    },
    methods: {
        dataList(){
            let _this = this;
            this.axios({
                url: "https://test.e-shequ.com/msa/crm/repairOder/getRepairOrderList?pageNum="+this.page+"",
                method: 'get'
            }).then(res=>{
                console.log(res.data)
                let data = JSON.parse(res.data);
                if(data.success==true){
                    this.isLoading = false;
                };
                this.listData = data.result.list;
                console.log(this.listData);
                this.listData.forEach(function(ele){
                    let date = ele.repairDate;
                    let date1 = _this.getDateTimeStamp(date);
                    ele.date1 = date1;
                    ele.date2 = _this.getDateDiff(date1);
                })
                console.log(this.listData)
            }).catch(err=>{
                console.log(err)
            })
        },
        state(){
            this.axios({
                url: '/crm/repairOder/updateIsLook',
                method: 'get'
            }).then(res=>{
                console.log(res.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        toRouter(item){
            console.log(item);
            this.$router.push({
                name:'detail',
                query:{
                    id: item.repairId
                }
            })
        },
        //标准时间转换为时间戳
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
        repairClick(){
            this.$router.push({
                name: 'register',
                query: this.user
            })
        },
        //上滑加载
        loadBottom(){
            let _this = this;
            this.page +=1;
            let arr = null;
            alert("1---"+this.page)
            let url ="https://test.e-shequ.com/msa/crm/repairOder/getRepairOrderList?pageNum="+this.page+"";
            this.axios({
                url: url,
                method: 'get',
            }).then(res=>{
                alert("2--"+this.page)
                let loadData = JSON.parse(res.data);
                arr = loadData.result.list;
                arr.forEach(function(ele){
                    let date = ele.repairDate;
                    let date1 = _this.getDateTimeStamp(date);
                    ele.date1 = date1;
                    ele.date2 = _this.getDateDiff(date1);
                })
                let num = loadData.result.pages;
                alert(this.page > num);
                if (this.page > num) {
                    this.allLoaded = true;
                    alert("暂无数据..")
                } else {
                    this.listData = this.listData.concat(arr)
                }
            })
            this.$refs.Loadmore.onBottomLoaded();
        },
    }
}

</script>