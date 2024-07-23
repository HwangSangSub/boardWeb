package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

public class LoginControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// id, pw 파라미터 => 성공이면 게시글목록 실패하면 로그인 화면으로 이동
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		
		MemberService svc = new MemberServiceImpl();
		MemberVO mem = svc.loginCheck(id, pw);
		if(mem == null) {
			// 삭제 실패 시 글 삭제화면으로 이동
			//msg를 "아이디와 비번을 확인하세요!";
			req.setAttribute("msg", "아이디와 비번을 확인하세요!");
			req.getRequestDispatcher("board/loginForm.tiles").forward(req, resp);
			return;
		}// end if
		
		// 세션객체 (attribute)
		HttpSession session = req.getSession();
		session.setAttribute("logid", id);
		session.setMaxInactiveInterval(30 * 60); // 객체 유지 시간 (0은 무한대로 세션을 가지고 있겠다라는 의미)
		// 삭제 성공 시 글 목록으로 이동
		if(mem.getResponsibility().equals("User")) {
			resp.sendRedirect("boardList.do");
		} else if(mem.getResponsibility().equals("Admin")) {
			resp.sendRedirect("memberList.do");
		} else {
			System.out.println("권한이없음");
		}

	} // end exec()

}// end class
