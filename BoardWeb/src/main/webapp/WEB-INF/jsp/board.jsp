<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet"
	href="https://cdn.datatables.net/2.1.4/css/dataTables.dataTables.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdn.datatables.net/2.1.4/js/dataTables.js"></script>
<h3>게시판 상세보기(board.jsp)</h3>
<form action="removeBoard.do">
	<input type="hidden" name="bno" value="${board.boardNo}" /> <input
		type="hidden" name="page" value="${page}" />
	<table class="table">
		<tr>
			<th>글번호</th>
			<td>${board.boardNo}</td>
			<th>조회수</th>
			<td>${board.viewCnt}개</td>
		</tr>
		<tr>
			<th>제목</th>
			<td colspan="3">${board.title}</td>
		</tr>
		<tr>
			<th>내용</th>
			<td colspan="3">${board.content}</td>
		</tr>
		<tr>
			<th>작성자</th>
			<td colspan="3">${board.writer}</td>
		</tr>
		<tr>
			<th>이미지</th>
			<td colspan="3"><c:choose>
					<c:when test="${empty board.image}">
						<p>등록된 이미지 없음.</p>
					</c:when>
					<c:otherwise>
						<img width="250px" src="images/${board.image}" />
					</c:otherwise>
				</c:choose></td>
		</tr>
		<tr>
			<th>작성일시</th>
			<td colspan="3">${board.writeDate }</td>
		</tr>
		<tr>
			<td colspan="4" align="center"><c:choose>
					<c:when test="${logid == board.writer}">
						<button class="btn btn-primary" type="button">수정화면</button>
						<input class="btn btn-danger" type="submit" value="삭제화면">
					</c:when>
					<c:otherwise>
						<button class="btn btn-primary" disabled type="button">수정화면</button>
						<input class="btn btn-danger" disabled type="submit" value="삭제화면">
					</c:otherwise>
				</c:choose></td>
		</tr>
	</table>
</form>
<!-- 댓글관련.. -->
<div class="container reply">
	<!-- 등록화면 -->
	<div class="header">
		<input class="col-sm-7" id="content" />
		<button class="col-sm-2 btn btn-primary" id="addReply">댓글등록</button>
		<button class="col-sm-2 btn btn-danger" id="removeReply">댓글삭제</button>
	</div>
	<table id="example" class="display" style="width: 100%">
		<thead>
			<tr>
				<th>댓글번호</th>
				<th>댓글내용</th>
				<th>작성자</th>
				<th>작성일시</th>
				<th>삭제</th>
			</tr>
		</thead>
		<tfoot>
			<tr>
				<th>댓글번호</th>
				<th>댓글내용</th>
				<th>작성자</th>
				<th>작성일시</th>
				<th>삭제</th>
			</tr>
		</tfoot>
	</table>
</div>
<script>
	const bno = "${board.boardNo}";
	const replyer = "${logid}";
	// > : 바로 자식 , table button : 공백은 테이블의 자식 중 button을 찾는 것.
	document
			.querySelector('form>table button')
			.addEventListener(
					'click',
					function(e) {
						location.href = 'modifyBoard.do?bno=${board.boardNo}&page=${page}';
					});
	let table = $('#example').DataTable({
		ajax : 'replyList.do?bno=' + bno,
		columns : [ {
			data : 'replyNo'
		}, {
			data : 'replyContent'
		}, {
			data : 'replyer'
		}, {
			data : 'replyDate'
		} ],
		lengthMenu : [ [ 5, 10, 20, -1 ], [ 5, 10, 20, 'All' ] ],
		columnDefs: [
	        {
	            render: function (data, type, row) {
	                return '<button class="btn btn-danger" onclick="deleteRow('+row.replyNo+')">삭제</button>';
	            },
	            targets: 4
	        }
	    ]
	});

	// 댓글 등록 이벤트
	$('#addReply').on('click', function() {
		let content = $('#content').val();
		$.ajax({
			url : 'addReply.do',
			data : {
				bno : bno,
				content : content,
				replyer : replyer
			},
			dataType : 'json',
			success : function(result) {
				let rs = result.retVal;
				table.row.add({
					'replyNo' : rs.replyNo,
					'replyContent' : rs.replyContent,
					'replyer' : rs.replyer,
					'replyDate' : new Date()
				}).draw(false);
			},
			error : function(err) {
				console.error(err);
			}
		});
	});

	// 댓글 선택 이벤트
	$('#example tbody').on('click', 'tr', function() {
		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
		} else {
			table.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
		}
	});

	// 댓글 삭제 이벤트
	$('#removeReply').click(function() {
		let replyNo = table.$('tr.selected').children('td:eq(0)').text();
		if(!replyNo){
			alert("삭제할 댓글을 선택하세요.");
			retrun;
		}
		deleteRow(replyNo);
	});
	function deleteRow(replyNo){
		$.ajax({
			url : 'removeReply.do',
			data : {
				rno : replyNo
			},
			dataType : 'json',
			success : function(result) {
				if(result.retCode == "Success"){
					alert("삭제완료!!");					
					table.row('.selected').remove().draw(false);
				}else {
					alert("삭제할 댓글이 없습니다!");					
				}
			},
			error : function(err) {
				console.error(err);
			}
		});
	}
</script>
