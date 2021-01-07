package com.server;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class Borrow extends Common{
    public Borrow() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
        String sql = "INSERT INTO borrow (book_id, reader_id, borrow_date, back_date, if_back) VALUES (?,?,?,?,false)";
        String[] key = {"book_id","reader_id","borrow_date","back_date"};
        String sql2 = "update book set stock = stock - 1 WHERE id='"+req.getParameter("book_id")+"'";
        String[] key2 = {};
        try {
            JSONObject list = this.executeUpdate("Insert", sql, key, req);
            JSONObject list2 = this.executeUpdate("Update", sql2, key2, req);
            this.returnData(resp, list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
