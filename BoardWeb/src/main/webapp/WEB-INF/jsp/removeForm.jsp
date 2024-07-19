<%@page import="com.yedam.vo.BoardVO"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="../includes/header.jsp"%>
<h3>삭제화면(removeForm.jsp)</h3>
<%
BoardVO board = (BoardVO) request.getAttribute("board");
%>
<form action="deleteBoard.do">
	<input type="hidden" name="bno" value="<%=board.getBoardNo()%>" />
	<table class="table">
	<%
	Date date = board.getWriteDate();
	// SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
	String writeDate = format.format(date);
	%>
		<tr>
			<th>글번호</th>
			<td><%=board.getBoardNo()%></td>
			<th>조회수</th>
			<td><%=board.getViewCnt()%>개</td>
		</tr>
		<tr>
			<th>제목</th>
			<td colspan="3"><%=board.getTitle()%></td>
		</tr>
		<tr>
			<th>내용</th>
			<td colspan="3"><%=board.getContent()%></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td colspan="3"><%=board.getWriter()%></td>
		</tr>
		<tr>
			<th>작성일시</th>
			<td colspan="3"><%=writeDate%></td>
		</tr>
		<tr>
			<td colspan="4" align="center">
				<button class="btn btn-primary" type="button">수정</button> 
				<input class="btn btn-danger" type="submit" value="삭제">
			</td>
		</tr>
	</table>
</form>
<%@ include file="../includes/footer.jsp"%>