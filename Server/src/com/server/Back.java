package com.server;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class Back extends Common{
    public Back() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
        String sql = "UPDATE borrow set if_back = '1' where reader_id='"+req.getParameter("readerId")+"' AND book_id='"+req.getParameter("bookId")+"' AND if_back = '0'";
        String[] key = {};
        String sql2 = "update book set stock = stock + 1 WHERE id='"+req.getParameter("bookId")+"'";
        String[] key2 = {};
        try {
            JSONObject list = this.executeUpdate("Update", sql, key, req);
            JSONObject list2 = this.executeUpdate("Update", sql2, key2, req);
            this.returnData(resp, list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
