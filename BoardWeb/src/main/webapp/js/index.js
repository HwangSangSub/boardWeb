/**
 * index.js
 */
//let json = "[{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0014/A00000014269519ko.jpg?l=ko\",\"prdName\":\"오쏘몰 이뮨 멀티비타민&amp;미네랄 7입 (1주분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018908729ko.jpg?l=ko\",\"prdName\":\"[3만원 이상 구매시 보조배터리 증정]아임비타 멀티비타민 이뮨샷 12+2입 증정기획 (14일분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018726802ko.jpg?l=ko\",\"prdName\":\"고려은단 메가도스C 비타민C 3000mg 30포\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017509207ko.jpg?l=ko\",\"prdName\":\"비타바움 멀티비타민 플러스 브이 컴플렉스 15 (30병입) (1개월분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/B00000020402505ko.jpg?l=ko\",\"prdName\":\"GNM 프리미엄 비타민D 4000IU 90정 1병 (총 3개월분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/B00000017046225ko.jpg?l=ko\",\"prdName\":\"[이민정비타민]리즈랩 바이알 이뮨 플러스 30입 (30일분x1세트)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016473602ko.jpg?l=ko\",\"prdName\":\"고려은단 비타민C1000 이지+비타민D 120정 (60일분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0011/A00000011214909ko.jpg?l=ko\",\"prdName\":\"네이처메이드 액티브 데일리 멀티 포 우먼 120정 (2개월분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016657404ko.jpg?l=ko\",\"prdName\":\"고려은단 멀티비타민 올인원 30정 (30일분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018309901ko.jpg?l=ko\",\"prdName\":\"프레스샷 올인원 토탈 영양앰플 기획세트 20개입 (20일분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/B00000020399505ko.jpg?l=ko\",\"prdName\":\"GNM 올인원 뉴트리션 멀티비타민 칼슘마그네슘 1박스(1개월분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018921613ko.jpg?l=ko\",\"prdName\":\"[슈야&amp;토야] 닥터브라이언 복숭아맛 비타민C&amp;D 3000 100+15구미 기획 (38일분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019893104ko.jpg?l=ko\",\"prdName\":\"얼라이브 비타B 에너지 구미 (90구미)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0015/A00000015921203ko.jpg?l=ko\",\"prdName\":\"세노비스 트리플러스 90캡슐(45일분) 맨,우먼 택1\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0011/A00000011214810ko.jpg?l=ko\",\"prdName\":\"네이처메이드 액티브 데일리 멀티 포 맨 120정 (2개월분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018630701ko.jpg?l=ko\",\"prdName\":\"비타그란 비타민C 1000 300정 (10개월분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018103302ko.jpg?l=ko\",\"prdName\":\"프레스샷 올인원 토탈 영양 앰플 10개입 (10일분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018937212ko.jpg?l=ko\",\"prdName\":\"마그랩 포 에너지 글루콘산마그네슘 25ml*10+2입 선물세트\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016473801ko.jpg?l=ko\",\"prdName\":\"고려은단 비타민C 골드플러스 120정 (120일분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020580607ko.jpg?l=ko\",\"prdName\":\"닥터브라이언 피치레몬맛구미 멀티 비타민 100구미 (33일분) 슈아콜라보 기획\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020141806ko.jpg?l=ko\",\"prdName\":\"메디트리 이뮨 원샷 올인원 멀티비타민 7입(1주분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020239701ko.jpg?l=ko\",\"prdName\":\"고려은단 멀티비타민 이뮨샷 6병\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0010/A00000010985102ko.jpg?l=ko\",\"prdName\":\"비타하임 멀티비타민 20정 (20일분)\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020267703ko.jpg?l=ko\",\"prdName\":\"마이니 부스터 비타민 1입(1일분)\"}]";
let json = "[{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0014/A00000014269519ko.jpg?l=ko\",\"prdName\":\"오쏘몰 이뮨 멀티비타민&amp;미네랄 7입 (1주분)\",\"prodCode\":\"A000000142695001\",\"prodPrice\":\"34,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018908729ko.jpg?l=ko\",\"prdName\":\"[3만원 이상 구매시 보조배터리 증정]아임비타 멀티비타민 이뮨샷 12+2입 증정기획 (14일분)\",\"prodCode\":\"A000000189087003\",\"prodPrice\":\"31,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018726802ko.jpg?l=ko\",\"prdName\":\"고려은단 메가도스C 비타민C 3000mg 30포\",\"prodCode\":\"A000000187268001\",\"prodPrice\":\"11,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017509207ko.jpg?l=ko\",\"prdName\":\"비타바움 멀티비타민 플러스 브이 컴플렉스 15 (30병입) (1개월분)\",\"prodCode\":\"A000000175092001\",\"prodPrice\":\"96,810\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/B00000020402505ko.jpg?l=ko\",\"prdName\":\"GNM 프리미엄 비타민D 4000IU 90정 1병 (총 3개월분)\",\"prodCode\":\"B000000204025001\",\"prodPrice\":\"10,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/B00000017046225ko.jpg?l=ko\",\"prdName\":\"[이민정비타민]리즈랩 바이알 이뮨 플러스 30입 (30일분x1세트)\",\"prodCode\":\"B000000170462001\",\"prodPrice\":\"69,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016473602ko.jpg?l=ko\",\"prdName\":\"고려은단 비타민C1000 이지+비타민D 120정 (60일분)\",\"prodCode\":\"A000000164736001\",\"prodPrice\":\"10,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0011/A00000011214909ko.jpg?l=ko\",\"prdName\":\"네이처메이드 액티브 데일리 멀티 포 우먼 120정 (2개월분)\",\"prodCode\":\"A000000112149001\",\"prodPrice\":\"28,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016657404ko.jpg?l=ko\",\"prdName\":\"고려은단 멀티비타민 올인원 30정 (30일분)\",\"prodCode\":\"A000000166574001\",\"prodPrice\":\"14,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018309901ko.jpg?l=ko\",\"prdName\":\"프레스샷 올인원 토탈 영양앰플 기획세트 20개입 (20일분)\",\"prodCode\":\"A000000183099001\",\"prodPrice\":\"51,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/B00000020399505ko.jpg?l=ko\",\"prdName\":\"GNM 올인원 뉴트리션 멀티비타민 칼슘마그네슘 1박스(1개월분)\",\"prodCode\":\"B000000203995001\",\"prodPrice\":\"39,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018921613ko.jpg?l=ko\",\"prdName\":\"[슈야&amp;토야] 닥터브라이언 복숭아맛 비타민C&amp;D 3000 100+15구미 기획 (38일분)\",\"prodCode\":\"A000000189216001\",\"prodPrice\":\"13,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019893104ko.jpg?l=ko\",\"prdName\":\"얼라이브 비타B 에너지 구미 (90구미)\",\"prodCode\":\"A000000198931001\",\"prodPrice\":\"33,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0015/A00000015921203ko.jpg?l=ko\",\"prdName\":\"세노비스 트리플러스 90캡슐(45일분) 맨,우먼 택1\",\"prodCode\":\"A000000159212002\",\"prodPrice\":\"28,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0011/A00000011214810ko.jpg?l=ko\",\"prdName\":\"네이처메이드 액티브 데일리 멀티 포 맨 120정 (2개월분)\",\"prodCode\":\"A000000112148001\",\"prodPrice\":\"28,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018630701ko.jpg?l=ko\",\"prdName\":\"비타그란 비타민C 1000 300정 (10개월분)\",\"prodCode\":\"A000000186307001\",\"prodPrice\":\"27,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018103302ko.jpg?l=ko\",\"prdName\":\"프레스샷 올인원 토탈 영양 앰플 10개입 (10일분)\",\"prodCode\":\"A000000181033001\",\"prodPrice\":\"25,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018937212ko.jpg?l=ko\",\"prdName\":\"마그랩 포 에너지 글루콘산마그네슘 25ml*10+2입 선물세트\",\"prodCode\":\"A000000189372002\",\"prodPrice\":\"23,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016473801ko.jpg?l=ko\",\"prdName\":\"고려은단 비타민C 골드플러스 120정 (120일분)\",\"prodCode\":\"A000000164738001\",\"prodPrice\":\"19,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020580607ko.jpg?l=ko\",\"prdName\":\"닥터브라이언 피치레몬맛구미 멀티 비타민 100구미 (33일분) 슈아콜라보 기획\",\"prodCode\":\"A000000205806001\",\"prodPrice\":\"18,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020141806ko.jpg?l=ko\",\"prdName\":\"메디트리 이뮨 원샷 올인원 멀티비타민 7입(1주분)\",\"prodCode\":\"A000000201418001\",\"prodPrice\":\"17,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020239701ko.jpg?l=ko\",\"prdName\":\"고려은단 멀티비타민 이뮨샷 6병\",\"prodCode\":\"A000000202397001\",\"prodPrice\":\"14,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0010/A00000010985102ko.jpg?l=ko\",\"prdName\":\"비타하임 멀티비타민 20정 (20일분)\",\"prodCode\":\"A000000109851001\",\"prodPrice\":\"3,500\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020267703ko.jpg?l=ko\",\"prdName\":\"마이니 부스터 비타민 1입(1일분)\",\"prodCode\":\"A000000202677001\",\"prodPrice\":\"6,300\"}]";
let url = "imageDownload.do";
let optionObj = {
	method: 'post',
	headers: {
		'Content-Type': 'application/json'
	},
	body: json
}
document.querySelector('#uploadBtn').onclick = function(e) {
	fetch(url, optionObj) // promise객체, then() - 정상일 경우, catch() - 오류날 경우
		.then(function(result) {
			console.log(result); // Response객체. 
			return result.json(); // json 문자열 형태로 반환.
		})
		.then(function(result) {
			console.log(result);
		})
		.catch(function(err) {
			console.log(err);
		});
}

