<style scoped>
    .box{width: 100%;position: fixed;height: 100%;top: 0px;background-color: #efefef;}
    .header{width: 100%;height: 150px;background:#4a77b0;padding-top: 20px;}
    .header-div{height: 80px;}
    .header-top{height: 60px;position: relative;}
    .header-bg{width: 40px;height: 40px;background: white;border-radius: 50%;
        position: absolute;top: 10px;left: 50%;margin-left: -20px;overflow: hidden;}
    .icon1{width: 70%;height: 70%;margin: 15%;}
    .icon2{width: 45%;height: 65%;margin: 17.5% 27.5%;}
    .icon3{width: 50%;height: 50%;margin: 25%}
    .header-bottom{height: 20px;line-height: 20px;color: white;font-size: 14px;
        text-align: center;letter-spacing: 2px;}
    
</style>
<template>
    <div class="box">
        <!-- <loading v-show="showLoading"></loading> -->
        <div class="header">
            <Row>
                <Col span="6">
                    <router-link to="/register">
                        <div class="header-div">
                            <div class="header-top">
                                <div class="header-bg">
                                    <img class="icon1" src="../assets/image/visitors/visitors.png" alt="">
                                </div>
                            </div>
                            <div class="header-bottom">
                                <p>访客登记</p>
                            </div>
                        </div>
                    </router-link>
                </Col>
                <Col span="6">
                    <router-link to="/code">
                        <div class="header-div">
                            <div class="header-top">
                                <div class="header-bg">
                                    <img class="icon1" src="../assets/image/visitors/open.png" alt="">
                                </div>
                            </div>
                            <div class="header-bottom">
                                <p>智能开门</p>
                            </div>
                        </div>
                    </router-link>
                </Col>
                <!-- <Col span="6">
                    <div class="header-div">
                        <div class="header-top">
                            <div class="header-bg">
                                <img class="icon3" src="../assets/image/visitors/add.png" alt="">
                            </div>
                        </div>
                        <div class="header-bottom">
                            <p>新增</p>
                        </div>
                    </div>
                </Col> -->
            </Row>
        </div>
    </div>
</template>
<script>

import loading from '../components/loading.vue'
// import mui from '../assets/mui/js/mui.min.js'
export default {
    components:{
        loading
    },
    
    data () {
        return {
            showLoading: true,
        };
    },

    computed: {
        
    },

    mounted(){
        // mui.toast("123",{duration:'short', type:'div' })
        this.qa()
    },

    methods: {
        qa(){
            // this.showLoading = false;
        }
    }
}

</script>