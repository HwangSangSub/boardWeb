<%@page import="com.yedam.vo.BoardVO"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<jsp:include page="../includes/header.jsp"></jsp:include>
<h3>삭제화면(removeForm.jsp)</h3>
<form action="deleteBoard.do">
	<input type="hidden" name="bno" value="${board.boardNo}" />
	<input type="hidden" name="page" value="${page}" />
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
			<th>작성일시</th>
			<td colspan="3">${board.writeDate}</td>
		</tr>
		<tr>
			<td colspan="4" align="center">
				<button class="btn btn-primary" type="button">수정</button> 
				<input class="btn btn-danger" type="submit" value="삭제">
			</td>
		</tr>
	</table>
</form>
<jsp:include page="../includes/footer.jsp"></jsp:include>
