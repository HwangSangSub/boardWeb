/**
 * board.js
 */
let page = 1; // 아래쪽에서 댓글의 페이지를 지정.
// 댓글등록 버튼에 클릭 이벤트 등록
document.querySelector("#addReply").addEventListener('click', function(e) {
	let content = document.querySelector('#content').value;
	if (!replyer || !content) {
		alert('필수입력항목을 확인하세요.!');
		return;
	}
	let parm = { bno, replyer, content };
	svc.addReply(parm, function() {
		// 등록완료 => 화면에 등록된 글 추가.
		// console.log(this.responseText);
		let result = JSON.parse(this.responseText);
		if (result.retCode == 'Success') {
			page = 1;
			showPage();
		}
	});
});

svc.replyList({ bno, page }, function() {
	let result = JSON.parse(this.responseText);
	result.forEach(reply => {
		replyList.appendChild(makeRow(reply));
	});

	// 실제 데이터... 출력.
	svc.pagingCount(bno, createPageList);
});

// reply => row 생성
function makeRow(reply = {}) {
	let cloned = document.querySelector('div.reply>div.content li').cloneNode(true);
	cloned.style.display = 'block';
	cloned.setAttribute('data-rno', reply.replyNo);
	cloned.querySelector('span:nth-of-type(1)').innerText = reply.replyNo;
	cloned.querySelector('span:nth-of-type(2)').innerText = reply.replyContent;
	cloned.querySelector('span:nth-of-type(3)').innerText = reply.replyer;
	cloned.querySelector('button').addEventListener('click', deleteReplyFnc);
	return cloned;
}

// 댓글 삭제 이벤트
function deleteReplyFnc(e) {
	let li = e.target.parentElement.parentElement;
	let rno = li.dataset.rno;
	svc.removeReply(rno, function() {
		// 등록완료 => 화면에 등록된 글 추가.
		// console.log(this.responseText);
		let result = JSON.parse(this.responseText);
		if (result.retCode == 'Success') {
			document.querySelector('li[data-rno="' + rno + '" ]').remove();
			showPage();
			alert('삭제성공!!');
			//li.remove();
		} else {
			alert('삭제실패!!');
		}
	});
}

// 페이지 a 태그 생성
function createPageList(event) {
	let result = JSON.parse(this.responseText);
	let totalCnt = result.totalCount;
	// console.log("totalCnt : " + totalCnt);
	let startPage, endPage; // 현재페이지를 기준으로 계산한 첫페이지 번호 ~ 마지막 페이지 번호.
	let next, prev; // 이전, 이후 체크하는 변수
	let realEnd = Math.ceil(totalCnt / 5);
	// console.log("realEnd : " + realEnd);

	endPage = Math.ceil(page / 10) * 10;
	// console.log("endPage : " + endPage);

	startPage = endPage - 9;
	// console.log("startPage : " + startPage);

	endPage = endPage > realEnd ? realEnd : endPage;
	// console.log("endPage : " + endPage);

	// 삭제 후 현재 페이지의 내용이 다 삭제되면 새로운 마지막 페이지 불러오기!
	if (realEnd < page) {
		page = realEnd;
		showPage();
	}

	prev = startPage > 1;
	// console.log("prev : " + prev);

	next = endPage < realEnd ? true : false;
	// console.log("next : " + next);

	document.querySelector('ul.pagination').innerHTML = '';

	// 이전 10페이지 여부
	let li = document.createElement("li");
	li.className = 'page-item';
	if (prev) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', startPage - 1);
		// aTag.href = 'board.do?bno=' + bno + '&page=' + startPage - 1;
		aTag.className = 'page-link';
		aTag.href = '#';
		aTag.innerHTML = 'Previous';
		li.appendChild(aTag);
	} else {
		li.classList.add('disabled');
		let spanTag = document.createElement('span');
		spanTag.className = 'page-link';
		spanTag.innerHTML = 'Previous';
		li.appendChild(spanTag);
	}
	document.querySelector('ul.pagination').appendChild(li);

	// 10개 출력
	for (let p = startPage; p <= endPage; p++) {
		let li = document.createElement("li");
		li.className = 'page-item';
		if (page == p) {
			li.classList.add('active');
			li.setAttribute('aria-current', 'page');
			let spanTag = document.createElement('span');
			spanTag.className = 'page-link';
			spanTag.innerHTML = p;
			li.appendChild(spanTag);
		} else {
			let aTag = document.createElement('a');
			aTag.setAttribute('data-page', p);
			aTag.className = 'page-link';
			// aTag.href = 'board.do?bno=' + bno + '&page=' + p;
			aTag.href = '#';
			aTag.innerHTML = p;
			li.appendChild(aTag);
		}
		document.querySelector('ul.pagination').appendChild(li);

	}

	// 이후 10페이지 여부
	li = document.createElement("li");
	li.className = 'page-item';
	if (next) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', endPage + 1);
		// aTag.href = 'board.do?bno=' + bno + '&page=' + endPage + 1;
		aTag.className = 'page-link';
		aTag.href = '#';
		aTag.innerHTML = 'Next';
		li.appendChild(aTag);
	} else {
		li.classList.add('disabled');
		let spanTag = document.createElement('span');
		spanTag.className = 'page-link';
		spanTag.innerHTML = 'Next';
		li.appendChild(spanTag);
	}
	document.querySelector('ul.pagination').appendChild(li);
	// a 태그 이벤트 등록
	pageMove();
}

// paging영역의 a 태그를 클릭하면...
function pageMove() {
	document.querySelectorAll('div.reply ul.pagination a').forEach(item => {
		item.addEventListener('click', function(e) {
			page = item.dataset.page;
			console.log(page);
			svc.replyList({ bno, page }, function() {
				showPage();
			});
		});
	});
}

function showPage() {
	replyList.querySelectorAll('li').forEach((li, idx) => {
		if (idx != 0) {
			li.remove();
		}
	});
	svc.replyList({ bno, page }, function() {
		let result = JSON.parse(this.responseText);
		result.forEach(reply => {
			replyList.appendChild(makeRow(reply));
		});

		// 실제 데이터... 출력.
		svc.pagingCount(bno, createPageList);
	});
}