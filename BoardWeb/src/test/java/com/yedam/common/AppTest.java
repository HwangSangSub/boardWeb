package com.yedam.common;

import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

public class AppTest {
	public static void main(String[] args) {
		ReplyService svc = new ReplyServiceImpl();
		ReplyVO rvo = new ReplyVO();
		rvo.setReplyContent("등록연습");
		rvo.setReplyer("user03");
		rvo.setBoardNo(9243);
		
		if(svc.addReply(rvo)) {
			System.out.println("등록완료!");
		}
		
//		svc.replyList(9243).forEach(System.out::println);
		System.out.println("- End -");
	}// end main
}// end class
