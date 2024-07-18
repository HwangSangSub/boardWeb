package com.yedam.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.control.AddBoardControl;
import com.yedam.control.BoardListControl;

/*
 * FrontController 역할은 사용자의 모든 요청을 처리. 여기를 지나지 않으면 어떠한 홈페이지를 보여주지 않을것이다.
 * 서블릿, a.do, sample.do 의 모든 실행을 여기서 하기 위해서
 * 객체생성 -> init > service > destroy. 서블릿의 생성 주기. 
 * */
public class FrontController extends HttpServlet{
	Map<String, Control> map;
	
	public FrontController() {
		map = new HashMap<>();
	}
	@Override
	public void init(ServletConfig config) throws ServletException {
		map.put("/boardList.do", new BoardListControl());
		map.put("/addBoard.do", new AddBoardControl());
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//boardList.do - 목록 , addBoard.do - 등록, 
		String uri = req.getRequestURI(); // URL(http://localhost.BoardWeb/boardList.do) vs URI(/BoardWeb/boardList.do)
		String context = req.getContextPath(); // 프로젝트명
		String path = uri.substring(context.length()); // "/boardList.do" 
		
		System.out.println("uri : " + uri);
		System.out.println("context : " +context);
		System.out.println("path : " + path);
		
		Control sub = map.get(path); // 컨트롤 인터페이스를 가지고 있고 반드시 가상메서드를 재선언해야함.
		sub.exec(req, resp);
	}
}
