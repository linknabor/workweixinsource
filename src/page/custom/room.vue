<style scoped>
    .box{width: 100%;position: fixed;height: 100%;top: 0px;background-color: #fff;}
    .row-style{width: 100%;height: 60px;background: #fff;line-height: 60px;
        border-bottom: 0.5px solid #979797;}
    .left{width: 16px;height: 16px;background: #2789f9;border-radius: 50%;
        position: relative;top: 22px;}
    .yel{background:#facc39; }
    .left img{position: absolute; width: 50%;height: 50%;top: 25%;left: 25%;}
    .right_jt{height: 20px;width: 20px;position: relative;top: 20px;}
    .right_jt img{position: absolute;width: 100%;height: 100%;top: 0;}
    .right{font-size: 18px;height: 60px;line-height: 60px;padding-left: 4px;}
    

    .left1{width: 16px;height: 16px;background: #2789f9;border-radius: 50%;
        position: relative;top: 22px;left:10px;}
    .left1 img{position: absolute; width: 50%;height: 50%;top: 25%;left: 25%;}
    .right1{font-size: 18px;height: 60px;line-height: 60px;padding-left: 12px;}

    .left2{width: 16px;height: 16px;background: #2789f9;border-radius: 50%;
        position: relative;top: 22px;left:10px;}
    .left2 img{position: absolute; width: 50%;height: 50%;top: 25%;left: 25%;}
    .right2{font-size: 18px;height: 60px;line-height: 60px;padding-left: 12px;}
</style>
<template>
    <div class="box">
        <Row class="row-style">
            <Col span="1" offset="1">
                <div class="left">
                    <img :src="indexData.icon" alt="">
                </div>
            </Col>
            <Col span="6">
                <p class="right">{{indexData.name}}</p>
            </Col>
            <Col span="1">
                <div class="right_jt">
                    <img src="../../assets/image/crm/right.png" alt="">
                </div>
            </Col>
            <Col span="1">
                <div class="left1">
                    <img :src="indexData.build.icon" alt="">
                </div>
            </Col>
            <Col span="4">
                <p class="right1">{{indexData.build.name}}</p>
            </Col>
            <Col span="1">
                <div class="right_jt">
                    <img src="../../assets/image/crm/right.png" alt="">
                </div>
            </Col>
            <Col span="1">
                <div class="left2">
                    <img :src="indexData.build.icon" alt="">
                </div>
            </Col>
            <Col span="4">
                <p class="right2">{{indexData.unit.name}}</p>
            </Col>
        </Row>
        <div v-for="(item,index) in data" :key="index">
            <div @click="go(item)">
                <Row class="row-style">
                    <Col span="1" offset="1">
                        <div class="left">
                            <img :src="item.icon" alt="">
                        </div>
                    </Col>
                    <Col span="18" offset="1">
                        <p class="right">{{item.name}}</p>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            indexData:{
                icon: require('../../assets/image/crm/icon_1.png'),
                name: this.$route.query.xiaoqu,
                build:{
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: this.$route.query.build
                },
                unit:{
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: this.$route.query.unit
                }
            },
            data:[
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '101室'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '202室'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '303室'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '404室'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '505室'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '606室'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '707室'
                }
            ]
        };
    },
    created(){
        document.title= this.$route.query.xiaoqu + this.$route.query.build + this.$route.query.unit
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
        go(index){
            this.$router.push({
                name: 'detail',
                query:{
                    unit: this.$route.query.unit,
                    room: index.name
                }
            })
        }
    }
}

</script>