/**
 *  basic.js
 */
// jquery객체 VS. dom 객체
//document.addEventListener('DOMContentLoaded', fucntion(){
$(document).ready(function() {
	let obj = $('#show');
	//obj = document.getElementById('show');
	obj.html('Hello');
	console.log(obj);
	obj = $('.show');
	
	$(obj[0]).html('Hello');
	obj[0].innerHTML = 'Hello';
	
	$(obj[1]).html('World');
	obj.eq(1).html('World');
	console.log(obj);

	//jquery 객체 생성
	$('#show').append($('<button />').html('삭제')); // <button>삭제</button>	
});
