<style scoped>
    .box{width: 100%;position: fixed;height: 100%;top: 0px;background-color: #f2f2f2;}
    .bg{position: fixed;width: 100%;height: 200px;top: 0;background: #008afa;z-index: 1;}
    .bg img{width: 100%;height: 160px;margin-top: 40px;}
    .from{width: 90%;height: 500px;background:rgba(255,255,255,0.96);border-radius: 5px;
        position: fixed; z-index: 100;left: 5%;top: 60px}
    .row-style{height: 32px;line-height: 32px;font-size: 18px;color: #393939;
        margin-bottom: 21px;letter-spacing: 2px}
    /* .col-style{text-align: right;letter-spacing: 5px;} */
    .submit{width: 90%;height: 37px;background:#c3c3c3;line-height: 37px;text-align: center;
        margin: 0 auto;border-radius: 100px;font-size: 18px;letter-spacing: 0.33px;
        margin-top: 61px;color: white;}
    .justify { text-align: justify; width:100%; font-size:18px; height:32px;}
    .justify > span { display: inline-block /* Opera */; padding-left: 100%; }
</style>
<template>
    <div class="box">
        <div class="bg">
            <img src="../../assets/image/visitors/auditing.png" alt="">
        </div>
        <div class="from" style="padding-top:34px;">
            <Row class="row-style">
                <Col span="7" class="col-style" offset="1">
                    <div class="justify">类型<span></span></div>
                </Col>
                <Col span="1">
                    :
                </Col>
                <Col span="14" offset="1">
                    <span>{{data.type}}</span>
                </Col>
            </Row>
            <Row class="row-style">
                <Col span="7" class="col-style" offset="1">
                    <div class="justify">姓名<span></span></div>
                </Col>
                <Col span="1">
                    :
                </Col>
                <Col span="14" offset="1">
                    <span>{{data.name}}</span>
                </Col>
            </Row>
            <Row class="row-style">
                <Col span="7" class="col-style" offset="1">
                    <div class="justify">手机号<span></span></div>
                </Col>
                <Col span="1">
                    :
                </Col>
                <Col span="14" offset="1">
                    <span>{{data.tel}}</span>
                </Col>
            </Row>
            <Row class="row-style">
                <Col span="7" class="col-style" offset="1">
                    <div class="justify">业主地址<span></span></div>
                </Col>
                <Col span="1">
                    :
                </Col>
                <Col span="14" offset="1">
                    <span>{{data.address}}</span>
                </Col>
            </Row>
            <Row class="row-style">
                <Col span="7" class="col-style" offset="1">
                    <div class="justify">业主姓名<span></span></div>
                </Col>
                <Col span="1">
                    :
                </Col>
                <Col span="14" offset="1">
                    <span>{{data.personName}}</span>
                </Col>
            </Row>
            <Row class="row-style">
                <Col span="7" class="col-style" offset="1">
                    <div class="justify">业主手机<span></span></div>
                </Col>
                <Col span="1">
                    :
                </Col>
                <Col span="14" offset="1">
                    <span>{{data.personTel}}</span>
                </Col>
            </Row>
            <div class="submit">
                已审核
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            data:{
                type: '访客',
                name: '韩小雪',
                tel: '18866668888',
                address: '上海市静安区中山北路1015号',
                personName: '陈顺德',
                personTel: 18812344321
            }
        };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
}

</script>