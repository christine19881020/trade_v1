<template>
	<section>
		<table class="excelTable" cellspacing="0">
			<thead>
				<tr>
					<th rowspan="2" width="30px" class="midGrey"></th>
					<th colspan="2" rowspan="2">款号&任务</th>
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
					<td rowspan="5" class="midGrey">1</td>
					<td rowspan="5" class="lightGrey">款号123</td>
					<td class="lightGrey">面料</td>
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
					<td class="lightGrey">辅料</td>
					<td colspan="29">
						<Row>
							<Col span="5" offset="4">
							<div class="stepBox green"></div>
							</Col>
						</Row>
					</td>
				</tr>
				<tr>
					<td class="lightGrey">打样</td>
					<td colspan="29">
						<Row>
							<Col span="6" offset="5">
							<div class="stepBox green"></div>
							</Col>
						</Row>
					</td>
				</tr>
				<tr>
					<td class="lightGrey">生产</td>
					<td colspan="29">
						<Row>
							<Col span="7" offset="11">
							<div class="stepBox"></div>
							</Col>
						</Row>
					</td>
				</tr>
				<tr>
					<td class="lightGrey">出运</td>
					<td colspan="29">
						<Row>
							<Col span="4" offset="18">
							<div class="stepBox"></div>
							</Col>
						</Row>
					</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
</script>

<style lang="scss">

</style>