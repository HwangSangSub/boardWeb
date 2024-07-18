package com.yedam.mapper;

import java.util.List;

import com.yedam.vo.BoardVO;

/*
 * 글목록, 등록, 수정, 삭제, 단건조회,....
 * 기능정의 -> 기능 구현은 (BoardMapper.xml) 에서 한다.
 * */
public interface BoardMapper {
	// 글목록 조회
	List<BoardVO> selectList();
	// 글 단건조회
	List<BoardVO> selectBoard(int boardNo);
	// 글 등록
	int insertBoard(BoardVO board);
	// 글 수정
	int updateBoard(BoardVO board);
	// 글 삭제
	int deleteBoard(int boardNo);
}
