package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class ScriptControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//tiles를 사용했기 때문에 tiles 를 만들어야 한다.
		req.getRequestDispatcher("html/index.tiles").forward(req, resp);

	} // end exec()

}// end class
