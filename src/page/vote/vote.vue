<style scoped>
    .box-bg {width: 100%;opacity: .6;height: 100%;position: fixed;
	    background-color: #555;top: 0;left: 0;z-index: 100;}
    .box{width: 96%;padding: 10px 20px;}
    .title{font-size: 20px;font-weight: 700;color: black;}
    .edit{height:30px;line-height: 30px;font-size: 14px;margin-top: 5px;}
    .chooseName{font-size: 18px;font-weight: 600;}
</style>

<template>
    <div>
        <div class="box-bg" v-show="isbg"></div>
        <div class="box">
            <p class="title">{{data.title}}</p>
            <Row class="edit">
                <Col span="18">
                    <span>{{data.time}}</span>
                </Col>
                <Col span="6">
                    <span>{{data.edit}}</span>
                </Col>
            </Row>
            <div style="border-bottom:1px solid #ccc;"></div>
            <div style="height:200px;width:100%;background:#efefef;">

            </div>
            <div style="border-bottom:1px solid #ccc;margin-top:5px;"></div>
            <p class="chooseName">{{data.chooseName}}</p>
            <div v-if="isvote">
                <RadioGroup v-for="item in radio" :key="item.name" v-model="choose" vertical @on-change="changeChoose(item)" style="width:100%;">
                    <Radio  :label="item.name"  >
                        <Icon type="social-apple"></Icon>
                        <span>{{item.name}}</span>
                    </Radio>
                </RadioGroup>
            </div>
            <div v-else>
                <Progress :percent="bb">
                </Progress>
            </div>
            
        </div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
        isbg:false,//是否显示遮罩层
        choose: '',
        bb:35,
        isvote:true,
        data:{
            title:'物业服务建议反馈',
            time:'2018-10-10',
            edit:'合协社区',
            chooseName:'你希望物业对于哪方面服务尽心改进呢？(单选)'
        },
        radio:[
            {
                name:'上单',
                id:1,
            },
            {
                name:'打野',
                id:2,
            },
            {
                name:'中单',
                id:3
            },
            {
                name:'射手',
                id:4
            },
            {
                name:'辅助',
                id:5
            }
        ]
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
      changeChoose(qa){
          console.log(qa)
          this.isbg = true;
          MessageBox.alert('投票提交成功','www.e-shequ.com').then(action => {
            this.isbg = false;
            this.isvote = false;
          });
      }
  }
}

</script>