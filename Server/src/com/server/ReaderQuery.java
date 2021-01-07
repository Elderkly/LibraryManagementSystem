package com.server;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class ReaderQuery extends Common{

    public ReaderQuery() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
        String sql = "SELECT * from reader where id='"+req.getParameter("id")+"'";
        String[] key = {"id", "readername", "readertype", "sex", "max_num", "days_num"};
        try {
            JSONObject list = this.executeQuery(sql, key);
            this.returnData(resp, list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
