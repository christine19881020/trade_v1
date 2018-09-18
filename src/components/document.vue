<template>
	<div class="section section-files">
		<h3 class="section-head">
						<a class="title">文档</a>
						<Dropdown  trigger="click" style="margin-left: 20px">
							<Button-group size="small" class="dropShadow">
								<Button type="ghost">创建文档</Button>
								<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
							</Button-group>
							<Dropdown-menu slot="list" class="dropMenu">
								<Dropdown-item>普通文档</Dropdown-item>
								<Dropdown-item>Markdown文档</Dropdown-item>
								<Dropdown-item style="border-top:1px solid #dfdfdf">创建文件夹</Dropdown-item>								
							</Dropdown-menu>
						</Dropdown>
						<div class="todolist-toolbar">
					        <i class="fa fa-th active"></i>
					        <i class="fa fa-list"></i>					      
						</div>
						</h3>
		<ul class="doc-list clearfix">
			<li class="doc-item" v-for="item in documents">
				<h5>{{item.title}}</h5>
				<div class="doc-desc editor-style" v-html="item.content">{{item.content}}</div>
				<div class="truncated"></div>
				<div class="doc-oprate">
					<a>移动</a>
					<a>删除</a>
				</div>
				<div class="doc-info">
					<span class="left">{{item.author}}</span>
					<span class="right">{{item.updateTime}}</span>
				</div>
			</li>
		</ul>
		<div class="section-footer">
			<a href="#" class="greenA">查看全部文档</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				documents: [{
					title: '编写排版漂亮的在线文档',
					content: "<p>跟本地的 Word 、WPS 或 Pages 相比，在线文档的优势是：</p><ul><li>修改方便，不用为了几个字重新上传文档，可以直接在线改 </li><li>云端保存，你在办公室电脑上没写完的文档，可以到咖啡馆用笔记本继续写，不用把文件拷来拷去</li><li>讨论方便，你可以快速的跟同事在线讨论文档的内容，获得改进建议</li></ul><p>在编写排版排量的在线文档之前，你需要了解一些中文排版的基础知识。</p><p>首先，中文最重要的排版是断句。文档里的逗号、句号、问号和感叹号等常用标点，应该正确的使用；其次，是内容分段。文档里的内容段落，以 3 ~ 10 行为宜，段落过短会让内容破碎，过长容易引起阅读疲劳。</p><p>其次，你需要熟悉下面的格式排版方式：</p><h2><b>文字类型</b></h2><p>文字支持标题和正文两种类型，你可以选中文字后，在工具栏选择相应的文字类型。</p><p> </p><p>Tips：你可以用截图粘贴的方式快速插入图片。</p><p> </p><h2><b>正文样式</b> </h2><p>目前，在线编辑器支持以下四种正文样式。</p><ul><li><b>加粗</b></li><li><i>斜体</i></li><li><u>下划线</u></li><li><strike>删除线</strike></li></ul><p> </p><p> </p><h2><b>列表样式</b></h2><ol></ol>",
					author: '老沈（沈学良/Manfred）',
					updateTime: '2014年7月8日'
				}, {
					title: '编写排版漂亮的在线文档',
					content: "<ul><li>222</li><li>222</li><li>222</li><li>222</li></ul>",
					author: '老沈（沈学良/Manfred）',
					updateTime: '2014年7月8日'
				}]
			}
		}
	}
</script>

<style lang="scss">
	.doc-list {
		margin-top: 30px;
		.doc-item {
			float: left;
			position: relative;
			width: 250px;
			height: 250px;
			margin: 0 40px 45px 0;
			border: 1px solid #ebe9cf;
			background: #fffef5;
			cursor: pointer;
			border-radius: 4px;
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
			box-sizing: border-box;
			padding: 15px;
			h5 {
				display: block;
				font-size: 16px;
				line-height: 1.2;
				font-weight: bold;
				font-family: arial, sans-serif;
				color: #000;
			}
			.doc-desc {
				word-wrap: break-word;
				word-break: break-all;
				overflow: hidden;
				margin: 12px 0 0 0;
				font-size: 12px;
				line-height: 1.4;
				color: #999;
				overflow: hidden;
				height: 185px;
			}
			
			.doc-info {
				span {
					position: absolute;
					top: 255px;
					display: block;
					font-size: 12px;
					color: #579E5A;
					font-weight: 500;
				}
				span:first-child {
					left: 2px;
				}
				span:last-child {
					right: 2px;
				}
			}
			.truncated {
				width: 100%;
				height: 50px;
				position: absolute;
				bottom: 0;
				left: 0;
				background-color: rgba(255, 255, 255, 0);
				background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fffef4), to(rgba(255, 255, 255, 0)));
				background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), #fffef4);
				background: -moz-linear-gradient(top, rgba(255, 255, 255, 0), #fffef4);
				background: linear-gradient(top, rgba(255, 255, 255, 0), #fffef4);
			}
			.doc-oprate {
				font-size: 12px;
				text-align: center;
				display: none;
				position: absolute;
				bottom: 10px;
				left: 80px;
				a {
					color: #84a099;
					font-weight: bold;
					cursor: pointer;
				}
				:hover {
					color: #4ea5ad;
				}
				a:first-child {
					margin-right: 10px;
				}
			}
		}
		.doc-item:hover {
			box-shadow: 3px 0 3px rgba(0, 0, 0, 0.05), 0 3px 3px rgba(0, 0, 0, 0.05), 0 -3px 3px rgba(0, 0, 0, 0.05), -3px 0 3px rgba(0, 0, 0, 0.05);
			.doc-oprate {
				display: block;
			}
		}
	}
</style>