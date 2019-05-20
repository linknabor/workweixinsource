<style scoped>
    .box{width: 100%;}
    .search{position: relative;width: 86%;z-index: 1001;margin-top: 10px;left: 7%;border: 1px solid #39649a;
        height: 32px;background:#f2f2f2;border-radius: 5px;line-height: 32px}
    .icon-div{width: 8%;height: 32px;position: absolute;left: 2%;}
    .icon-search{width: 80%;height: 60%;margin: auto; margin-top: 6px;}
    .search-input{display: inline-block;height: 30px;width:89%;position: absolute;left:11%; 
        border: none;text-align: center;letter-spacing: 2px;background:#f2f2f2;
        font-size: 16px;margin-left: -10px;outline:none;color: #39649a;font-size: 16px;}
    input::-webkit-input-placeholder{color:#dcdcdc;}  
    .ul{padding: 8px 14px 0px;width: 100%;} 
    .li{height: 76px;width: 100%;background: #f2f2f2;border: 1px solid#39649a;
        border-radius: 3px;font-size: 13px;color: #323232;} 
    .li-left{line-height: 76px;text-align: center;font-size: 20px;letter-spacing: 0.37px;}
    .top{height: 37px;line-height: 37px;border-bottom: 1px solid #3267b5;}
    .top-right{text-align: right;}
    .bottom{height: 38px;line-height: 38px;}
</style>
<template>
    <div class="box">
        <div class="search">
            <div class="icon-div">
                <img class="icon-search" src="../../assets/image/visitors/search.png"></img>
            </div>		
            <input type="text" class="search-input"  v-model="sousuo" @change="search()" placeholder="名字、地址">
        </div>
        <div class="ul" v-for="(item,index) in data" :key="index">
            <div class="li" @click="toRouter">
                <Row>
                    <Col span="2" class="li-left">
                        <span>{{index}}</span>
                    </Col>
                    <Col span="21" class="li-right">
                        <Row class="top">
                            <Col span="10" class="top-left">
                                <span>{{item.name}}</span>
                            </Col>
                            <Col span="14" class="top-right">
                                <span>手机:{{item.tel}}</span>
                            </Col>
                        </Row>
                        <p class="bottom">拜访地址: {{item.address}}</p>
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
            sousuo: '',
            data:[
                {
                    name: '石敢当（外卖）',
                    tel: 18866668888,
                    address: '明中苑3号楼4号501'
                },
                {
                    name: '石敢当（快递）',
                    tel: 18866668888,
                    address: '明中苑3号楼4号501'
                },
                {
                    name: '石敢当（访客）',
                    tel: 18866668888,
                    address: '明中苑3号楼4号501'
                }
            ]
        };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
        search(){
            alert("奈博科技")
        },
        toRouter(){
            this.$router.push({
                path: '/auditing'
            })
        }
    }
}

</script>