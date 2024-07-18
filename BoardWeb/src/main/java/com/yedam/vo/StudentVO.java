package com.yedam.vo;

import java.util.Date;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Data
@Getter
@Setter
@ToString
public class StudentVO {
	// 필드
	private String stdNo; // std_no
	private String stdName; // std_name
	private String stdPhone; // std_phone
	private String address; // address
	private String birthDate; // birth_date >> 자바에서도 DATE타입이 있는데
	private Date creationDate; //
}
