package com.yedam.service;

import java.util.List;

import com.yedam.vo.MemberVO;

public interface MemberService {
	MemberVO loginCheck(String id, String pw);
//	List<MemberVO> selectList(SearchDTO search);
	List<MemberVO> selectList(String res, String order);
//	int totalCount(SearchDTO search);
	
} // end interface
