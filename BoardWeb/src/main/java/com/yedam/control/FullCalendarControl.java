package com.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.CalendarVO;

public class FullCalendarControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");

		BoardService svc = new BoardServiceImpl();
		// 전체 조회
		List<CalendarVO> list = svc.calendarList();
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list); // 목록을 JSON으로 변환

		resp.getWriter().print(json);
		// resp.getWriter().print("[{\"title\":\"Sample\",\"start\":\"2024-08-05\"},{\"title\":\"회의\",\"start\":\"2024-08-21T13:00:00\",\"end\":\"2024-08-21T18:00:00\"}]");

	}
}
