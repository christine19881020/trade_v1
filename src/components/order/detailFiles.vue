<template>
	<div class="section section-files clearfix">
		<h3 class="section-head">
		<a class="title">文件</a>
			<div class="todolist-toolbar">
				<i class="fa fa-th" :class="{'active':!isList}" @click="viewGridFn"></i>
				<i class="fa fa-list" :class="{'active':isList}" @click="viewListFn"></i>
			</div>
		<div class="fileUpload">			
				<div class="file-headers" v-if="isList">
					<div class="file-header name-header" data-sortable="">
						<span>名称</span>
						<i class="fa fa-caret-down"></i>
						<i class="fa fa-caret-up"></i>
					</div>
					<div class="file-header size-header" data-sortable="">
						<span>大小</span>
						<i class="fa fa-caret-down"></i>
						<i class="fa fa-caret-up"></i>
					</div>
					<div class="file-header update-time-header" data-sortable="desc">
						<span>最后修改时间</span>
						<i class="fa fa-caret-down"></i>
						<i class="fa fa-caret-up"></i>
					</div>
			  </div>
			  <div :class="{'grid-view':!isList,'list-view':isList}">
			  	  <div class="demo-upload-list clearfix" v-for="item in uploadList" >
			        <template v-if="item.status === 'finished'">			           	       
			            <div class="Jtitle">
				            	<div class="Jimgbox">
				           	  <img v-if="item.img=='pdf'" alt="item.name" src="../../assets/file_extension_pdf.png" title="item.name" />
							  <img v-if="item.img=='folder'" alt="item.name" src="../../assets/folder.png" title="item.name" />
							  <img v-if="item.img==''" alt="item.name" src="../../assets/folder.png" title="item.name" />
				           	</div> 
			            	    <div class="JtitleSpan">
			            	     	{{item.name}}
			            	    </div>
			            </div>
			            <div class="Jfilesize" v-if="isList">
							{{item.size}}
						</div>
						<div class="Jfileupdatetime" v-if="isList">
							<span title="2017年08月10日 14:45">昨天</span>
						</div>
			            <div class="Joprate">
							<a href="#">下载</a>
							<a href="#">移动</a>
							<a href="#">删除</a>
						</div>
			        </template>
			        <template v-else>
			            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info class="progressBar"></Progress>
			        </template>
		       </div>
			  </div>			
		    <div class="btnGroup">
			    	<Upload
			        ref="upload"
			        :show-upload-list="false"
			        :default-file-list="files"
			        :on-success="handleSuccess"
			        :format="['jpg','jpeg','png','pdf']"
			        :max-size="2048"
			        :on-format-error="handleFormatError"
			        :on-exceeded-size="handleMaxSize"
			        :before-upload="handleBeforeUpload"
			        multiple class="JuploadBtn"
			        action="//jsonplaceholder.typicode.com/posts/">
			        <Button type="ghost" size="small">上传文件</Button>
			    </Upload>
			    <Dropdown trigger="click" class="Jdropdown" >
			        <Button type="ghost" size="small">
			            <Icon type="arrow-down-b"></Icon>
			        </Button>
			        <Dropdown-menu slot="list">
			           <Dropdown-item><i class="fa fa-upload"></i>上传文件</Dropdown-item>
					   <Dropdown-item><i class="fa fa-folder-o"></i>创建文件夹</Dropdown-item>
			        </Dropdown-menu>
			    </Dropdown>
		    </div>		    
		    <Modal title="查看图片" v-model="visible">
		        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
		    </Modal>
		</div>
		
	
       </h3>

		<!--<ul class="list clearfix" :class="{'grid-view':!isList,'list-view':isList}">
			<li v-for="item in files">
				<a href="#" class="imgbox">
					<img v-if="item.img=='pdf'" alt="item.name" src="../../assets/file_extension_pdf.png" title="item.name" />
					<img v-if="item.img=='folder'" alt="item.name" src="../../assets/folder.png" title="item.name" />
				</a>
				<div class="link-name">
					<a href="#" title="item.name">
						{{item.name}}
					</a>
				</div>
				<div class="file-size" v-if="isList">
					{{item.size}}
				</div>
				<div class="file-update-time" v-if="isList">
					<span title="2017年08月10日 14:45">昨天</span>
				</div>
				<div class="file-links">
					<a href="#">下载</a>
					<a href="#">移动</a>
					<a href="#">删除</a>
				</div>
			</li>
		</ul>-->
	</div>
</template>

<script>
	export default {
		name: 'detailFiles',
		data() {
			return {
				isList: false,
				files: [{
					img: 'pdf',
					size: '931k',
					lastTime: '昨天',
					name: '如何整理项目文件.pdf',
					url: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
				}, {
					img: 'folder',
					size: '--',
					lastTime: '8月7日',
					name: '参考资料',
					url: 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
				}, {
					img: 'folder',
					size: '--',
					lastTime: '8月7日',
					name: 'HL0234 品名XXX',
					url: 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
				}],
				imgName: '',
				visible: false,
				uploadList: []
			}
		},
		methods: {
			viewGridFn() {
				this.isList = false;
			},
			viewListFn() {
				this.isList = true;
			},
			handleView(name) {
				this.imgName = name;
				this.visible = true;
			},
			handleRemove(file) {
				// 从 upload 实例删除数据
				const fileList = this.$refs.upload.fileList;
				this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
			},
			handleSuccess(res, file) {
				// 因为上传过程为实例，这里模拟添加 url
				file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
				file.name = '7eb99afb9d5f317c912f08b5212fd69a';
			},
			handleFormatError(file) {
				this.$Notice.warning({
					title: '文件格式不正确',
					desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
				});
			},
			handleMaxSize(file) {
				this.$Notice.warning({
					title: '超出文件大小限制',
					desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
				});
			},
			handleBeforeUpload() {
				const check = this.uploadList.length < 5;
				if(!check) {
					this.$Notice.warning({
						title: '最多只能上传 5 张图片。'
					});
				}
				return check;
			}

		},
		mounted() {
			this.uploadList = this.$refs.upload.fileList;
		}
	}
</script>

<style lang="scss">

</style>