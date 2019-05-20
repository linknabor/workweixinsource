<style scoped>
    /* html{font-size: 100px;} */
    .box{width: 100%;position: fixed;height: 100%;top: 0px;background-color: #fff;}
    .row-style{width: 100%;height: 60px;background: #fff;line-height: 60px;
        border-bottom: 0.5px solid #979797;}
    .left{width: 16px;height: 16px;background: #2789f9;border-radius: 50%;
        position: relative;top: 22px;}
    .yel{background:#facc39; }
    .left img{position: absolute; width: 50%;height: 50%;top: 25%;left: 25%;}
    .right{font-size: 18px;}
</style>
<template>
    <div class="box">
        <Row class="row-style">
            <Col span="1" offset="1">
                <div class="left">
                    <img :src="indexData.icon" alt="">
                </div>
            </Col>
            <Col span="18" offset="1">
                <p class="right">{{indexData.name}}</p>
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
                name: this.$route.query.name
            },
            data:[
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    id: 1,
                    name: '1号楼'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    id: 2,
                    name: '2号楼'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    id: 3,
                    name: '3号楼'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    id: 4,
                    name: '4号楼'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    id: 5,
                    name: '5号楼'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    id: 6,
                    name: '6号楼'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    id: 7,
                    name: '7号楼'
                }
            ]
        };
    },
    created(){
        document.title = this.$route.query.name;
    },
    components: {},

    computed: {},

    mounted(){},

    methods: {
        go:function(index){
            this.$router.push({
                name: 'unit',
                query:{
                    xiaoqu: this.$route.query.name,
                    build: index.name
                    
                }
            })
        }
    }
}

</script>