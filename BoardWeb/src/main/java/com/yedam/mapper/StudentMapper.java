package com.yedam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yedam.common.SearchDTO;
import com.yedam.vo.MemberVO;
import com.yedam.vo.StudentVO;

public interface StudentMapper {
	// 목록 조회
	List<StudentVO> studentList();
	StudentVO selectOne(String sno);
	
	//insert, update, delete => 변경처리된 건수가 반환값으로 지정.(int)
	
	// 학생 등록
	int insertStudent(StudentVO svo);
	
	// 로그인체크
	MemberVO selectMember(@Param("id") String id, @Param("pw") String pw);

	// 페이지 정보 -> 5건씩 출력
	List<MemberVO> selectList(@Param("res") String res, @Param("odr") String order); 
//	List<MemberVO> selectListPaging(SearchDTO search); 
	// 접근권한 리턴타입 이름( 매개변수 );
	// 접근권한 
	// int String double....
	// MemberVO List<MemberVO>
	// 이름 니멋대로
	// (매개변수) > 
	
	// 페이징 계산하기 위한 전체 건수.
	int selectTotalCount(SearchDTO search);
	
	int deleteStudent(String sno);
	

}// end interface
