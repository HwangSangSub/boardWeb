package com.yedam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yedam.vo.StudentVO;

public interface StudentMapper {
	// 목록 조회
	List<StudentVO> studentList();
	StudentVO selectOne(String sno);
	
	//insert, update, delete => 변경처리된 건수가 반환값으로 지정.(int)
	
	// 학생 등록
	int insertStudent(StudentVO svo);
	
	// 로그인체크
	int selectMember(@Param("id") String id, @Param("pw") String pw);
	

}// end interface
