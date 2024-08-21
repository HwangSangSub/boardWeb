<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>exe1.jsp</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$('#addBtn').on('click', function() {
			let btn = $('<button>삭제</button>').on('click', function(){
				console.log(this);
				$(this).parent().hide(1000);
			});
			let userVal = $('#userVal').val();
			let newElem = $('<li />').html(userVal+" ");
			newElem.append(btn);
			$('#list').append(newElem);
		});
		// 홀수
		$('#oddBtn').on('click', function(){
			// 인덱스 기준이기때문에 even을 사용
			$('#list li:even').css('background','red');
			//$('#list li:eq(1)').css('background','red');
		});
		// 짝수
		$('#evenBtn').on('click', function(){
			// 인덱스 기준이기떄문에 odd를 사용함
			$('#list li:odd').css('background','blue');
			//$('#list li:gt(1)').css('background','blue');
		});
		// 3번째 이후
		$('#btn3').on('click', function(){
			$('#list li:gt(2)').css('background','blue');
		});
		// 4번째 이전
		$('#btn4').on('click', function(){
			$('#list li:lt(3)').css('background','red');
		});
		// 특정한 텍스트가 있는 태그를 가져올때 
		$('#appleBtn4').on('click', function(){
			$('#list li:contains(사과4)').css('background','red');
		});
		// 특정한 태그가 있는거를 가져올때
		$('#spanBtn').on('click', function(){
			$('#list li:has(span)').css('background','blue');
		});
		// span태그를 가지고 있는 않는 경우 
		$('#notSpanBtn').on('click', function(){
			$('#list li:not(:has(span))').css('background','green');
		});
	});
</script>
</head>
<body>
	입력:
	<input id="userVal" type="text">
	<!-- val() : input 값을 가져온다는 의미 -->
	<button id="addBtn">추가</button>
	<button id="oddBtn">홀수</button>
	<button id="evenBtn">짝수</button>
	<button id="btn3">3번째이후</button>
	<button id="btn4">4번째이전</button>
	<button id="appleBtn4">사과4</button>
	<button id="spanBtn">span태그가 있는것</button>
	<button id="notSpanBtn">span태그가 없는것</button>
	<div id="show">
		<ul id="list">
			<li>사과1 <span>span태그</span><button>삭제</button></li>
			<li>사과2 <button>삭제</button></li>
			<li>사과3 <button>삭제</button></li>
			<li>사과4 <button>삭제</button></li>
			<li>사과5 <button>삭제</button></li>
			<li>사과6 <button>삭제</button></li>
		</ul>
	</div>
</body>
</html>