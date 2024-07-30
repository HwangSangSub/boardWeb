package com.yedam.stream;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.Reader;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class WriterEx1 {

	public static void main(String[] args) {
		reader1();
	}// end main()
	
	static void reader2() {

		// 기본스트림 - 보조스트림 - 추가적인 기능 수행.
		List<MemberVO> members = new ArrayList<>();
		try {
			FileReader fr = new FileReader("c:/temp/file3.txt");
			BufferedReader br = new BufferedReader(fr);
			String str = "";
			String[] strAry = null;
			while (true) {
				str = br.readLine(); // 한라인 읽기

				if (str == null) {
					break;
				}

				// 파일의 정보를 활용 -> 컬렉션 생성.
				strAry = str.split(" ");

				MemberVO member = new MemberVO();
				member.setMemberNo(Integer.parseInt(strAry[0]));
				member.setMemberName(strAry[1]);
				member.setPoint(Integer.parseInt(strAry[2]));
				members.add(member);

//				System.out.println(str);
			}
			br.close();
			fr.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
		members.forEach(System.out::println);
		System.out.println("완료!!");
	}

	static void reader1() {
		// Reader <- FileReader
		String path = WriterEx1. class.getResource("sample.txt").getPath();
		System.out.println(path);
		try {
			Reader reader = new FileReader("c:/temp/file2.dat");
			while (true) {
				int read = reader.read(); // read라는 메소드는 한 문자씩 읽어오기 때문에 char로 받는데 이걸 int로 받으면 문자의 숫자타입으로 나옴
				System.out.print(read + " -> " + (char) read); // byte(1바이트) char(2바이트) short(2바이트) int(4바이트) long(8바이트)

				if (read == -1) {
					break;
				}
			}
			reader.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("완료!!");

	}

	static void writer1() {
		// 문자기반스트림 Writer <- FileWriter
		Scanner scn = new Scanner(System.in);
		String str = "";
		try {
			Writer writer = new FileWriter("c:/temp/file2.dat");
			while (true) {
				System.out.print("입력>>");
				str = scn.nextLine();
				if (str.equals("quit")) {
					break;
				}
				writer.write(str + "\n");
			}
			writer.flush();
			writer.close();
			scn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("완료!!");
	}// end writer1()
}// end class
