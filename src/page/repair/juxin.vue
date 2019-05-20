<style scoped>
    .box{width: 98%;margin: auto;}
    .list{height:100px;}
    .tl{text-align: left}
    .tc{text-align: center}
    .tr{text-align: right}
</style>
<template>
    <div class="box">
        <Row class="list" style="margin-top:10px;">
            <Col span="5">
                <div style="width:96%;height:96%;margin:3px auto 3px">
                    <img src="../../assets/repair.png" alt="" style="width:100%;margin:auto;">
                </div>
            </Col>
            <Col span="19">
                <p class="tl">123</p>
                <p class="tr">234</p>
                <p class="tl">345</p>
            </Col>
        </Row>
        <router-link to="/register">
            <h2>巨星是个二货</h2>
        </router-link>
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

    mounted(){
        this.df()
    },

    methods: {
        df(){
            this.axios({
                url: 'https://test.e-shequ.com/msa/crm/repairOder/getRepairOrderList',
                method: 'get'
            }).then(res=>{
                console.log(res.data)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}

</script>