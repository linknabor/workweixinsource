<style scoped>
    html{font-size: 100px;}
    .box{width: 100%;position: fixed;height: 100%;top: 0px;background-color: #4a77b0;}
    .main{width: 90%;height: 450px;background: #fff;margin: 20px auto;}
    .top{width: 100%;height: 50px;background: #f2f2f2;color: #4a77b0;
        line-height: 50px;text-align: center;font-size: 20px;}
    .money{height: 40px;line-height: 40px;text-align: center;margin: 40px auto;
        font-size: 30px;color: #2e2e2e;}
    .code{width: 240px;height: 240px;background: #fff;margin: 0 auto;border: 1px solid #4a77b0;
        border-radius: 3px;}
    .code img{width: 100%;height: 100%;margin: auto;}
</style>
<template>
    <div class="box">
        <div class="main">
            <div class="top">二维码收款</div>
            <div class="money">￥{{price}}元</div>
            <div class="code">
                <img src="../../assets/image/crm/code.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            price: this.$route.query.price
        };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
}

</script>