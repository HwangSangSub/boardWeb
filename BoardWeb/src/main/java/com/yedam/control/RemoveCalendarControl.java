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
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.CalendarVO;

public class RemoveCalendarControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String title = req.getParameter("title");
		String start = req.getParameter("start");
		String end = req.getParameter("end");

		CalendarVO cvo = new CalendarVO();
		cvo.setTitle(title);
		cvo.setStart(start);
		cvo.setEnd(end);

		BoardService svc = new BoardServiceImpl();

		Map<String, Object> map = new HashMap<>();
		try {
			if (svc.removeCalendar(cvo)) {
				map.put("retCode", "Success"); // 성공의 의미
			} else {
				map.put("retCode", "Fail"); // 실패의 의미
			}
		} catch (Exception e) {
			map.put("retCode", "Fail"); // 실패의 의미
		}

		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(map); // 목록을 JSON으로 변환

		resp.getWriter().print(json);
	}
}
