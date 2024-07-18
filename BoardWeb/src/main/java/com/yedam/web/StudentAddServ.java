package com.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;
import com.yedam.mapper.StudentMapper;
import com.yedam.vo.StudentVO;

@WebServlet("/StudentAddServ")
public class StudentAddServ extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public StudentAddServ() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// sno=S2024-13&sname=테스트3&sphone=010-1111-1111&sbirth=2024-07-17
		// get방식 파라미터 가져오기
		String sno = request.getParameter("sno"); // sno=S2024-02
		String sname = request.getParameter("sname"); // sname=테스트3
		String sphone = request.getParameter("sphone"); // sphone=010-1111-1111
		String sbirth = request.getParameter("sbirth"); // sbirth=2024-07-17

		// 받아온 값 배열에 넣기
		StudentVO svo = new StudentVO();
		svo.setStdNo(sno);
		svo.setStdName(sname);
		svo.setStdPhone(sphone);
		svo.setBirthDate(sbirth);

		// DB 넣기
		SqlSession sqlSession = DataSource.getInstance().openSession(true);
		StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);

		mapper.insertStudent(svo);

		response.sendRedirect("SampleServlet");

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
