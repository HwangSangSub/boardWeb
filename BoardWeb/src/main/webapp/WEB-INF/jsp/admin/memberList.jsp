<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<h3>회원목록...</h3>
<!-- 검색기능 -->
<div>
	<form action="">
		<div class="row">
			<div class="col-sm-4">
				<!-- select 목록 -->
				<select name="searchCondition" class="form-control">
					<option value="">선택하세요.</option>
					<option value="ID"
						${searching.searchCondition eq 'ID' ? 'selected' : ''}>아이디</option>
					<option value="NM"
						${searching.searchCondition eq 'NM' ? 'selected' : ''}>이름</option>
					<option value="IDNM"
						${searching.searchCondition eq 'IDNM' ? 'selected' : ''}>제목&작성자</option>
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
<div class="card mb-4">
	<div class="card-header">
		<i class="fas fa-table me-1"></i> 회원 목록
	</div>
	<div class="card-body">
		<table id="datatablesSimple">
			<thead>
				<tr>
					<th>Name</th>
					<th>Position</th>
					<th>Office</th>
					<th>Age</th>
					<th>Start date</th>
					<th>Salary</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Position</th>
					<th>Age</th>
					<th>Start date</th>
					<th>Salary</th>
				</tr>
			</tfoot>
			<tbody>
				<c:forEach var="member" items="${memberList}">
					<tr>
						<td>${member.memberId}</td>
						<td>${member.memberNm}</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</div>
<table class="table">
	<thead>
		<tr>
			<th>아이디</th>
			<th>이름</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="member" items="${memberList}">
			<tr>
				<td>${member.memberId}</td>
				<td>${member.memberNm}</td>
			</tr>
		</c:forEach>
	</tbody>
</table>
<!-- 페이진부분. -->
<nav aria-label="Page navigation example">
	<ul class="pagination justify-content-center">
		<c:if test="${paging.prev}">
			<li class="page-item"><a class="page-link"
				href="memberList.do?page=${paging.startPage-1}&searchCondition=${searching.searchCondition}&keyword=${searching.keyword}"
				aria-label="Previous"> <span aria-hidden="true">&laquo;</span>
			</a></li>
		</c:if>
		<c:forEach var="p" begin="${paging.startPage}"
			end="${paging.endPage }">
			<c:choose>
				<c:when test="${paging.page == p}">
					<li class="page-item active"><span class="page-link">${p}</span></li>
				</c:when>
				<c:otherwise>
					<li class="page-item"><a class="page-link"
						href="memberList.do?page=${p}&searchCondition=${searching.searchCondition}&keyword=${searching.keyword}">
							${p}</a></li>
				</c:otherwise>
			</c:choose>
		</c:forEach>
		<c:if test="${paging.next}">
			<li class="page-item"><a class="page-link"
				href="memberList.do?page=${paging.endPage+1}&searchCondition=${searching.searchCondition}&keyword=${searching.keyword}"
				aria-label="Next"> <span aria-hidden="true">&raquo;</span>
			</a></li>
		</c:if>
	</ul>
</nav>