package com.server;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class BookUpdate extends Common{
    public BookUpdate() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
        String sql="Update book set bookname=?,booktype=?,author=?,translator=?,publisher=?,publish_time=?,price=?,stock=? Where id='"+req.getParameter("id")+"'";
        String[] key = {"bookname", "booktype", "author", "translator", "publisher", "publish_time", "price", "stock"};
        try {
            JSONObject list = this.executeUpdate("Update", sql, key, req);
            this.returnData(resp, list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
