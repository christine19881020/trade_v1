<template>
	<div class="section section-files">
		<h3 class="section-head">
		<a class="title">文件</a>
		<Dropdown trigger="click" style="margin-left: 20px">
			<Button-group size="small" class="dropShadow">
				<Button type="ghost">上传文件</Button>
				<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
			</Button-group>
			<Dropdown-menu slot="list" class="dropMenu">
				<Dropdown-item><i class="fa fa-upload"></i>上传文件</Dropdown-item>
				<Dropdown-item><i class="fa fa-folder-o"></i>创建文件夹</Dropdown-item>
			</Dropdown-menu>
		</Dropdown>
		<div class="todolist-toolbar">
			<i class="fa fa-th" :class="{'active':!isList}" @click="viewGridFn"></i>
			<i class="fa fa-list" :class="{'active':isList}" @click="viewListFn"></i>
		</div>
       </h3>

		<ul class="list clearfix" :class="{'grid-view':!isList,'list-view':isList}">
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
			<li v-for="item in files">
				<a href="#" class="imgbox">
					<img v-if="item.img=='pdf'" alt="item.name" src="../../assets/file_extension_pdf.png" title="item.name" />
					<img v-if="item.img=='folder'" alt="item.name" src="../../assets/folder.png" title="item.name" />
				</a>
				<div class="link-name">
					<a href="#" title="item.name" data-stack="">
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
		</ul>
			
	</div>
</template>

<script>
	export default {
		name: 'files',
		data() {
			return {
				isList: false,
				files: [{
					img: 'pdf',
					name: '如何整理项目文件.pdf',
					size: '931k',
					lastTime: '昨天'
				}, {
					img: 'folder',
					name: '参考资料',
					size: '--',
					lastTime: '8月7日'
				}, {
					img: 'folder',
					name: '设计图',
					size: '--',
					lastTime: '8月7日'
				}]
			}
		},
		methods: {
			viewGridFn() {
				this.isList = false;
			},
			viewListFn() {
				this.isList = true;
			}
		}
	}
</script>

<style lang="scss">
	.section-files {
		.grid-view {
			margin-top: 40px;
			li {
				width: 140px;
				min-height: 152px;
				display: inline-block;
				vertical-align: top;
				margin: 0 20px 15px;
				text-align: center;
				.imgbox {
					height: 88px;
					display: block;
					a {
						vertical-align: bottom;
					}
				}
				.link-name {
					width: 140px;
					font-size: 14px;
					margin: 15px 0 8px;
					line-height: 16px;
					word-wrap: break-word;
					text-align: center;
					font-weight: normal;
					a {
						color: #333333;
					}
					:hover {
						color: #4ea5ad;
					}
				}
				.file-links {
					font-size: 12px;
					visibility: hidden;
					a {
						color: #84a099;
					}
					:hover {
						color: #4ea5ad;
					}
				}
			}
			li:hover {
				.file-links {
					visibility: visible;
				}
			}
		}
		.list-view {
			li {
				height: 50px;
				border-bottom: 1px solid #dfdfdf;
				-moz-user-select: none;
				-webkit-user-select: none;
				user-select: none;
				position: relative;
				.imgbox {
					width: 35px;
					height: 35px;
					position: absolute;
					left: 3px;
					top: 0;
					text-align: center;
					line-height: 45px;
					img {
						max-width: 35px;
						max-height: 35px;
						vertical-align: middle;
						border: none;
						padding: 0;
						background: none;
						margin: 0 auto;
					}
				}
				.link-name {
					display: block;
					float: left;
					font-size: 14px;
					line-height: 50px;
					margin: 0 10px 0 55px;
					width: 470px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					a {
						color: #333;
					}
					:hover {
						color: #4ea5ad;
						font-weight: bold;
					}
				}
				.file-size {
					float: left;
					width: 12%;
					font-size: 14px;
					line-height: 50px;
					color: #999;
				}
				.file-update-time {
					float: left;
					width: 14%;
					font-size: 14px;
					line-height: 50px;
					color: #999;
				}
				.file-links {
					display: none;
					position: absolute;
					right: 10px;
					width: 14%;
					font-size: 12px;
					line-height: 50px;
					text-align: right;
					a {
						color: #84a099;
						text-decoration: none;
						margin-right: 5px;
					}
					:hover {
						color: #4ea5ad;
					}
				}
			}
			li:hover {
				background: #f6f6f6;
				.file-links {
					display: block;
				}
			}
		}
		.file-headers {
			border-bottom: 1px solid #dfdfdf;
			height: 50px;
			line-height: 50px;
			-moz-user-select: none;
			-webkit-user-select: none;
			user-select: none;
			width: 100%;
			.file-header {
				cursor: pointer;
				.fa {
					display: none;
				}
			}
			.name-header {
				display: inline-block;
				width: 60%;
				text-indent: 10px;
			}
			.size-header {
				display: inline-block;
				width: 12%;
			}
			.update-time-header {
				display: inline-block;
				width: 14%;
			}
			span,
			.fa {
				font-size: 12px;
				color: #999999;
			}
		}
	}
	
</style>