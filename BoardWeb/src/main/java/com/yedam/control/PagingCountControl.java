package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;

public class PagingCountControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8"); // 내용 중 한글이 있다면 utf-8로 변환해야함.
		
		String bno = req.getParameter("bno");

		ReplyService svc = new ReplyServiceImpl();
		
		// paging
		int totalCnt = svc.totalCount(Integer.parseInt(bno));

		resp.getWriter().print("{\"totalCount\": "+totalCnt+"}");

	}// end exec()

}// end class
