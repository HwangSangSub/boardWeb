<%@page import="com.yedam.common.SearchDTO"%>
<%@page import="com.yedam.common.PageDTO"%>
<%@page import="com.yedam.vo.BoardVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<jsp:include page="../includes/header.jsp"></jsp:include>
<h3>게시글목록(boardList.jsp)</h3>
<!-- 검색기능 -->
<div>
	<form action="">
		<div class="row">
			<div class="col-sm-4">
				<!-- select 목록 -->
				<select name="searchCondition" class="form-control">
					<option value="">선택하세요.</option>
					<option value="T"  ${searching.searchCondition eq 'T' ? 'selected' : ''}>제목</option>
					<option value="W"	${searching.searchCondition eq 'W' ? 'selected' : ''}>작성자</option>
					<option value="TW" ${searching.searchCondition eq 'TW' ? 'selected' : ''}>제목&작성자</option>
				</select>
			</div>
			<div class="col-sm-6">
				<input type="text" name="keyword" class="form-control"
					value="${searching.keyword}">
			</div>
			<div class="col-sm-2">
				<input type="submit" value="조회" class="btn btn-primary">
			</div>
		</div>
	</form>
</div>
<table class="table">
	<thead>
		<tr>
			<th>글번호</th>
			<th>제 목</th>
			<th>작성자</th>
			<th>작성일시</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="board" items="${boardList}">
			<tr>
				<td>${board.boardNo}</td>
				<td><a href="board.do?bno=${board.boardNo}&page=${paging.page}">${board.title}</a></td>
				<td>${board.writer}</td>
				<td>${board.writeDate}</td>
			</tr>
		</c:forEach>
	</tbody>
</table>
<!-- 페이진부분. -->
<nav aria-label="Page navigation example">
	<ul class="pagination justify-content-center">
		<c:if test="${paging.prev}">
			<li class="page-item"><a class="page-link"
				href="boardList.do?page=${paging.startPage-1}&searchCondition=${searching.searchCondition}&keyword=${searching.keyword}"
				aria-label="Previous"> <span aria-hidden="true">&laquo;</span>
			</a></li>
		</c:if>
		<c:forEach var="p" begin="${paging.startPage}" end="${paging.endPage }">
			<c:choose>
				<c:when test="${paging.page == p}">
					<li class="page-item active"><span class="page-link">${p}</span></li>
				</c:when>
				<c:otherwise>
					<li class="page-item"><a class="page-link"
					href="boardList.do?page=${p}&searchCondition=${searching.searchCondition}&keyword=${searching.keyword}">
						${p}</a></li>
				</c:otherwise>
			</c:choose>
		</c:forEach>
		<c:if test="${paging.next}">
			<li class="page-item"><a class="page-link"
				href="boardList.do?page=${paging.endPage+1}&searchCondition=${searching.searchCondition}&keyword=${searching.keyword}"
				aria-label="Next"> <span aria-hidden="true">&raquo;</span>
			</a></li>
		</c:if>
	</ul>
</nav>
<jsp:include page="../includes/footer.jsp"></jsp:include>
