/**
 * json2.js
 */
document.querySelector('div.container-fluid>div:nth-of-type(2)').remove();
document.querySelector('div.container-fluid>table').remove();

let json = `[{"id":1,"first_name":"Merrill","last_name":"Pulver","email":"mpulver0@pen.io","gender":"Male","salary":4875},
{"id":2,"first_name":"Berny","last_name":"Poplee","email":"bpoplee1@mtv.com","gender":"Polygender","salary":1788},
{"id":3,"first_name":"Galina","last_name":"Symondson","email":"gsymondson2@earthlink.net","gender":"Female","salary":1964},
{"id":4,"first_name":"Luci","last_name":"Pudney","email":"lpudney3@delicious.com","gender":"Female","salary":4687},
{"id":5,"first_name":"Elka","last_name":"Bawden","email":"ebawden4@furl.net","gender":"Female","salary":1176},
{"id":6,"first_name":"Audi","last_name":"Bollands","email":"abollands5@quantcast.com","gender":"Female","salary":6590},
{"id":7,"first_name":"Tab","last_name":"Revell","email":"trevell6@com.com","gender":"Male","salary":9520},
{"id":8,"first_name":"Gabrila","last_name":"Jurick","email":"gjurick7@cnet.com","gender":"Female","salary":2493},
{"id":9,"first_name":"Meggi","last_name":"Ketcher","email":"mketcher8@senate.gov","gender":"Female","salary":2418},
{"id":10,"first_name":"Phillip","last_name":"Willox","email":"pwillox9@list-manage.com","gender":"Male","salary":1938},
{"id":11,"first_name":"Husain","last_name":"Haversum","email":"hhaversuma@census.gov","gender":"Male","salary":8596},
{"id":12,"first_name":"Hally","last_name":"Bourdon","email":"hbourdonb@cdbaby.com","gender":"Female","salary":2734},
{"id":13,"first_name":"Ricard","last_name":"Beviss","email":"rbevissc@businessinsider.com","gender":"Male","salary":8410},
{"id":14,"first_name":"Donnie","last_name":"Bakhrushin","email":"dbakhrushind@alibaba.com","gender":"Female","salary":6826},
{"id":15,"first_name":"Bucky","last_name":"Frayne","email":"bfraynee@typepad.com","gender":"Male","salary":2750},
{"id":16,"first_name":"Chloette","last_name":"Ughelli","email":"cughellif@miibeian.gov.cn","gender":"Female","salary":8447},
{"id":17,"first_name":"Kipp","last_name":"MacFadzan","email":"kmacfadzang@yellowbook.com","gender":"Female","salary":3366},
{"id":18,"first_name":"Donelle","last_name":"O'Toole","email":"dotooleh@wiley.com","gender":"Female","salary":5943},
{"id":19,"first_name":"Kearney","last_name":"Kristof","email":"kkristofi@google.it","gender":"Male","salary":3290},
{"id":20,"first_name":"Fritz","last_name":"Cashford","email":"fcashfordj@berkeley.edu","gender":"Male","salary":5205}]`;

let employees = JSON.parse(json);
console.log(employees);
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

initList();