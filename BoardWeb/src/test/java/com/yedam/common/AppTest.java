package com.yedam.common;

import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;

public class AppTest {
	public static void main(String[] args) {
		
		BoardService svc = new BoardServiceImpl();
		
		// 전체 조회
//		svc.boardList().forEach(brd -> System.out.println(brd));
		svc.boardList().forEach(System.out::println); // 위의 명령문을 줄인것.
		System.out.println("- End -");
		
//		SqlSession sqlSession = DataSource.getInstance().openSession(true);
//		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
//		
//		BoardVO brd = new BoardVO();
//		brd.setTitle("메퍼테스트3333");
//		brd.setContent("조건이 제대로 되는지222");
//		brd.setWriter("newbie");
//		brd.setBoardNo(6);
//
//		// 단건조회
//		System.out.println(mapper.selectBoard(5));
		
		// 삭제
//		if(mapper.deleteBoard(6) == 1) {
//			System.out.println("OK");
//		}
		
		// 수정
//		if(mapper.updateBoard(brd) == 1) {
//			System.out.println("OK");
//		}
		
		// 등록
//		if(mapper.insertBoard(brd) == 1) {
//			System.out.println("OK");
//		}
		
		// 목록조회
//		mapper.selectList().forEach(board -> {System.out.println(board.toString());});
//		
//		System.out.println("- End -");
	}// end main
}// end class
