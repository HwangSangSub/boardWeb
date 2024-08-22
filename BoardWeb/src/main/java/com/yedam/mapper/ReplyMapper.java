package com.yedam.mapper;

import java.util.List;

import com.yedam.common.SearchDTO;
import com.yedam.vo.ReplyVO;

public interface ReplyMapper {
	List<ReplyVO> selectList(int boardNo); // 댓글 조회
	List<ReplyVO> selectListPaging(int boardNo); //원본글번호, 페이지번호.
	int totalCount(int boardNo); // 댓글 갯수

	int insertReply(ReplyVO rvo); // 댓글 등록

	int deleteReply(int replyNo); // 댓글 삭제

}// end interface
