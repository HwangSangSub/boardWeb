/**
 * 
 */
document.querySelector("#addBtn").addEventListener('click', function(e) {
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
});

document.querySelector("#modBtn").addEventListener('click', function(e) {
	let name = document.querySelector("#fname").value;
	let address = document.querySelector("#faddress").value;
	let height = document.querySelector("#fheight").value;

	if (!name || !address || !height) {
		alert("값을 입력하세요.");
		return;
	}
	
	document.querySelectorAll("#list tr").forEach(function(tr){
		console.log(tr.children[0].innerTEXT);
		if(tr.children[0].innerHTML == name){
			tr.children[1].innerHTML = address;
			tr.children[2].innerHTML = height;
		}
	});
	
});

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

// friend => tr 생성
function makeTr(friend = { name: 'Hong', address: 'Seoul', height: 170 }) {

	function detailCallback(e) {
		// console.log(e);
		// let tr = e.target.parentElement;
		document.querySelector("#fname").value = tr.children[0].innerHTML;
		document.querySelector("#faddress").value = tr.children[1].innerHTML;
		document.querySelector("#fheight").value = tr.children[2].innerHTML;

	}//end detailCallback()

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
	btn.setAttribute('class','btn btn-danger');
	btn.addEventListener('click', function(e) {
		e.target.parentElement.parentElement.remove();
	})
	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	td = document.createElement('td');
	let inp = document.createElement('input');
	inp.setAttribute('type', 'checkbox');
	td.appendChild(inp);
	tr.appendChild(td);

	return tr;
}
