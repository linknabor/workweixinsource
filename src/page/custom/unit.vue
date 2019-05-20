<style scoped>
    /* html{font-size: 100px;} */
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
        position: relative;top: 22px;left:8px;}
    .left1 img{position: absolute; width: 50%;height: 50%;top: 25%;left: 25%;}
    .right1{font-size: 18px;height: 60px;line-height: 60px;padding-left: 12px;}
</style>
<template>
    <div class="box">
        <Row class="row-style">
            <Col span="1" offset="1">
                <div class="left">
                    <img :src="indexData.icon" alt="">
                </div>
            </Col>
            <Col span="5">
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
            <Col span="6">
                <p class="right1">{{indexData.build.name}}</p>
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
                }
            },
            data:[
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '1号'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '2号'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '3号'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '4号'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '5号'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '6号'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    name: '7号'
                }
            ]
        };
    },
    created(){
        document.title = this.$route.query.xiaoqu + this.$route.query.build;
    },
    components: {},

    computed: {},

    mounted(){},

    methods: {
        go:function(index){
            this.$router.push({
                name: 'room',
                query:{
                    xiaoqu: this.$route.query.xiaoqu,
                    build: this.$route.query.build,
                    unit:  index.name
                }
            })
        }
    }
}

</script>