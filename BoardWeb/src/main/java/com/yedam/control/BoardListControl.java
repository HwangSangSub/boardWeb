package com.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.common.PageDTO;
import com.yedam.common.SearchDTO;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class BoardListControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String page = req.getParameter("page");
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");
		// 파라미터가 없으면 null로 넘어오고 그러면 1페이지를 보여주고 아니면 넘어온 페이지를 넣어주겠다.
		page = page == null ? "1" : page;
		sc = sc == null ? "" : sc;
		kw = kw == null ? "1" : kw;
		
		req.setAttribute("myName", "홍길동");
		
		SearchDTO search = new SearchDTO();
		search.setPage(Integer.parseInt(page));
		search.setSearchCondition(sc);
		search.setKeyword(kw);
		
		// 검색정보 값 넘기기
		req.setAttribute("searching", search);
		
		BoardService svc = new BoardServiceImpl();
		// 전체 조회
		List<BoardVO> list = svc.boardList(search);
		
		// 조회된 값 넘기기
		req.setAttribute("boardList", list);
		
		// paging
		int totalCnt = svc.totalCount(search);
		PageDTO paging = new PageDTO(Integer.parseInt(page), totalCnt);
		req.setAttribute("paging", paging);

		
		req.getRequestDispatcher("WEB-INF/jsp/boardList.jsp").forward(req, resp);
		
	}// end exec

}// end class
