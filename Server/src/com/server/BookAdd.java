package com.server;

import com.alibaba.fastjson.JSONObject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class BookAdd extends Common {
    public BookAdd() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
        String sql="INSERT INTO book (id,bookname,booktype,author,translator,publisher,publish_time,price,stock) values(?,?,?,?,?,?,?,?,?)";
        String[] key = {"id", "bookname", "booktype", "author", "translator", "publisher", "publish_time", "price", "stock"};
        try {
            JSONObject list = this.executeUpdate("Insert", sql, key, req);
            this.returnData(resp, list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}







