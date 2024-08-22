package com.yedam.control;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.common.SearchDTO;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

public class ReplyListControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8"); // 내용 중 한글이 있다면 utf-8로 변환해야함.
		
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");
//		req.setAttribute("bnoReply", bno);
		page = page == null ? "1" : page;
		
		SearchDTO search = new SearchDTO();
		//search.setPage(Integer.parseInt(page));
		search.setBno(Integer.parseInt(bno));

		ReplyService svc = new ReplyServiceImpl();
		
		List<ReplyVO> list = svc.replyList(Integer.parseInt(bno));
		
		Map<String, Object> map = new HashMap<>();
		map.put("data", list);

		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(map); // 목록을 JSON으로 변환

		resp.getWriter().print(json);

	}// end exec()

}// end class
