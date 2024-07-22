package com.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVO {
	private int boardNo; // board_no
	private String title; // title
	private String content; // content
	private String writer; // writer
	private Date writeDate; // write_date
	private int viewCnt; // view_cnt
	private String image; // image
}
