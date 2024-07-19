package com.yedam.service;

import java.util.List;

import com.yedam.vo.StudentVO;

public interface StudentService {
	List<StudentVO> studentList();
	StudentVO selectOne(String sno);
}// end interface
