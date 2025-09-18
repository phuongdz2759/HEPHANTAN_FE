<template>
	<div class="stock-realtime">
		<h2>Chứng khoán Realtime (Demo)</h2>
		<table class="stock-table">
			<thead>
				<tr>
					<th>Mã</th>
					<th>Giá</th>
					<th>Thay đổi</th>
					<th>Khối lượng</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="stock in stocks" :key="stock.code">
					<td>{{ stock.code }}</td>
					<td :class="priceClass(stock)">{{ stock.price.toFixed(2) }}</td>
					<td :class="changeClass(stock)">
						{{ stock.change > 0 ? '+' : '' }}{{ stock.change.toFixed(2) }}
					</td>
					<td>{{ stock.volume }}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="chart-container">
		<h3>Biểu đồ biến động giá: {{ stocks[0].code }}</h3>
		<div id="stockChart" style="height: 300px;"></div>
	</div>
</template>

<script>
export default {
	name: 'TestIndex',
	data() {
		return {
			stocks: [
				{ code: 'VCB', price: 90000, change: 0, volume: 120000 },
				{ code: 'FPT', price: 105000, change: 0, volume: 95000 },
				{ code: 'VNM', price: 72000, change: 0, volume: 80000 },
				{ code: 'MWG', price: 42000, change: 0, volume: 67000 },
				{ code: 'HPG', price: 27000, change: 0, volume: 150000 },
			],
			chart: null,
			priceHistory: [90000],
			maxHistory: 30,
		};
	},
	mounted() {
		// Mô phỏng cập nhật realtime
		// Load ApexCharts script nếu chưa có
		if (!window.ApexCharts) {
			const script = document.createElement('script');
			// Đường dẫn tương đối cho Vite (public)
			script.src = '/src/assets/plugins/apexcharts-bundle/js/apexcharts.min.js';
			script.onload = this.initChart;
			script.onerror = () => {
				// Thử lại với đường dẫn public nếu không thành công
				script.remove();
				const script2 = document.createElement('script');
				script2.src = '/assets/plugins/apexcharts-bundle/js/apexcharts.min.js';
				script2.onload = this.initChart;
				document.body.appendChild(script2);
			};
			document.body.appendChild(script);
		} else {
			this.initChart();
		}
		this.interval = setInterval(this.updateStocks, 1500);
	},
	methods: {
		updateStocks() {
			this.stocks = this.stocks.map((stock, idx) => {
				const change = (Math.random() - 0.5) * 200;
				const newPrice = Math.max(1000, stock.price + change);
				// Lưu lịch sử giá cho mã đầu tiên
				if (idx === 0) {
					this.priceHistory.push(newPrice);
					if (this.priceHistory.length > this.maxHistory) this.priceHistory.shift();
					if (this.chart) {
						// Cập nhật dữ liệu và trigger animation
						this.chart.updateOptions({
							series: [{ data: this.priceHistory }]
						}, true, true);
					}
				}
				return {
					...stock,
					change: newPrice - stock.price,
					price: newPrice,
					volume: stock.volume + Math.floor(Math.random() * 1000),
				};
			});
		},
		priceClass(stock) {
			return stock.change > 0 ? 'up' : stock.change < 0 ? 'down' : '';
		},
		changeClass(stock) {
			return stock.change > 0 ? 'up' : stock.change < 0 ? 'down' : '';
		},
		initChart() {
			this.chart = new window.ApexCharts(document.querySelector("#stockChart"), {
				chart: {
					type: 'line',
					height: 300,
					animations: { enabled: true },
					toolbar: { show: false },
				},
				series: [{ name: this.stocks[0].code, data: this.priceHistory }],
				xaxis: { labels: { show: false } },
				yaxis: { labels: { formatter: val => val.toFixed(0) } },
				colors: ['#2563eb'],
				stroke: { width: 3 },
				grid: { borderColor: '#eee' },
			});
			this.chart.render();
		}
	},
	beforeUnmount() {
		clearInterval(this.interval);
		if (this.chart) this.chart.destroy();
	}
};
</script>

