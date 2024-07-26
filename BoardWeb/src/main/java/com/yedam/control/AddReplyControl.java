package com.yedam.control;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

public class AddReplyControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8"); // 내용 중 한글이 있다면 utf-8로 변환해야함.
		String writer = req.getParameter("replyer");
		String content = req.getParameter("content");
		String bno = req.getParameter("bno");

		ReplyVO rvo = new ReplyVO();
		rvo.setReplyContent(content);
		rvo.setReplyer(writer);
		rvo.setBoardNo(Integer.parseInt(bno));
		
		Map<String, Object> map = new HashMap<>();
		
		ReplyService svc = new ReplyServiceImpl();
		//retCode:Success, retVal: ReplyVO
		try {
			if (svc.addReply(rvo)) {
				map.put("retCode", "Success"); // 성공의 의미
				map.put("retVal", rvo);
			}
		} catch (Exception e) {
			map.put("retCode", "Fail"); // 실패의 의미
			map.put("retVal", null);
		}

		Gson gson = new GsonBuilder().create();
		resp.getWriter().print(gson.toJson(map));
	}// end exec()

}// end class
