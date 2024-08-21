/**
 
boardJquery.js
jquery 용 Ajax 사용.
*/
console.log('jquery start');
let page = 1;
$.ajax({
	url: 'replyList.do', // 서버 url 호출.
	data: { bno: bno, page: page },// 서버에 전달한 parameter.
	dataType: 'json', // 서버로부터 전달받은 content의 타입.
	success: function(result) {
		$.each(result, function(i, elem) {
			let temp = makeRow(elem);
			$('#replyList').append(temp);
		})
	},
	error: function(err) {
		console.error(err);
	}
})// end of ajax

function deleteRow() {
	// 삭제하기 위한 ajax.
	let li = $(this).parent().parent();
	let rno = li.data('rno');
	$.ajax({
		url: 'removeReply.do',
		data: { rno: rno },
		dataType: 'json',
		success: function(result) {
			if (result.retCode == 'Success') {
				li.remove();
			} else {
				alert('처리중 예외 발생.')
			}
		},
		error: function(err) {
			console.log(err)

		}
	});
} // end of 

$('#addReply').on('click', function() {
	let content = $('#content').val();
	$.ajax({
		url: 'addReply.do', // 서버 url 호출.
		data: { bno: bno, content: content, replyer: replyer },// 서버에 전달한 parameter.
		dataType: 'json', // 서버로부터 전달받은 content의 타입.
		success: function(result) {
			if (result.retCode == "Success") {
				let elem = result.retVal;
				let temp = makeRow(elem);
				$('#replyList').append(temp);
				$('#content').val('');
			}
		},
		error: function(err) {
			console.error(err);
		}
	})// end of ajax
});
function makeRow(elem) {
	let temp = $('#replyList li:eq(0)').clone();
	temp.attr('data-rno', elem.replyNo);
	temp.css('display', 'block'); // 속성(attribute) 변경.
	temp.find('span:eq(0)').html(elem.replyNo);
	temp.find('span').eq(1).html(elem.replyContent);
	temp.find('span').eq(2).html(elem.replyer);
	// 버튼생성을 새로 ..
	let btn = $('<button>삭제1</button>').on('click', deleteRow)
	temp.find('span').eq(3).html(btn);
	return temp;
}