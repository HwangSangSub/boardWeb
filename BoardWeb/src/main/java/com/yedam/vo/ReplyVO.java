package com.yedam.vo;

import java.util.Date;
import lombok.Data;

@Data
public class ReplyVO {
	//필드
	private int replyNo; // reply_no
	private String replyContent; // reply_content
	private String replyer; // replyer
	private Date replyDate; // reply_date
	private int boardNo; // board_no
}// end class
