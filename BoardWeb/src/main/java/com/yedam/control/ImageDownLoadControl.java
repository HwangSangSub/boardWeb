package com.yedam.control;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.net.URL;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yedam.common.Control;

public class ImageDownLoadControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		// {"retCode" : "Success"}
		ServletInputStream sis = req.getInputStream();
		ObjectMapper mapper = new ObjectMapper();
		// [{"imgSrc":"url", "prdName" : "상품"}, ....}] => 자바객체로 변경하는 작업이 필요함.
		List<Map<String, String>> list = mapper.readValue(sis, new TypeReference<List<Map<String, String>>>() {});
		String dml = "";
		for (Map<String, String> map : list) {
			String imgSrc = map.get("imgSrc");
			String prdName = map.get("prdName");
			String prodCode = map.get("prodCode");
			String prodPrice = map.get("prodPrice"); // 12,600 => 12600
			System.out.println(prodPrice);
			prodPrice = prodPrice.replace(",", "");
//			fileCreate(imgSrc, prdName);
			dml += dataCreate(prodCode, prdName, prodPrice);
			System.out.println(dml);
			System.out.println(imgSrc + ", " + prdName);
		}
		
		System.out.println(dml);
		
		PrintWriter out = resp.getWriter();
		out.print("{\"retCode\" : \"Success\"}");
	}// end exec()

	String dataCreate(String prodCode, String prodName, String prodPrice) {
		String sql = "INSERT INTO tbl_products(prod_code, prod_name, prod_price, prod_image) " 
				+ "VALUES('" + prodCode + "', '" + prodName + "', " + Integer.parseInt(prodPrice) + ", '" + prodName + ".jpg');";
		return sql;
	}

	// 파일생성하기
	void fileCreate(String imgSrc, String prdName) {

		String srcPath = imgSrc;
		String name = prdName.replaceAll("/", "").replace("*", "");
		try {
			URL url = new URL(srcPath);
			InputStream is = url.openStream();
			BufferedInputStream bis = new BufferedInputStream(is);

			// 출력스트림 만들기
			FileOutputStream fos = new FileOutputStream("c:/temp/" + name + ".jpg");
			BufferedOutputStream bos = new BufferedOutputStream(fos);

			while (true) {
				int read = bis.read();
				if (read == -1) {
					break;
				}
				bos.write(read);
			}
			bos.flush();
			bos.close();
			fos.flush();
			fos.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("완료!");
	}

}// end class
