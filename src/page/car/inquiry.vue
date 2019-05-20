<style scoped>
    .box{width: 100%;position: fixed;height: 100%;top: 0px;background-color: #fff;}
    .p{font-size: 14px;color: #8c8c8c;letter-spacing: 1.12px;text-align: center;
        margin: 100px auto 30px;}
    button{display: block; width: 100%;height: 33px;background: #fff;
        border: 1px solid #4a77b0;text-align: center;line-height: 33px;
        outline: none ;color: rgb(11, 11, 11);}
    .disabled {
        background: #f4f4f4 !important;
        color: #8f8f8f !important;
    }
    input::-webkit-input-placeholder {
        color: #bcbcbc;
    }
    .underline{width: 60%;height: 1px;background: #4a77b0;position: absolute;
        top: 27px;left: 20%;}
    .lb{border-left:none;font-size: 20px;}
    .t1{font-size:20px;border-top-left-radius: 5px;
        border-bottom-left-radius: 5px; }
    /* .t7{border-top-right-radius: 5px;border-bottom-right-radius: 5px;} */
    .t8{border-radius: 5px;font-size: 20px;}
    .search{width: 80%;height: 40px;line-height: 40px;text-align: center;
        border-radius: 5px;background: #4a77b0;font-size: 18px;
        color: white;margin: 30px auto;}

    .key{position: fixed;width: 100%;background:rgba(171,179,189,0.30);
        bottom: 0;left: 0;padding-bottom: 5px;}
    .keyType{margin-top: 10px;display: flex;justify-content: space-between;
        padding: 0 8px;color: #333;}
    .keyType1{margin-top: 10px;display: flex;justify-content: space-between;
        padding: 0 8px;color: #333;}
    .keyType:first-child{margin-top: 10px;}
    .keyType:last-child{justify-content: space-between;}
    .keyType-item{width: 35px;height: 40px;background: #fff;font-size: 15px;
        text-align: center;border: 1px solid #ccc;border-radius: 5px;color: #333; }
    .jzhColor{background: #4a77b0; }
    .flex-left{background: #4a77b0;color:white}
    .kongbai{visibility: hidden;}
    .clear {width: 45px;height: 40px;display: flex;align-items: center;
        justify-content: center;background:#4a77b0;}
    .clear img{width: 70%; margin: auto}
    .finish{width: 55px;color: white;display: flex;align-items: center;
        justify-content: center;}
</style>

<template>
    <div class="box">
        <p class="p">普通车辆输入前7位， 新能源车辆请输入8位车牌</p>
        <Row>
            <Col span="2" offset="3">
                <button class="t1"  @click="tHU">{{t1}}</button>
                <div class="underline" v-show="t111"></div>
            </Col>
            <Col span="2">
                <button class="t2 lb" @click="tA">{{t2}}</button>
                <div class="underline" v-show="t222"></div>
            </Col>
            <Col span="2">
                <button class="t3 lb" @click="t(1)">{{t3}}</button>
                <div class="underline" v-show="t333"></div>
            </Col>
            <Col span="2">
                <button class="t4 lb" @click="t(2)">{{t4}}</button>
                <div class="underline" v-show="t444"></div>
            </Col>
            <Col span="2">
                <button class="t5 lb" @click="t(3)">{{t5}}</button>
                <div class="underline" v-show="t555"></div>
            </Col>
            <Col span="2">
                <button class="t6 lb" @click="t(4)">{{t6}}</button>
                <div class="underline" v-show="t666"></div>
            </Col>
            <Col span="2">
                <button class="lb" @click="t(5)">{{t7}}</button>
                <div class="underline" v-show="t777"></div>
            </Col>
            <Col span="3" offset="1">
                <button class="t8" @click="t(6)">{{t8}}</button>
                <div class="underline" v-show="t888"></div>
            </Col>
        </Row>
        <div class="search" @click="search">查询</div>
        <div class="key" :class="{animationDown:isDown,animationUp:isUp}">
            <div v-show= "keyType == 'txt'">
                <div class="keyType" v-for="(item,index) in carTxt" :key="index">
                    <button class="keyType-item" v-for="(i,n) in item.name" 
                        @click="txtClick(i,n)" :key="n">{{i}}</button>
                </div>
                <div class="keyType">
                    <button class="keyType-item flex-left" v-for="(item,index) in carTxtBottom" 
                        @click="txtClick(item,index)"
                        :key="index">{{item}}</button>
                    <button class="keyType-item kongbai" v-for="(j,index) in noneHU">{{j}}</button>
                    <div class="keyType-item clear" @click="clearClick">
                        <img src="../../assets/image/crm/clear.png" alt="删除">
                    </div>
                    <div class="keyType-item clear finish" @click="finish">
                        关闭
                    </div>
                </div>
            </div>
            <div v-show= "keyType == 'num'">
                <div class="keyType">
                    <button class="keyType-item" :disabled="t2==''?true:false" 
                        :class="{disabled:t2==''?true:false}" :key="index"
                        v-for="(i,index) in carNum" @click="numClick(i)">{{i}}
                    </button>
                </div>
                <div class="keyType1" v-for="(item,index) in carABC" :key="index">
                    <button class="keyType-item" v-for="(i,index) in item.name" 
                        @click="abcClick(i)" :key="index">{{i}}
                    </button>
                </div>
                <div class="keyType">
                    <button v-for="(item,index) in carABCBottom" class="keyType-item"  
                        @click="abcClick(item)" :key="index">{{item}}
                    </button>
                    <button :disabled="t2!==''?true:false" v-for="(item,index) in noneIO" 
                        class="keyType-item"  :class="{disabled:t2!==''?true:false}"
                        @click="abcClick(item)">{{item}}
                    </button>
                    <button class="keyType-item kongbai">{{noneABC}}</button>
                    <div class="keyType-item clear" @click="clearClick">
                        <img src="../../assets/image/crm/clear.png" alt="删除">
                    </div>
                    <div class="keyType-item clear finish" @click="finish">
                        关闭
                    </div>
                </div>
            </div>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            t1: '',
            t2: '',
            t3: '',
            t4: '',
            t5: '',
            t6: '',
            t7: '',
            t8: '',
            flag1: false,
            flag2: false,
            flag3: false,
            flag4: false,
            flag5: false,
            flag6: false,
            flag7: false,
            flag8: false,
            t111:true,
            t222:false,
            t333:false,
            t444:false,
            t555:false,
            t666:false,
            t777:false,
            t888:false,
            isOne: false,
            showKey: true,
            isDown: false,
            isUp: false,
            keyType:'',
            jzhColor:false,
            isSelectl: false,
            isDisable: false,
            carTxt: [
                { name: ['京', '苏', '浙', '青', '津', '晋', '蒙', '辽', '吉', '黑'] },
                { name: ['宁', '甘', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '桂'] },
                { name: ['琼', '粤', '川', '贵', '云', '藏', '陕', '渝', '新', '冀',] }
            ],
            carTxtBottom:['沪', '澳', '港', '台'],
            noneHU:['呵','呵','呵'],
            carNum:['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            carABC: [
                { name: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'P', 'N', 'M'] },
                { name: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'B'] },
            ],
            carABCBottom: ['Z', 'X', 'C', 'V', ],
            noneIO:['I', 'O'],
            noneABC:'',
        };
    },

    components: {},

    computed: {},
    created() {
        
    },
    mounted(){},

    methods: {
        tHU(){
            this.keyType = 'txt';
            if(this.t1!==''){
                // alert(1)
            }
        },
        tA(){
            if(this.t1 == ''){
                this.keyType = 'txt';
                // return;
            }
            // else{
            //     this.t222 = true;
            //     this.t2 = '';
            // }
            // this.keyType = 'num';

        },
        t(num){
            if(this.t1==''){
                this.keyType = 'txt';
            }else {
                this.keyType = 'num';
            }
            
        },
        txtClick(i,n){
            // var flag = false;
            console.log(i);
            console.log(n);
            if(this.t1 == ''){
                this.t1 = i;
                this.t111 = false;
                this.t222 = true;                
            } else{
                this.t1 = i;
                this.t111 = false;
            }
            this.keyType = 'num';
        },
        numClick(n){
            console.log(n);
            if(this.t3==''){
                this.t3 = n;
                this.t333 = false;
                this.t444 = true;
                return;
            }else if(this.t4 == ''){
                this.t4 = n;
                this.t444 = false;
                this.t555 = true;
                return;
            }else if(this.t5 == ''){
                this.t5 = n;
                this.t555 = false,
                this.t666 = true;
                return;
            }else if(this.t6 == ''){
                this.t6 = n;
                this.t666 = false,
                this.t777 = true;
                return;
            }else if(this.t7 == ''){
                this.t7 = n;
                this.t777 = false;
                this.t888 = true;
                return;
            }else if(this.t8 == ''){
                this.t8 = n;
                this.t888 = false;
                return;
            }
        },
        abcClick(n){
            console.log(n);
            if(this.t2 == ''){
                this.t2 = n;
                this.t222 = false;
                this.t333 = true;
                return
            } else if(this.t3 == ''){
                this.t3 = n;
                this.t333 = false;
                this.t444 = true;
                return;
            }else if(this.t4 == ''){
                this.t4 = n;
                this.t444 = false;
                this.t555 = true;
                return;
            }else if(this.t5 == ''){
                this.t5 = n;
                this.t555 = false,
                this.t666 = true;
                return;
            }else if(this.t6 == ''){
                this.t6 = n;
                this.t666 = false,
                this.t777 = true;
                return;
            }else if(this.t7 == ''){
                this.t7 = n;
                this.t777 = false;
                this.t888 = true;
                return;
            }else if(this.t8 == ''){
                this.t8 = n;
                this.t888 = false;
                return;
            }
            
        },
        clearClick(){
            // if(this.t222 = true){
            //     this.t1 = '';
            //     this.t222 = false;
            // }
            this.t1 = '';
            this.t2 = '';
            this.t3 = '';
            this.t4 = '';
            this.t5 = '';
            this.t6 = '';
            this.t7 = '';
            this.t8 = '';
            this.t111 = true;
            this.t222 = false;
            this.t333 = false;
            this.t444 = false;
            this.t555 = false;
            this.t666 = false;
            this.t777 = false;
            this.t888 = false;
            this.keyType = 'txt';
        },
        finish(){
            this.keyType = '';
        },
        search(){
            if(this.t1==''||this.t2==''||this.t3==''||this.t4==''||this.t5==''||this.t6==''
                ||this.t7==''){
                alert('请输入完整的车牌号');
                return;
            }
            let chepai = this.t1+this.t2+this.t3+this.t4+this.t5+this.t6+this.t7+(this.t8!==''?this.t8:'hh');
            console.log(chepai)
            this.$router.push({
                name:'carNumber',
                query:{
                    chepai:chepai
                }
            })
        }
    }
}

</script>