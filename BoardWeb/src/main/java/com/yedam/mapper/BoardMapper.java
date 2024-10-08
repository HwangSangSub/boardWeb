package com.yedam.mapper;

import java.util.List;

import com.yedam.common.SearchDTO;
import com.yedam.vo.BoardVO;
import com.yedam.vo.CalendarVO;

/*
 * 글목록, 등록, 수정, 삭제, 단건조회,....
 * 기능정의 -> 기능 구현은 (BoardMapper.xml) 에서 한다.
 * */
public interface BoardMapper {
	// 글목록 조회
	List<BoardVO> selectList();
	List<BoardVO> selectListPaging(SearchDTO search); // 페이지 정보 -> 5건씩 출력
	// 페이징 계산하기 위한 전체 건수.
	int selectTotalCount(SearchDTO search);
	// 글 단건조회
	BoardVO selectBoard(int boardNo);
	// 글 등록
	int insertBoard(BoardVO board);
	// 글 수정
	int updateBoard(BoardVO board);
	// 글 삭제
	int deleteBoard(int boardNo);
	
	List<CalendarVO> selectCalendarList();
	int insertCalendar(CalendarVO calendar);
	int checkCalendar(CalendarVO calendar);
	int deleteCalendar(CalendarVO calendar);
} // end interface
