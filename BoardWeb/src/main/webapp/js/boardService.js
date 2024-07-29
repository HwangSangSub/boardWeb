/**
 * boardService.js
 */

const svc = {
	// 목록 조회
	replyList(param = { bno, page }, loadCallback) {
		const xhtp = new XMLHttpRequest();
		xhtp.open('get', 'replyList.do?bno=' + param.bno + '&page=' + param.page);
		xhtp.send();
		xhtp.onload = loadCallback;
	},// end of replyList
	// 등록.
	addReply(param = { bno, replyer, content }, loadCallback) {
		//console.log(param);
		const xhtp = new XMLHttpRequest();
		xhtp.open('get', 'addReply.do?bno=' + param.bno + '&content=' + param.content + '&replyer=' + param.replyer);
		xhtp.send();
		xhtp.onload = loadCallback;
	}, // end of addReply
	// 삭제
	removeReply(rno = 1, loadCallback) {
		const xhtp = new XMLHttpRequest();
		xhtp.open('get', 'removeReply.do?rno=' + rno);
		xhtp.send();
		xhtp.onload = loadCallback;
	}, // end of removeReply
	// 댓글 갯수
	pagingCount(bno = 1, loadCallback){
		const xhtp = new XMLHttpRequest();
		xhtp.open('get', 'pagingCount.do?bno=' + bno);
		xhtp.send();
		xhtp.onload = loadCallback;
		
	} // end of pagingCoutn
}// end of svc