//접종센터 정보.
let centerAry = [];
// console.log('1', centerAry);
url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=rXicZatXZQ3ZgSrMZ%2FZAQjAAMiAt5ycMepK1cgqxz0E38RthTMHFE%2B%2FKuKdLPX15%2Ban5sX%2BJAos5mHtUFnErrg%3D%3D';

let arrayFunc = result => {

	document.querySelector('tbody').innerHTML = '';
	// console.log(result);
	centerAry = result.data;
	// console.log('2', centerAry);

	// forEach, map, filter, reduce.
	let selCenterVal = document.querySelector('#selectCenter').value;

	// filter : 담아온 값을 새로운 배열에 넣는다.
	let newAry = centerAry.filter(center => center.sido == selCenterVal);

	// console.log(newAry);

	let field = ['id', 'centerName', 'address', 'phoneNumber'];
	newAry.forEach(center => {
		let tr = document.createElement('tr');
		tr.addEventListener('click', function(e) {
			// location.href = 'map.jsp?lat=' + center.lat + '&lng=' + center.lng;
			window.open('map.jsp?lat=' + center.lat + '&lng=' + center.lng);
		});
		for (let prop of field) {
			let td = document.createElement('td');
			td.innerHTML = center[prop];
			tr.append(td);
		}
		document.querySelector('tbody').append(tr);
	});
} // end arrayFunc()

document.querySelector('#selectCenter').addEventListener('change', function(e) {
	fetch(url) // ajax
		.then(result => result.json())
		.then(arrayFunc)
		.catch(err => console.error('에러=>', err));
});
	
fetch(url) // ajax
	.then(result => result.json())
	.then(arrayFunc)
	.catch(err => console.error('에러=>', err));

// console.log('3', centerAry);