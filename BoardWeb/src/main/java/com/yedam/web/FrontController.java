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
import com.yedam.control.ActionControl;
import com.yedam.control.AddBoardControl;
import com.yedam.control.AddReplyControl;
import com.yedam.control.AddStudent;
import com.yedam.control.BoardControl;
import com.yedam.control.BoardFormControl;
import com.yedam.control.BoardListControl;
import com.yedam.control.CntByMemberControl;
import com.yedam.control.DeleteBoardControl;
import com.yedam.control.GoogleChartControl;
import com.yedam.control.ImageDownLoadControl;
import com.yedam.control.LoginControl;
import com.yedam.control.LoginFormControl;
import com.yedam.control.LoginOutControl;
import com.yedam.control.MemberListControl;
import com.yedam.control.ModifyBoardControl;
import com.yedam.control.PagingCountControl;
import com.yedam.control.RemoveBoardControl;
import com.yedam.control.RemoveReplyControl;
import com.yedam.control.RemoveStudent;
import com.yedam.control.ReplyListControl;
import com.yedam.control.ScriptControl;
import com.yedam.control.StudentJsonControl;
import com.yedam.control.StudentListControl;
import com.yedam.control.UpdateBoardControl;

/*
 * FrontController 역할은 사용자의 모든 요청을 처리. 여기를 지나지 않으면 어떠한 홈페이지를 보여주지 않을것이다.
 * 서블릿, a.do, sample.do 의 모든 실행을 여기서 하기 위해서
 * 객체생성 -> init > service > destroy. 서블릿의 생성 주기. 
 * */
public class FrontController extends HttpServlet {
	Map<String, Control> map;

	public FrontController() {
		map = new HashMap<>();
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		map.put("/boardList.do", new BoardListControl());
		// 글 등록 구현 : 등록화면(boardForm.do) + DB 등록(addBoard.do) > 글목록페이지이동.
		map.put("/boardForm.do", new BoardFormControl()); // 화면
		map.put("/addBoard.do", new AddBoardControl()); // 기능
		
		// 글 상세
		map.put("/board.do", new BoardControl()); // 화면
		
		// 글 삭제
		map.put("/removeBoard.do", new RemoveBoardControl()); // 화면
		map.put("/deleteBoard.do", new DeleteBoardControl()); // 기능
		
		// 글 수정
		map.put("/modifyBoard.do", new ModifyBoardControl()); // 화면
		map.put("/updateBoard.do", new UpdateBoardControl()); // 기능
		
		//로그인
		map.put("/loginForm.do", new LoginFormControl()); // 화면
		map.put("/login.do", new LoginControl()); // 기능

		// 로그아웃
		map.put("/loginOut.do", new LoginOutControl()); // 기능
		
		// 학생목록
		map.put("/stdList.do", new StudentListControl()); // 화면
		
		// jsp 태그연습
		map.put("/action.do", new ActionControl()); // 화면
		
		// 관리자
		// 회원목록
		map.put("/memberList.do", new MemberListControl()); // 화면
		
		// 자바스크립트 연습하는 페이지 호출
		map.put("/javascript.do", new ScriptControl()); // 화면
		// 학생정보를 반환해주는 기능(json)
		map.put("/studentJson.do", new StudentJsonControl()); // 기능		
		// 학생번호를 기준으로 학생을 삭제해주는 기능
		map.put("/removeStudent.do", new RemoveStudent()); // 기능		
		// 학생을 등록해주는 기능
		map.put("/addStudent.do", new AddStudent()); // 기능
		
		// 댓글목록 조회
		map.put("/replyList.do", new ReplyListControl()); // 기능
		// 댓글등록
		map.put("/addReply.do", new AddReplyControl()); // 기능
		// 삭제
		map.put("/removeReply.do", new RemoveReplyControl()); // 기능
		// 페이징을 위한 전체 건수
		map.put("/pagingCount.do", new PagingCountControl()); // 기능
		
		// 이미지 다운로드
		map.put("/imageDownload.do", new ImageDownLoadControl()); // 기능
		
		// 작성자별 게시글 수
		map.put("/countByMember.do", new CntByMemberControl()); // 기능
		
		// 차트 페이지
		map.put("/googleChar.do", new GoogleChartControl()); // 화면
		
	}// end init

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// boardList.do - 목록 , addBoard.do - 등록,
		String uri = req.getRequestURI(); // URL(http://localhost.BoardWeb/boardList.do) vs URI(/BoardWeb/boardList.do)
		String context = req.getContextPath(); // 프로젝트명
		String path = uri.substring(context.length()); // "/boardList.do"

//		System.out.println("path : " + path);
//		System.out.println(map.get(path));

		Control sub = map.get(path); // 컨트롤 인터페이스를 가지고 있고 반드시 가상메서드를 재선언해야함.
        if (sub == null) {
            System.err.println("No matching control found for path: " + path);
            resp.sendError(HttpServletResponse.SC_NOT_FOUND, "The requested path was not found on the server.");
            return;
        }
		sub.exec(req, resp);
	}// end service
}// end class
