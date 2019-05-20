<style scoped>
    /* html{font-size: 100px;} */
    .box{width: 100%;position: fixed;height: 100%;top: 0px;background-color: #fff;}
    .rem{width: 140px;height: 100px;background: cyan;}
    .rem1{width: 610px;height: 100px;background: green;}
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
        <div v-for="(item,index) in data" :key="index">
            <div @click="go(item)">
                <Row class="row-style">
                    <Col span="1" offset="1">
                        <div class="left" :class="{yel:index==2}">
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
            data:[
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    id: 1,
                    name: '水岸豪庭',
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    id: 2,
                    name: '正文花园'
                },
                {
                    icon: require('../../assets/image/crm/icon_2.png'),
                    id: 3,
                    name: '半岛花园'
                },
                {
                    icon: require('../../assets/image/crm/icon_1.png'),
                    id: 4,
                    name: '美丽星城'
                }
            ]
        };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
        go(item){
            this.$router.push({
                name: 'build',
                query: {
                    name: item.name
                }
            })
            
        }
    }
}

</script>