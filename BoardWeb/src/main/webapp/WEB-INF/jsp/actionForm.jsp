<%@page import="com.yedam.vo.StudentVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri ="http://java.sun.com/jsp/jstl/core" prefix="mytag" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jsp태그연습(actionForm.jsp)</title>
</head>
<body>
	<h3>jsp태그연습(actionForm.jsp)</h3>
	<p>jsp:include > 인클루드 하는 태그</p>
	<p>jsp:forward > 다른파일을 가져오기</p>
	<%
	request.setAttribute("myName", "홍길동");
	StudentVO student = new StudentVO();
	student.setStdNo("100");
	student.setStdName("홍길동");
	request.setAttribute("student", student);
	String msg = "Hello";
	%>
	<!-- 라이브러리를 이용해서 c라고 prefix를 지정한 후 사용한다. -->
	<!-- :set var="변수명" value="변수값" -->
	<mytag:set var="msg" value="Hello2"></mytag:set>
	<mytag:set var="age" value="20" />

	<h3>Jsp Standard Tag Library(p:358)</h3>
	<p>${10 + 4}</p>
	<p>${10 > 20}</p>
	<p>${'Hello' += 'Wrold'}</p>
	<p>${10 > 5 ? '참' : '거짓'}</p>
	<p>내 이름은 ${myName}</p>
	<p>학생정보 ${student}</p>
	<p>학생의 이름은 ${student.stdName}, 학생의 번호는 ${student.stdNo}</p>
	<p>변수의 값을 넣은거는 그냥 가져올 수 없기 때문에 jstl 라이브러리로 해야한다. 4번째 줄 라이브러리를 추가한다.</p>
	<p>Msg 값은 ${msg}</p>
	<p>${age>=20 ? '성인' : '미성인'}</p>
	<mytag:if test="${age >= 20}">
		<p>성인</p>
	</mytag:if>
	<mytag:choose>
		<mytag:when test="${age>=20}">
			<p>성인</p>
		</mytag:when>
		<mytag:otherwise>
			<p>미성인</p>
		</mytag:otherwise>
	</mytag:choose>
	<mytag:forEach var="i" begin="1" end="10" step="2">
		<p>${i}</p>
	</mytag:forEach>
	<p>구구단 4단 출력</p>
	<mytag:forEach var="n" begin="1" end="9">
		<p>4 * ${n} = ${4*n}</p>
	</mytag:forEach>
</body>
</html>