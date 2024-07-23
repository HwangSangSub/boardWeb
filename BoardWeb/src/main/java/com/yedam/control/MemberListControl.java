package com.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.common.PageDTO;
import com.yedam.common.SearchDTO;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

public class MemberListControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String page = req.getParameter("page");
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");
		String order = req.getParameter("order");
		// 파라미터가 없으면 null로 넘어오고 그러면 1페이지를 보여주고 아니면 넘어온 페이지를 넣어주겠다.
		page = page == null ? "1" : page;
		sc = sc == null ? "" : sc;
		kw = kw == null ? "" : kw;

		req.setAttribute("myName", "홍길동");

		SearchDTO search = new SearchDTO();
		search.setPage(Integer.parseInt(page));
		search.setSearchCondition(sc);
		search.setKeyword(kw);

		// 검색정보 값 넘기기
		req.setAttribute("searching", search);

		MemberService svc = new MemberServiceImpl();
		// 전체 조회
		List<MemberVO> list = svc.selectList(search);

		// 조회된 값 넘기기
		req.setAttribute("memberList", list);

		// paging
		int totalCnt = svc.totalCount(search);
		PageDTO paging = new PageDTO(Integer.parseInt(page), totalCnt);
		req.setAttribute("paging", paging);

		req.getRequestDispatcher("admin/memberList.tiles").forward(req, resp);
	}

}
