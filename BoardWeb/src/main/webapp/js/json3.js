/**
 * json3.js
 */
document.querySelector('div.container-fluid>div:nth-of-type(2)').remove();
document.querySelector('div.container-fluid>table').remove();

// Asynchronous Javascript And Xml (AJAX)
let xhtp = new XMLHttpRequest();
xhtp.open('get', 'data/MOCK_DATA.json'); // 특정페이지 요청.
xhtp.send();
let employees;
xhtp.onload = function(e) {
	console.log(xhtp.response);
	let json = xhtp.response;
	employees = JSON.parse(json);
	console.log(employees);

	initList();
}

function initList() {
	let target = document.querySelector('#empList');
	target.innerHTML = '';
	let selVal = document.querySelector('#searchGender').value;
	employees.forEach(emp => {
		if (selVal == 'All' || emp.gender == selVal) {
			target.appendChild(makeRow(emp));
		}
	});
}

// 사원정보 => row 생성.
function makeRow(emp = {}) {
	let fields = ['id', 'first_name', 'last_name', 'salary'];
	let tr = document.createElement('tr');
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = emp[field];
		tr.appendChild(td);
	})
	return tr;
}

document.querySelector('#searchGender').addEventListener('change', function(e) {
	initList();
});