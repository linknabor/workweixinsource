<style scoped>
    html{font-size: 100px;}
    .box{width: 100%;position: fixed;height: 100%;top: 0px;background-color: #fff;}
    .main{width: 90%;border:1px solid #ccc;margin: 10px auto;min-height: 500px; }
    .top{width: 90%;height: 40px;margin: 7px auto 0;
        border-bottom: 1px solid #39649a;margin-bottom: 30px;}
    .title{width: 122px;height: 40px;background: #4a77b0;line-height: 40px;
        font-size: 18px;text-align: center;color: #fff;}
    .items{width: 90%;}
    .item{width: 100%;height: 26px;margin: 20px;}
    .item_name{font-size: 18px;line-height: 26px;text-align: left}
    .item_dian{line-height: 26px;font-size: 12px;}
    .item_noCheck{width: 20px;height: 20px;margin: 3px auto;background: #fff;
        border-radius: 50%;border: 1px solid #4a77b0;}
    .item_check{width: 20px;height: 20px;margin: 3px auto;background: #fff;border-radius: 50%;
        border: 1px solid #4a77b0;background:url('../../assets/image/crm/checked.png') no-repeat 100% 100%;}

    .bottom{width: 100%;height: 60px;border: 1px solid #4a77b0;position: fixed;left: 0;bottom: 0;}
    .money{width: 100%;height: 60px;line-height: 60px;text-align: right;font-size: 20px;}
    .submit{width: 100%;height: 60px;line-height: 60px;background: #4a77b0;font-size: 25px;
        text-align: center;color: white}
</style>
<template>
    <div class="box">
        <div class="main">
            <div class="top">
                <div class="title">账单详情</div>
            </div>
            <div class="items" v-for="(item,index) in data" :key="index">
                <div class="item" @click="toCheck(item)">
                    <Row>
                        <Col span="14">
                            <p class="item_name">{{item.name}}</p>
                        </Col>
                        <Col span="8">
                            <p class="item_dian">----------</p>
                        </Col>
                        <Col span="2">
                            <div class="item_noCheck" :class="{item_check:item.ischecked}"></div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
        <div class="bottom">
            <Row>
                <Col span="15">
                    <div class="money">总金额￥:&nbsp;{{money}}&nbsp;元</div>
                </Col>
                <Col span="8" offset="1">
                    <div class="submit" @click="pay">收款</div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            data:[
                {
                    name: '2018年1月物管理费',
                    ischecked: false,
                    money: 100,
                    id:1
                },
                {
                    name: '2018年2月物管理费',
                    ischecked: false,
                    money:200,
                    id:2
                },
                {
                    name: '2018年3月物管理费',
                    ischecked: false,
                    money: 300,
                    id:3
                },
                {
                    name: '2018年4月物管理费',
                    ischecked: false,
                    money: 400,
                    id:4
                },
                {
                    name: '2018年5月物管理费',
                    ischecked: false,
                    money: 500,
                    id:5
                },
                {
                    name: '2018年6月物管理费',
                    ischecked: false,
                    money: 600,
                    id:6
                }
            ]
        };
    },
    watch:{
    },
    components: {},

    computed: {
        money:function(){
            let allPrice = Number();
            this.data.forEach(function(ele){
                if(ele.ischecked == true){
                    allPrice +=ele.money;
                }
            })
            return allPrice;
        }
    },

    mounted(){},

    methods: {
        toCheck(ele){
            ele.ischecked = !ele.ischecked;
            console.log(ele);
        },
        pay(){
            let arrId = [];
            let allPrice = Number();
            this.data.forEach(function(ele){
                if(ele.ischecked == true){
                    arrId.push(ele.id);
                    allPrice +=ele.money;
                }
            })
            console.log(arrId);
            console.log(allPrice);
            if(arrId.length==0){
                alert("老板请选择账单");
                return;
            }
            this.$router.push({
                name: 'codePay',
                query:{
                    id:arrId,
                    price:allPrice
                }
            })

        }
    }
}

</script>