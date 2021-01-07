package com.server;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class ReaderUpdate extends Common{
    public ReaderUpdate() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
        String sql="Update reader set readername=?,readertype=?,sex=?,max_num=?,days_num=? Where id='"+req.getParameter("id")+"'";
        String[] key = {"readername", "readertype", "sex", "max_num", "days_num"};
        try {
            JSONObject list = this.executeUpdate("Update", sql, key, req);
            this.returnData(resp, list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
