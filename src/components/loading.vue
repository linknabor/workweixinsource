<style scoped>
    /*** loading**/
.load6{margin:100px auto 0;width:150px;top:25%;left:25%;width:50%;text-align:center;position:fixed;z-index:1002;overflow:auto}.black_overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#f5f5f5;z-index:1001;-moz-opacity:.8;opacity:.80;filter:alpha(opacity=80)}.load6>div{width:30px;height:30px;background-color:#FF8A00;border-radius:100%;display:inline-block;-webkit-animation:bouncedelay 1.4s infinite ease-in-out;animation:bouncedelay 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.load6 .bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.load6 .bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}

#phoneErro {
	margin: 100px auto 0;
	top: 25%;
	left: 25%;
	width: 50%;
	text-align: center;
	height: 60px;
	line-height: 60px;
	background-color: black;
	-moz-opacity: .8;
	opacity: .80;
	filter: alpha(opacity=80);
	position: fixed;
	z-index: 1999;
	overflow: auto;
	color: white;
	-moz-border-radius: 15px;
	-webkit-border-radius: 15px;
	font-size: 14px;
	display: none
}

#phoneAjax {
	position: fixed;
	top: 20%;
	left: 50%;
	width: 60px;
	height: 60px;
	line-height: 60px;
	margin-left: -30px;
	text-align: center;
	background-color: black;
	-moz-opacity: .8;
	opacity: .80;
	filter: alpha(opacity=80);
	z-index: 1998;
	overflow: auto;
	-moz-border-radius: 15px;
	-webkit-border-radius: 15px
}
.hidden {
	visibility: hidden
}

/**loading**/
</style>
<template>
    <div>
        <!--//加载动画-->
        <div class="load6" id="LoadingBar">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
        <div id="fade" class="black_overlay">
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