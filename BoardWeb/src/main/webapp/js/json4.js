/**
 * 
 */
document.querySelector('div.container-fluid>div:nth-of-type(3)').remove();
document.querySelector('div.container-fluid>table').remove();
document.querySelector('#show').remove();


// Asynchronous Javascript And Xml (AJAX)
let xhtp = new XMLHttpRequest();
xhtp.open('get', 'studentJson.do'); // 특정페이지 요청.
xhtp.send();
let students;
xhtp.onload = function(e) {
	//console.log(xhtp.response);
	let json = xhtp.response;
	students = JSON.parse(json);
	//console.log(employees);

	initList();
}

function initList() {
	let target = document.querySelector('#stdList');
	target.innerHTML = '';
	students.forEach(emp => {
		target.appendChild(makeRow(emp));
	});
}

// 사원정보 => row 생성.
function makeRow(emp = {}) {
	let fields = ['stdNo', 'stdName', 'stdPhone'];
	let tr = document.createElement('tr');
	tr.setAttribute('data-sno', emp.stdNo);
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = emp[field];
		tr.appendChild(td);
	})
	// 삭제버튼
	td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('class', 'btn btn-danger');
	btn.addEventListener('click', deleteRowFnc);
	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	return tr;
}

function deleteRowFnc(e) {
	let tr = e.target.parentElement.parentElement;
	let sno = tr.firstChild.innerText;
	sno = tr.dataset.sno;
	const delHtp = new XMLHttpRequest();
	delHtp.open('get', 'removeStudent.do?sno=' + sno);
	delHtp.send();
	delHtp.onload = function(e) {
		let result = JSON.parse(delHtp.responseText);
		if (result.retCode == 'Success') {
			alert('성공!');
			tr.remove();
		} else if (result.retCode == 'Fail') {
			alert("관리자에게 문의하세요!");
		}
	}
}
// 버튼 이벤트 추가하기!!!!!!!!
document.querySelector('#addBtn').addEventListener('click', insertStdFnc);
function insertStdFnc(e) {

	let sno = document.querySelector("#sno").value;
	let sname = document.querySelector("#sname").value;
	let phone = document.querySelector("#phone").value;

	if (!sno || !sname || !phone) {
		alert("값을 입력하세요.");
		return;
	}
	const insHtp = new XMLHttpRequest();
	insHtp.open('get', 'addStudent.do?sno=' + sno + '&sname=' + sname + '&phone=' + phone);
	insHtp.send();
	insHtp.onload = function(e) {
		let result = JSON.parse(insHtp.responseText);
		if (result.retCode == 'Success') {
			alert('성공!');
			let tr = makeRow(result.retVal);
			document.querySelector('#stdList').appendChild(tr);
		} else if (result.retCode == 'Fail') {
			alert("관리자에게 문의하세요!");
		}
	}

}


