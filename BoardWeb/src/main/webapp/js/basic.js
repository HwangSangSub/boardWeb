/**
 * 
 */
console.log("basic.js");
let name = "황상섭";
let address = '대구 100번지';
let age = 15;

//const myInfo = {name, address, age};
const myInfoAry = [name, address, age];

// createElement('span') => <span></span>
// innerText / innerHTML = 값.
// 부모.appendChild(자식) => <부모><자식/></부모>
makeDom();
function makeDom() {
	// for .. in ..
	myInfoAry.forEach(function(item) {
		let span = document.createElement('span');
		span.innerHTML = item + ' ';
		document.querySelector("#show").appendChild(span);
	});
}
console.log(`이름은 ${name} 주소는 ${address} 입니다. ${age > 20 ? '성년' : '미성년'}입니다. `);

console.log(typeof name);

const obj = { name: "황상섭", age: 15, myInfo: function() { return this.name + ', ' + this.age; } };

console.log(obj.name);
console.log(obj.age);
console.log(`이름은 ${obj.name}, ${obj['age']}`);
console.log(obj.myInfo());

for (let prop in obj) {
	console.log(`속성은 ${prop}이고, 값은 ${obj[prop]}`);
}

const ary = [1, 2, 3];
ary.push(4);
ary.unshift(5);
for (let num of ary) {
	console.log(`값은 ${num}`);
}
ary.forEach(function(item, idx, ary) {
	if (idx == 0 || idx == ary.length - 1) {
		console.log(item); // 값
	}
	/*
	console.log('hhhh' + item); // 값
	console.log('hhhh' + idx); // 인덱스값
	console.log('hhhh' + ary); // 배열전체
	*/
});

const friends = [
	{ name: "홍길동", address: "대구 100번지", height: 170 },
	{ name: "김민규", address: "대전 200번지", heigth: 175 },
	{ name: "이성윤", address: "인천 300번지", heigth: 180 }

];

friends.forEach(function(friend) {
	// friend정보를 한건씩 반복.
	for (let prop in friend) {
		console.log(prop + ', ' + friend[prop]);
	}
	console.log('----------------------');
});