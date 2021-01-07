package com.server;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class UpdatePassword extends Common{
    public UpdatePassword() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
        String sql = "UPDATE user set password='"+req.getParameter("password")+"' WHERE id='"+req.getParameter("id")+"'";
        String[] key = {};
        try {
            JSONObject list = this.executeUpdate("Update", sql, key, req);
            this.returnData(resp, list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
