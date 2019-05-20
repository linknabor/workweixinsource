<style scoped>
    .box{width: 100%;position: fixed;height: 100%;top: 0px;background-color: #008afa;}
    .header{width: 100%;}
    .header img{width: 100%;}
    .main{width: 100%;height: 272px;margin: 50px auto;}
    .cont{width: 272px;height: 100%;margin: 0 auto;border: 3px solid white;
        border-radius: 7px;}
    .cont img{height: 236px;width: 236px;margin: 15px;}
    .time{font-size: 13px;color: #fff;letter-spacing: 0.24px;text-align: center;
        height: 18px;line-height: 18px;}
    .xian{width: 90%;height: 2px;background: white;margin: 20px auto;}
    .bottom{position: fixed;width: 100%;bottom: 0;height: 106px;}
    .bottom img{width: 100%;height: 100%;margin: auto;}
</style>
<template>
    <div class="box">
        <div class="header">
            <img src="../../assets/image/opens/header.png" alt="">
        </div>
        <div class="main">
            <div class="cont">
                <img src="../../assets/image/opens/code.png" alt="">
            </div>
        </div>
        <div class="time">
            <p>有效时间：2018.03.28 17：00-2018.03.28.24：00</p>
        </div>
        <div class="xian"></div>
        <div class="bottom">
            <img src="../../assets/image/opens/bottom.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
}

</script>