package com.yedam.mapper;

import java.util.List;

import com.yedam.vo.StudentVO;

public interface StudentMapper {
	// 목록 조회
	List<StudentVO> studentList();
	StudentVO selectOne(String sno);
	
	//insert, update, delete => 변경처리된 건수가 반환값으로 지정.(int)
	
	// 학생 등록
	int insertStudent(StudentVO svo);
	
//	// 학생 수정
//	int updateStudent(StudentVO svo);
//	
//	// 학생 삭제
//	int deleteStudent(StudentVO svo);

}
