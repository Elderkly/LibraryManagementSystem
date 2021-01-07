package com.server;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class BookSearchModule extends Common{
    public BookSearchModule() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
        boolean _switch = false;
        String[] selectKey = {"bookname","author","publisher","publish_time"};
        StringBuilder sql = new StringBuilder("SELECT * from book");
        String[] key = {"id", "bookname", "booktype", "author", "translator", "publisher", "publish_time", "price", "stock"};
        for (String s : selectKey) {
            String SK = req.getParameter(s);
            if (SK != null && !SK.equals("")) {
                if (!_switch) {
                    sql.append(" WHERE");
                    _switch = true;
                } else {
                    sql.append(" AND");
                }
                sql.append(s.equals("publish_time") ? " publish_time LIKE '%" + SK + "%'" : " " + s + "='" + SK + "'");
            }
        }
        try {
            JSONObject list = this.executeQuery(sql.toString(), key);
            this.returnData(resp, list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
