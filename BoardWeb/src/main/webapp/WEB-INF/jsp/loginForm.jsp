<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<jsp:include page="../includes/header.jsp" />
<h3>로그인화면(loginForm.jsp)</h3>
<c:if test="${!empty msg}">
	<p>${msg}</p>
</c:if>
<form action="login.do">
	<table class="table">
		<tr>
			<th>아이디</th>
			<td><input class="form-control" type="text" name="id" /></td>
		</tr>
		<tr>
			<th>비밀번호</th>
			<td><input class="form-control"  type="password" name="pw" /></td>
		</tr>
		<tr>
			<td colspan="2" align="center"><input class="btn btn-primary" type="submit" value="로그인" />
			</td>
		</tr>
	</table>
</form>
<jsp:include page="../includes/footer.jsp" />