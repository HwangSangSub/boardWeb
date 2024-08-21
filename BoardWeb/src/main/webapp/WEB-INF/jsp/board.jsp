<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<style>
div.reply ul {
	list-style: none;
}

div.reply span {
	display: inline-block;
}
</style>
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
		<input class="col-sm-8" id="content" />
		<button class="col-sm-3" id="addReply">댓글등록</button>
	</div>
	<!-- 목록화면 -->
	<div class="content">
		<ul id="replyList">
			<li style="display: none;"><span class="col-sm-1">글번호</span> <span
				class="col-sm-6">댓글내용</span> <span class="col-sm-2">작성자</span> <span
				class="col-sm-2"><button>삭제</button></span></li>
		</ul>
	</div>
	<!-- 댓글페이지 -->
	<div class="footer">
		<nav aria-label="...">
			<ul class="pagination justify-content-center">
			</ul>
		</nav>
	</div>
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
</script><script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="js/boardJquery.js"></script>