<style scoped>
body {
	min-height: 100vh;
	background: #e805d5;
	/* Animated gradient background */
	background: linear-gradient(120deg, #e88018 0%, #0e1264 100%);
	animation: gradientMove 10s ease-in-out infinite alternate;
	background-size: 200% 200%;
}
@keyframes gradientMove {
	0% {
		background-position: 0% 50%;
	}
	100% {
		background-position: 100% 50%;
	}
}
.stock-realtime, .chart-container {
	/* Glassmorphism effect */
	background: rgba(255,255,255,0.85);
	backdrop-filter: blur(8px) saturate(1.2);
	-webkit-backdrop-filter: blur(8px) saturate(1.2);
	box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10), 0 1.5px 8px 0 rgba(80,80,180,0.08);
	border: 1.5px solid rgba(255,255,255,0.25);
}
.stock-realtime {
	max-width: 600px;
	margin: 48px auto 0 auto;
	border-radius: 22px;
	padding: 36px 28px 28px 28px;
	text-align: center;
	position: relative;
	z-index: 2;
	/* Glow effect */
	box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10), 0 0 32px 0 #a5b4fc33;
}
.stock-realtime h2 {
	font-size: 2.1rem;
	font-weight: 800;
	margin-bottom: 18px;
	color: #22223b;
	letter-spacing: 1px;
	text-shadow: 0 2px 8px #a5b4fc33;
}
.stock-table {
	width: 100%;
	border-collapse: separate;
	border-spacing: 0;
	background: transparent;
	border-radius: 14px;
	overflow: hidden;
	box-shadow: 0 1px 8px rgba(80,80,180,0.06);
}
.stock-table th, .stock-table td {
	padding: 14px 16px;
	text-align: center;
	border-bottom: 1px solid #e5e7eb;
	font-size: 1.08rem;
	transition: background 0.2s, color 0.2s;
}
.stock-table th {
	background: linear-gradient(90deg, #e0e7ef 60%, #f1f5f9 100%);
	color: #374151;
	font-weight: 700;
	border-bottom: 2px solid #e0e7ef;
	letter-spacing: 0.5px;
}
.stock-table tr:last-child td {
	border-bottom: none;
}
.stock-table tr:hover {
	background: #e0e7ef;
	transition: background 0.2s;
}
.up {
	color: #16a34a;
	font-weight: bold;
	letter-spacing: 0.5px;
	text-shadow: 0 1px 6px #bbf7d0cc;
}
.down {
	color: #dc2626;
	font-weight: bold;
	letter-spacing: 0.5px;
	text-shadow: 0 1px 6px #fecaca99;
}
.chart-container {
	max-width: 600px;
	margin: 36px auto 0 auto;
	border-radius: 22px;
	padding: 28px 16px 12px 16px;
	position: relative;
	z-index: 1;
	box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10), 0 0 32px 0 #a5b4fc33;
}
.chart-container h3 {
	font-size: 1.2rem;
	font-weight: 700;
	color: #22223b;
	margin-bottom: 12px;
	text-shadow: 0 1px 6px #a5b4fc33;
}
@media (max-width: 700px) {
	.stock-realtime, .chart-container {
		max-width: 98vw;
		padding: 10px 2vw;
	}
	.stock-table th, .stock-table td {
		padding: 7px 4px;
		font-size: 0.98rem;
	}
}
.stock-realtime {
	max-width: 600px;
	margin: 40px auto 0 auto;
	background: rgba(255,255,255,0.95);
	border-radius: 18px;
	box-shadow: 0 4px 24px rgba(0,0,0,0.10);
	padding: 32px 24px 24px 24px;
	text-align: center;
}
.stock-realtime h2 {
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 18px;
	color: #22223b;
	letter-spacing: 1px;
}
.stock-table {
	width: 100%;
	border-collapse: separate;
	border-spacing: 0;
	background: transparent;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.stock-table th, .stock-table td {
	padding: 12px 14px;
	text-align: center;
	border-bottom: 1px solid #e5e7eb;
	font-size: 1.08rem;
}
.stock-table th {
	background: #f1f5f9;
	color: #374151;
	font-weight: 600;
	border-bottom: 2px solid #e0e7ef;
}
.stock-table tr:last-child td {
	border-bottom: none;
}
.stock-table tr:hover {
	background: #f3f4f6;
	transition: background 0.2s;
}
.up {
	color: #16a34a;
	font-weight: bold;
	letter-spacing: 0.5px;
}
.down {
	color: #dc2626;
	font-weight: bold;
	letter-spacing: 0.5px;
}
.chart-container {
	max-width: 2000px;
	margin: 32px auto 0 auto;
	background: rgba(255,255,255,0.97);
	border-radius: 18px;
	box-shadow: 0 4px 24px rgba(0,0,0,0.08);
	padding: 24px 16px 8px 16px;
}
.chart-container h3 {
	font-size: 1.2rem;
	font-weight: 600;
	color: #22223b;
	margin-bottom: 12px;
}
@media (max-width: 700px) {
	.stock-realtime, .chart-container {
		max-width: 98vw;
		padding: 10px 2vw;
	}
	.stock-table th, .stock-table td {
		padding: 7px 4px;
		font-size: 0.98rem;
	}
}
</style>
