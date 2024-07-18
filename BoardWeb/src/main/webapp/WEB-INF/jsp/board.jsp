<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.yedam.vo.BoardVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp"%>
<h3>게시판 상세보기(board.jsp)</h3>
<%
BoardVO board = (BoardVO) request.getAttribute("board");
%>
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
			<button class="btn btn-primary" type="submit">수정</button>
			<button class="btn btn-danger" type="submit">삭제</button>
		</td>
	</tr>
</table>
<%@ include file="../includes/footer.jsp"%>