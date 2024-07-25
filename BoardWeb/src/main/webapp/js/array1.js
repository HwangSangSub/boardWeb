/**
 * array1.js
 */
document.querySelector('#delBtn').addEventListener('click', delFnc);

function delFnc(e){
	document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]:checked').forEach(function(item) {
		item.parentElement.parentElement.remove();
	});
}

// thead에 있는 체크박스 이벤트 등록.
document.querySelector('div.container-fluid>table>thead input[type="checkbox"]').addEventListener('change', changeFnc);
function changeFnc(e) {
	// 찾으려는 대상
	document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]').forEach(function(item) {
		item.checked = e.target.checked;
	});
}// end of changeFnc

function checkFnc(e){
	let chkTCnt = document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]').length;
	let chkCnt = document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]:checked').length;
	let totalCheck = document.querySelector('div.container-fluid>table>thead input[type="checkbox"]');
	if(chkTCnt == chkCnt){
		totalCheck.checked = true;
	} else {
		totalCheck.checked = false;
	}
}

document.querySelector("#addBtn").addEventListener('click', addBtnFnc);
// addBtnFnc 이벤트 핸들러.
function addBtnFnc(e) {
	let name = document.querySelector("#fname").value;
	let address = document.querySelector("#faddress").value;
	let height = document.querySelector("#fheight").value;

	if (!name || !address || !height) {
		alert("값을 입력하세요.");
		return;
	}

	let friend = { name, address, height };

	let tr = makeTr(friend);

	document.querySelector("#list").appendChild(tr);


	document.querySelector("#fname").value = '';
	document.querySelector("#faddress").value = '';
	document.querySelector("#fheight").value = '';

	document.querySelector("#fname").focus();
}
document.querySelector("#modBtn").addEventListener('click', modBtnFnc);
// modBtnFnc 이벤트 핸들러
function modBtnFnc(e) {
	let name = document.querySelector("#fname").value;
	let address = document.querySelector("#faddress").value;
	let height = document.querySelector("#fheight").value;

	if (!name || !address || !height) {
		alert("값을 입력하세요.");
		return;
	}

	document.querySelectorAll("#list tr").forEach(function(tr) {
		console.log(tr.children[0].innerHTML);
		if (tr.children[0].innerHTML == name) {
			tr.children[1].innerHTML = address;
			tr.children[2].innerHTML = height;
		}
	});
}
const friends = [
	{ name: "홍길동", address: "대구 100번지", height: 170 },
	{ name: "김민규", address: "대전 200번지", heigth: 175 },
	{ name: "이성윤", address: "인천 300번지", heigth: 180 }

];
makeList();
function makeList() {
	friends.forEach(function(friend) {

		let tr = makeTr(friend);

		document.querySelector("#list").appendChild(tr);
	});
}
function detailCallback(e) {
	console.log(e.target.parentElement);
	let tr = e.target.parentElement; // 이벤트를 대상으로 tr 영역을 찾아야함.
	//this : 호출되는 시점에 따라 대상이 다르지만  > 1) 함수영역에서는 window 2) 이벤트에서는 이벤트 대상 3) 객체에서는 객체.
	tr = this;
	document.querySelector("#fname").value = tr.children[0].innerHTML;
	document.querySelector("#faddress").value = tr.children[1].innerHTML;
	document.querySelector("#fheight").value = tr.children[2].innerHTML;

}//end detailCallback()

// friend => tr 생성
function makeTr(friend = { name: 'Hong', address: 'Seoul', height: 170 }) {

	// tr 만드는 부분
	let tr = document.createElement('tr');
	tr.addEventListener('click', detailCallback);
	// tr.addEventListener('mouseover', detailCallback);
	for (let prop in friend) {
		let td = document.createElement('td');
		td.innerHTML = friend[prop];
		tr.appendChild(td);
	}
	// 삭제버튼
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('class', 'btn btn-danger');
	btn.addEventListener('click', function(e) {
		console.log(e);
		e.stopPropagation(); // click : button > td > tr > table > ......
		e.target.parentElement.parentElement.remove();
	})
	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	td = document.createElement('td');
	let inp = document.createElement('input');
	inp.setAttribute('type', 'checkbox');
	inp.addEventListener('change', checkFnc);
	td.appendChild(inp);
	tr.appendChild(td);

	return tr;
}
