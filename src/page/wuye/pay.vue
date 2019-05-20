<style scoped>
    html{font-size: 62.5%;}
    .fl{float: left;}
    .clear{clear: both;}
    .common{width: 90%;margin: 0 auto;border-bottom: 1px solid #39649a;}
    .box{width: 100%;position: fixed;height: 100%;top: 0px;background-color: #fff;}
    .main{width: 90%;border:1px solid #ccc;margin: 20px auto;min-height: 500px; }
    .top{width: 90%;height: 40px;margin: 16px auto 0;
        border-bottom: 1px solid #39649a;margin-bottom: 10px;}
    .title{width: 122px;height: 40px;background: #4a77b0;line-height: 40px;
        font-size: 18px;text-align: center;color: #fff;}
    
    .check{overflow: hidden;}
    .audio{width: 33.3%;font-size: 16px;}
    .item{padding: 10px 0;}
    .item_noCheck{width: 20px;height: 20px;margin: 3px auto;background: #fff;
        border-radius: 50%;border: 1px solid #4a77b0;}
    .item_check{width: 20px;height: 20px;margin: 3px auto;background: #fff;
        border-radius: 50%;border: 1px solid #4a77b0;
        background:url('../../assets/image/crm/checked.png') no-repeat 100% 100%;}
    .justify { text-align: justify; width:100%;font-size: 18px;height: 40px;
        line-height: 40px;}
    .justify > span { display: inline-block /* Opera */; padding-left: 100%; }
    .input{border: none;font-size: 16px;text-align: right;width: 100%;
        display: block;outline:none;height: 40px;}
    .model{width: 100%;height: 40px;line-height: 40px;font-size: 16px;
        text-align: right}
    .bottom{width: 90%;margin: 0 auto; height: 36px;border-radius: 3px;
        font-size: 18px;color: white;line-height: 36px;margin-top: 100px;}
    .btn{background: #4a77b0;width: 100%;text-align: center}


    .bg{position: absolute;z-index: 2; bottom: 0;right: 0; top: 0;left: 0;background: rgba(0, 0, 0, 0.5)}
    .inner{width: 60%;margin: 200px auto;padding: 10px 15px;border-radius: 5px;background: white;
        font-size: 16px;}
</style>
<template>
    <div class="box">
        <div class="main">
            <div class="top">
                <div class="title">缴费类型</div>
            </div>
            <div class="check common">
                <div v-for="(item,index) in checked" :key="index" class="fl audio">
                    <div  @click="toCheck(item)" class="item">
                        <div class="item_noCheck fl" :class="{item_check:item.ischecked}"></div>
                        <p class="fl" style="margin-left:2px">{{item.title}}</p>
                        <div class="clear"></div>
                    </div>
                    
                </div>
            </div>
            <!-- 选择小区 -->
            <div class="common">
                <Row>
                    <Col span="6">
                        <div class="justify">小区<span></span></div>
                    </Col>
                    <Col span="12" offset="6">
                        <div class="model" @click="chooseHouse">{{house}} ></div>
                        <!-- <input type="text" class="input" placeholder="请选择小区" v-model="house"> -->
                    </Col>
                </Row>
            </div>
            <div v-show="isHouse">
                <div class="bg" @click="bg1">
                    <div class="inner">
                        <div class="Items" v-for="(item,index) in houseList" :key="index">
                            <div  @click="toChooseHouse(item)" class="item">
                                <div class="item_noCheck fl" :class="{item_check:item.choose}"></div>
                                <p class="fl" style="margin-left:20px">{{item.title}}</p>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 选择单元 -->
            <div class="common">
                <Row>
                    <Col span="6">
                        <div class="justify">单元/号<span></span></div>
                    </Col>
                    <Col span="12" offset="6">
                        <div class="model" @click="chooseUnit">{{unit}} ></div>
                        <!-- <input type="text" class="input" placeholder="请选择单元/号" v-model="unit"> -->
                    </Col>
                </Row>
            </div>
            <div v-show="isUnit">
                <div class="bg" @click="bg2">
                    <div class="inner">
                        <div class="Items" v-for="(item,index) in unitList" :key="index">
                            <div  @click="toChooseUnit(item)" class="item">
                                <div class="item_noCheck fl" :class="{item_check:item.choose}"></div>
                                <p class="fl" style="margin-left:20px">{{item.title}}</p>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="common">
                <Row>
                    <Col span="6">
                        <div class="justify">室号<span></span></div>
                    </Col>
                    <Col span="12" offset="6">
                        <div class="model" @click="chooseRoom">{{room}} ></div>
                        <!-- <input type="text" class="input" placeholder="请选择室号" v-model="room"> -->
                    </Col>
                </Row>
            </div>
            <div v-show="isRoom">
                <div class="bg" @click="bg3">
                    <div class="inner">
                        <div class="Items" v-for="(item,index) in roomList" :key="index">
                            <div  @click="toChooseRoom(item)" class="item">
                                <div class="item_noCheck fl" :class="{item_check:item.choose}"></div>
                                <p class="fl" style="margin-left:20px">{{item.title}}</p>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Row class="bottom">
                <Col span="8" offset="3">
                    <div class="btn" @click="reset">重置</div>
                </Col>
                <Col span="8" offset="2">
                    <div class="btn" @click="requiry">账单查询</div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            checked:[
                {
                    title: '缴物业费',
                    ischecked: false
                },
                {
                    title: '缴停车费',
                    ischecked: false
                },
                {
                    title: '缴燃气费',
                    ischecked: false
                },
                {
                    title: '缴电费',
                    ischecked: false
                },
                {
                    title: '缴水费',
                    ischecked: false
                }
            ],
            house: '请选择小区',
            unit: '请选择单元/号',
            room: '请选择室号',
            isHouse: false,
            isUnit: false,
            isRoom: false,
            houseList:[
                {
                    choose:false,
                    title:'正文花园',
                },
                {
                    choose: false,
                    title: '美丽星城'
                }
            ],
            unitList:[
                {
                    choose:false,
                    title:'1号楼',
                    
                },
                {
                    choose:false,
                    title:'2号楼'
                }
            ],
            roomList:[
                {
                    choose:false,
                    title:"1室"
                },
                {
                    choose:false,
                    title:"2室"
                },
                {
                    choose:false,
                    title:"3室"
                }
            ]
        };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
        toCheck(ele){
            ele.ischecked = !ele.ischecked;
            console.log(ele);
        },
        reset(){
            let arr = this.checked;
            arr.forEach(element => {
                element.ischecked = false;
            });
            this.house = '';
            this.unit = '';
            this.room = '';
        },
        requiry(){
            let len = 0;
            this.checked.forEach(element => {
                if (element.ischecked == true) {
                    len+=1;
                }
            });
            if(len==0 || this.house=='' || this.unit=='' || this.room==''){
                alert("请填写完整相关信息");
                return
            }
            this.$router.push({
                name:'bill'
            })
        },
        bg1(){
            this.isHouse = false;
        },
        chooseHouse(){
            this.isHouse = true;
        },
        toChooseHouse(ele){
            this.houseList.forEach(item=>{
                item.choose = false;
            })
            ele.choose = true;
            this.house = ele.title;
            this.isHouse = false;
        },
        bg2(){
            this.isUnit = false;
        },
        chooseUnit(){
            if(this.house == "请选择小区"){
                alert("请先选择小区");
                return
            };
            this.isUnit = true;
        },
        toChooseUnit(ele){
            this.unitList.forEach(item=>{
                item.choose = false;
            })
            ele.choose = true;
            this.unit = ele.title;
            this.isUnit = false;
        },
        bg3(){
            this.isRoom = false
        },
        chooseRoom(){
            if(this.house == "请选择小区"){
                alert("请先选择小区");
                return
            };
            if(this.unit == '请选择单元/号'){
                alert('请先选择单元楼');
                return
            };
            this.isRoom = true;
        },
        toChooseRoom(ele){
            this.roomList.forEach(item=>{
                item.choose = false;
            })
            ele.choose = true;
            this.room = ele.title;
            this.isRoom = false;
        }
    }
}

</script>