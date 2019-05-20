<style scoped>
	.box{width: 98%;margin: auto;border-bottom: 1px solid #e0e0e0;;}
	.box:last-child{border-bottom: none}
	.title{font-size: .5rem;font-weight: bold;}
	.edit{font-size: .3rem;color: #bbb;line-height: 40px;}
</style>
<template>
	<div>
		<br>
		<router-link :to="{path:'/vote',query:{id:1}}">
			<div v-for="item in data" class="box">
				<Row style="height:100px;">
					<Col span="8">
						<div style="width:80%;height:90%;margin:8px auto 2px">
							<img src="../../assets/logo.png" alt="" style="width:100%;margin:auto;">
						</div>
					</Col>
					<Col span="16">
						<Row>
							<Col span="24" style="height:40px;margin-top:10px;">
								<p class="title">{{item.title}}</p>
							</Col>
							<Col span="24" style="height:40px;">
								<Row>
									<Col span="16">
										<span class="edit">{{item.time}}</span>
									</Col>
									<Col span="8">
										<span class="edit">{{item.edit}}</span>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>			
		</router-link>		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				data:[
					{
						img:'./assets/logo.png',
						title:"物业服务建议反馈",
						time:'2012-09-20',
						edit:'合协社区'
					},
					{
						img:'./assets/logo.png',
						title:"商城服务建议反馈",
						time:'2012-09-30',
						edit:'悦社区'
					}
				]
			}
		},
		beforeCreate(){//刷新页面
			
		},
		created(){

		},
		watch:{
			
		},
		mounted(){
			this.info();
	  		
		},
		methods:{
			info(){
				this.axios({
					url:'/ops/vote/getVoteReleaseList',
					method:'get',
				}).then(res=>{
					console.log(res.data)
				}).catch(err=>{
					console.log(err);
				})
			}

		}
	}
</script>