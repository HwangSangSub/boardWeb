package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class ModifyBoardControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String bno = req.getParameter("bno");

		BoardService svc = new BoardServiceImpl();
		// 단건 조회
		BoardVO brd = svc.getBoard(Integer.parseInt(bno));
		req.setAttribute("board", brd);

		req.getRequestDispatcher("board/modifyForm.tiles").forward(req, resp);
	}// end exec

}// end class
