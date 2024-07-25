package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;

public class RemoveStudent implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String sno = req.getParameter("sno");
//		resp.getWriter().print("{\"sno\":\""+sno+"\"}");

		MemberService svc = new MemberServiceImpl();
		if (svc.removeStudent(sno)) {
			resp.getWriter().print("{\"retCode\":\"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\":\"Fail\"}");
		}

	}// end exec()

}// end class
