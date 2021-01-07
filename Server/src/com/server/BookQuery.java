package com.server;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class BookQuery extends Common{

    public BookQuery() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
        String sql = "SELECT * from book where id='"+req.getParameter("id")+"'";
        String[] key = {"id", "bookname", "booktype", "author", "translator", "publisher", "publish_time", "price", "stock"};
        try {
            JSONObject list = this.executeQuery(sql, key);
            this.returnData(resp, list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
