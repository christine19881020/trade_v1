<template>
	<section>
		<div class="page page-root simple-pjax page-behind" style="">
			<router-link class="link-page-behind" to="/order/contractDetail/1">B&M-HF1707001</router-link>
		</div>
		<div class="page page-1 simple-pjax page-behind" style="">
			<router-link class="link-page-behind" to="/order/contractDetail/1">款号XXX 蓝色 S码 面料任务</router-link>
		</div>
		<div class="page page-2 simple-pjax" style="min-height:1100px;">
			<div class="page-inner pd40">
				<div class="project-header">
					<div class="project-hd-info clearfix">
						<span class="project-name left">内部进度报表</span>
						<Button class="right">下载</Button>
					</div>
				</div>
				<table class="excelTable" cellspacing="0">
					<thead>
						<tr>
							<th rowspan="2" width="30px" class="midGrey"></th>
							<th rowspan="2" width="100px">任务</th>
							<th colspan="8">2017.7</th>
							<th colspan="21">2017.8</th>
						</tr>
						<tr>
							<th>24</th>
							<th>25</th>
							<th>26</th>
							<th>27</th>
							<th>28</th>
							<th>29</th>
							<th>30</th>
							<th>31</th>
							<th>1</th>
							<th>2</th>
							<th>3</th>
							<th>4</th>
							<th>5</th>
							<th>6</th>
							<th>7</th>
							<th>8</th>
							<th>9</th>
							<th>10</th>
							<th>11</th>
							<th>12</th>
							<th>13</th>
							<th>14</th>
							<th>15</th>
							<th>16</th>
							<th>17</th>
							<th>18</th>
							<th>19</th>
							<th>20</th>
							<th>21</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="midGrey">1</td>							
							<td class="lightGrey">配比</td>
							<td colspan="29">
								<Row>
									<Col span="4" offset="2">
									<router-link to="/order/newOrder/subProcess">
										<div class="stepBox green"></div>
									</router-link>
									</Col>
								</Row>
							</td>
						</tr>
						<tr>
							<td class="midGrey">2</td>
							<td class="lightGrey">颜色</td>
							<td colspan="29">
								<Row>
									<Col span="5" offset="4">
									<div class="stepBox green"></div>
									</Col>
								</Row>
							</td>
						</tr>
						<tr>
							<td class="midGrey">3</td>
							<td class="lightGrey">尺寸</td>
							<td colspan="29">
								<Row>
									<Col span="6" offset="5">
									<div class="stepBox green"></div>
									</Col>
								</Row>
							</td>
						</tr>
						<tr>
							<td class="midGrey">4</td>
							<td class="lightGrey">供应商鉴定</td>
							<td colspan="29">
								<Row>
									<Col span="7" offset="11">
									<div class="stepBox"></div>
									</Col>
								</Row>
							</td>
						</tr>
						<tr>
							<td class="midGrey">5</td>
							<td class="lightGrey">面料样确认</td>
							<td colspan="29">
								<Row>
									<Col span="4" offset="18">
									<div class="stepBox"></div>
									</Col>
								</Row>
							</td>
						</tr>
						<tr>
							<td class="midGrey">6</td>
							<td class="lightGrey">面料到位</td>
							<td colspan="29">
								<Row>
									<Col span="2" offset="22">
									<div class="stepBox"></div>
									</Col>
								</Row>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>
</template>

<script>
</script>

<style>

</style>