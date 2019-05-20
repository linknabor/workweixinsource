<style scoped>
    .box{width: 98%;margin: auto;padding-top: 30px;}
    .row-style{height:32px;line-height:32px;margin-bottom: 10px;letter-spacing: 2px}
    .fl{float: left;}
    .pic_frame {width: 96%;margin: 0px 0% 0px 6%;}
    .zzmb{z-index:100000; position: absolute; top:0; left:0; -moz-opacity:0.65; opacity:0.65; filter: alpha(opacity=65); background:#000; width:100%; height:100%;}
    .pl15 {padding-left: 15px;}
    .pr15 {padding-right: 15px;}
    .add-pic-bg {background-image: url('../../static/image/wuye/bg.png');height: 100px;width: 95px;}
    .btn-fabu{position: fixed;width: 90%;height: 50px;bottom: 0;left: 5%;right: 5%;background-color:#ff8a00;line-height: 50px; color: white;}
    h2{text-align: center;letter-spacing: 0.05rem;font-size: 15px;}
</style>
<template>
    <div class="box">
        <Row class="row-style">
            <Col span="6" offset="2">
                <span>报修类型</span>
            </Col>
            <Col span="14">
                <Select v-model="repairType">
                    <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </Col>
        </Row>
        <Row class="row-style">
            <Col span="6" offset="2">
                <span>报修地址</span>
            </Col>
            <Col span="14">
                <Input v-model="address" placeholder="请填写具体地址..." />
            </Col>
        </Row>
        <Row class="row-style">
            <Col span="6" offset="2">
                <span>报修人电话</span>
            </Col>
            <Col span="14">
                <Input v-model="tel" placeholder="请填写电话号码" />
            </Col>
        </Row>
        <Row>
            <Col span="6" offset="2">
                <span>报修内容</span>
            </Col>
            <Col span="20" offset="2" style="margin-top:10px;">
                <Input v-model="textarea" type="textarea" :rows="4" :maxlength="max" placeholder="请填写报修信息..."/>
            </Col>
            <Col span="8" offset="16">
                <span>最多输入200字</span>
            </Col>
        </Row>
        <Row>
            <Col span="22" offset="1">
                <div id="pic" class="pic_frame">
                
                </div>
                <div class="pl15 pr15">
                    <div id="add" v-on:click="addPic" class="add-pic-bg fl pl5"></div>
                </div>
            </Col>
        </Row>
        <div class="btn-fabu" @click="issue">
            <h2>发布</h2>
        </div>
    </div>
</template>

<script>
let vm
import wx from 'weixin-js-sdk';
import { Toast } from 'mint-ui';
export default {
    created() {
        vm = this;
    },
    data () {
        return {
            repairType: '',
            typeList: [
                {
                    value: '公共部位报修',
                    label: '公共部位报修'
                },
                {
                    value: '私家部位报修',
                    label: '私家部位报修'
                }
            ],
            address: '',
            tel: '',
            textarea:'',
            max:200,
            uploadPicId: '',
            user:this.$route.query,
            iosImg:''
        };
    },

    components: {},

    computed: {},

    mounted(){
        // this.saveThread()
        // this.ipone();
        this.wxconfig();
    },

    methods: {
        //判断是安卓还是iOS
        ipone () {
            var u = navigator.userAgent, app = navigator.appVersion;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
            var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isAndroid) {
                alert("屌丝安卓");
            }
            if (isIOS) {
                alert("苹果机！")
            }
        },  
        wxconfig(){
            let url = 'https://test.e-shequ.com/msa/crm/oauth/parameterConfiguration';
            this.axios({
                url: url,
                method: 'get',
                params:{
                    url:window.location.href.split('#')[0]
                }
            }).then(res=>{
                console.log(res.data);
                let wd = JSON.parse(res.data);
                console.log(wd);
                wx.config({
                    beta: true,
                    debug: true,
                    appId: wd.appId,
                    timestamp: wd.timestamp,
                    nonceStr: wd.nonceStr,
                    signature: wd.signature,
                    jsApiList: ["chooseImage","previewImage","uploadImage","downloadImage"]
                })
            })
        },
        //点击添加图片
        addPic:function(){
            wx.chooseImage({
                count: 6, // 默认9
                sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    this.iosImg = localIds;
                    console.log(localIds);
                    alert('已选择'+localIds.length+'张图片');
                    var html = "";
                    var pic_length = $("[name='pics']").length;
                    if(pic_length+localIds.length>6){
                        alert("所选图片超过6张。")
                        return false;
                    }
                    for(var i=0;i<localIds.length;i++){
                        html = "<div name='pics'  class=\"fl\" style=\"margin-right:5px;\"><img id=\""+localIds[i]+"\" src=\""+localIds[i]+"\" style=\"height:100px;width:90px;\"/></div>"
                        $("#pic").append(html);
                    }
                    if(pic_length+localIds.length >= 6){
                        $("#add").hide();
                    }
                },
                error:function(err){
                    console.log(err)
                }
            });            
        },
        issue:function(){
            console.log(vm.repairType)
            if(vm.repairType == ""){
                Toast({
                    message: '请选择报修类型',
                    position: 'middle',
                    duration: 2000
                });
                return;
            };
            if(vm.address == ""){
                Toast({
                    message: '请填写报修地址',
                    position: 'middle',
                    duration: 2000
                });
                return;
            };
            if (vm.tel == "" ) {
                Toast({
                    message: '请填写电话号码',
                    position: 'middle',
                    duration: 2000
                });
                return;
            };
            if(!(/^1[3-9][0-9]\d{4,8}$/.test(vm.tel))){
                Toast({
                    message: '请填写正确的电话号码',
                    position: 'middle',
                    duration: 2000
                });
                return;
            };
            if (vm.textarea.length>200) {
                Toast({
                    message: '发布字数不能超过200字节',
                    position: 'middle',
                    duration: 2000
                });
                return;
            }
            var pic_length = $("[name='pics']").length;
            $("#zzmb").show();
            if($(window).height()>$(document).height()){
                $(".zzmb").height($(window).height());
            }else{
                $(".zzmb").height($(document).height());
            }
            if(pic_length>0){
                this.uploadToWechat();
            }else{
                this.saveThread();
            }
        },
        //上传图片到微信
        uploadToWechat:function(){
            var i = 0;
            var pics = $("[name='pics']");
            function upload(){
                var img = pics.eq(i).find("img");
                var id = img.attr("id");
                // if (id.indexOf("wxlocalresource") != -1) {
                //     id = id.replace("wxlocalresource", "wxLocalResource");
                // };
                alert(id);
                setTimeout(function(){
                    
                    wx.uploadImage({
                        localId: id, // 需要上传的图片的本地ID，由chooseImage接口获得
                        isShowProgressTips: 1, // 默认为1，显示进度提示
                        success: function (res) {
                            var serverId = res.serverId; // 返回图片的服务器端ID
                            vm.uploadPicId+=serverId+",";
                            i++;
                            if(i<pics.length){
                                upload();
                            }else if(i==pics.length){
                                alert(1111);
                                vm.saveThread();
                            }    
                        }
                    })
                },50);
            }
            upload();
        },
        
        saveThread(){
            alert(2222);
            if(vm.repairType=="公共部位报修"){
                vm.repairType = '0';
            }else{
                vm.repairType = "1"
            }
            let url = "/crm/repairOder/addOrUpdateRepairOrder?userId="+this.user.userId+"";
            this.axios({
                url: url,
                method: 'post',
                data:{  
                    repairOrder:{
                        repairType:vm.repairType,
                        repairAddress:vm.address,
                        repairContent:vm.textarea,
                        repairPhone:vm.tel,
                        serverIds:vm.uploadPicId
                    }
                }
            }).then(res=>{
                console.log(res.data);
                alert('发布成功');
                this.$router.push('/')
            }).catch(err=>{
                console.log("沙雕巨星")
            })
            
        }
    }
}

</script>