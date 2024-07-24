package com.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;
import com.yedam.mapper.StudentMapper;
import com.yedam.vo.MemberVO;

public class MemberServiceImpl implements MemberService {
	SqlSession sqlSession = DataSource.getInstance().openSession(true);
	StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);

	@Override
	public MemberVO loginCheck(String id, String pw) {
		return mapper.selectMember(id, pw);
	}// end loginCheck()

	@Override
	public List<MemberVO> selectList(String res, String order) {
		return mapper.selectList(res, order);
	}// end selectList()

//	@Override
//	public List<MemberVO> selectList(SearchDTO search) {
//		return mapper.selectListPaging(search);
//	}// end selectList()

//	@Override
//	public int totalCount(SearchDTO search) {
//		return mapper.selectTotalCount(search);
//	}// end totalCount

}// end class
