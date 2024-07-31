<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
	google.charts.load('current', {'packages' : [ 'corechart' ]});
	
	// 통계자료를 담을 배열 정의
	let dataAry = [];
	dataAry.push(['작성자', '작성건수']);
	
	// 통계자료 요청
	fetch('countByMember.do') // 요청방식(method):'get'(따로지정안하면 get), headers: '', body:''전달될 파라미터를 넣은 헤더즈와 바디
	.then(function(result){
		return result.json(); // 문자열을 파싱하여 객체로 만들어 줌
	})
	.then(function(result){
		console.log(result);
		//통계자료를 차트의 데이터형식에 맞게 넣기
		result.forEach(member => {
			dataAry.push([member.member_name, member.member_cnt]);		
		});
		google.charts.setOnLoadCallback(drawChart);
	})
	
	function drawChart() {

		var data = google.visualization.arrayToDataTable(dataAry);

		var options = {
			title : '작성자별 작성건수'
			, pieHole: 0.4
		};

		var chart = new google.visualization.PieChart(document.getElementById('piechart'));

		chart.draw(data, options);
	}
</script>
<h3>차트......</h3>
<div id="piechart" style="width: 900px; height: 500px;"></div>
