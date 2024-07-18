<!-- 이 의미는 지시자 -->
<%@page import="com.yedam.service.StudentService"%>
<%@page import="com.yedam.service.StudentServiceImpl"%>
<%@page import="com.yedam.vo.StudentVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>studentList.jsp</title>
</head>
<body>
	<table border="2">
		<thead>
			<tr>
				<th>학번</th>
				<th>이름</th>
				<th>연락처</th>
			</tr>
		</thead>
		<tbody>
			<%
			// 자바영역
			StudentService svc = new StudentServiceImpl();
			List<StudentVO> list = svc.studentList();
			for (StudentVO svo : list) {
			%>
			<tr>
				<td><a href="student.jsp?sno=<%=svo.getStdNo()%>"> <%= svo.getStdNo() %> </a></td>
				<td><%=svo.getStdName()%></td>
				<td><%=svo.getStdPhone()%></td>
			</tr>
			<%
			}
			%>
		</tbody>
	</table>
</body>
</html>