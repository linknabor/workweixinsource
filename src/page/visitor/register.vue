<style scoped>
    .box{width: 100%;position: fixed;height: 100%;top: 0px;background-color: #f2f2f2;}
    .bg{position: fixed;width: 100%;height: 200px;top: 0;background: #008afa;z-index: 1;}
    .bg img{width: 100%;height: 160px;margin-top: 40px;}
    .from{position: fixed; z-index: 100; width: 90%;height: 500px;background:rgba(255,255,255,0.96);
        border-radius: 5px;left: 5%;top: 60px}
    .row-style{height: 32px;line-height: 32px;font-size: 18px;color: #393939;
        margin-bottom: 21px;letter-spacing: 2px}
    .col-style{text-align: right;letter-spacing: 5px;}
    .f15{font-size: 15px;}
    .bor{border: 0px solid #4a77b0;border-radius: 5px;}
    .submit{width: 90%;height: 37px;background:#4a77b0;line-height: 37px;text-align: center;
        margin: 0 auto;border-radius: 100px;font-size: 18px;letter-spacing: 0.33px;
        margin-top: 61px;color: white;}
    .justify { text-align: justify; width:100%; font-size:16px; height:32px;}
    .justify > span { display: inline-block /* Opera */; padding-left: 100%; }
</style>
<template>
    <div class="box">
        <div class="bg">
            <img src="../../assets/image/visitors/register.png" alt="">
        </div>
        <div class="from" style="padding-top:34px;">
            <Row class="row-style">
                <Col span="8" class="col-style" offset="1">
                    <div class="justify">类型<span></span></div>
                </Col>
                <Col span="1">
                    :
                </Col>
                <Col span="12" offset="1">
                    <Select v-model="model1" class="bor">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value" style="font-size:15px;">{{ item.label }}</Option>
                    </Select>
                </Col>
            </Row>
            <Row class="row-style">
                <Col span="8" class="col-style" offset="1">
                    <div class="justify">楼宇/号楼<span></span></div>
                </Col>
                <Col span="1">
                    :
                </Col>
                <Col span="12" offset="1">
                    <Input v-model="louyu" class="bor"/>
                </Col>
            </Row>
            <Row class="row-style">
                <Col span="8" class="col-style" offset="1">
                    <div class="justify">单元/号<span></span></div>
                </Col>
                <Col span="1">
                    :
                </Col>
                <Col span="12" offset="1">
                    <Input v-model="danyuan" class="bor"/>
                </Col>
            </Row>
            <Row class="row-style">
                <Col span="8" class="col-style" offset="1">
                    <div class="justify">室号<span></span></div>
                </Col>
                <Col span="1">
                    :
                </Col>
                <Col span="12" offset="1">
                    <Input v-model="shihao" class="bor"/>
                </Col>
            </Row>
            <div class="submit" @click="submit">
                登记
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data () {
        return {
            cityList: [
                    {
                        value: '外卖',
                        label: '外卖'
                    },
                    {
                        value: '快递',
                        label: '快递'
                    },
                    {
                        value: '访客',
                        label: '访客'
                    }
                ],
                model1: '外卖',
                louyu: '',
                danyuan: '',
                shihao: ''
        };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
        submit(){
            if(this.model1 == ""){
                Toast({
                    message: '请选择类型',
                    position: 'middle',
                    duration: 2000
                });
                return;
            };
            if(this.louyu == ''){
                Toast({
                    message: '请填写楼宇',
                    position: 'middle',
                    duration: 2000
                })
                return;
            };
            if(this.louyu == ''){
                Toast({
                    message: '请填写单元',
                    position: 'middle',
                    duration: 2000
                })
                return;
            };
            if(this.louyu == ''){
                Toast({
                    message: '请填写室号',
                    position: 'middle',
                    duration: 2000
                })
                return;
            };
            this.$router.push({
                name: 'record'
            })
        }
        
    }
}

</script>