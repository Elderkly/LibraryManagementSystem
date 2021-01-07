package com.server;

import com.alibaba.fastjson.JSONObject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class Login extends Common {
    public Login(){
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req,resp);
        String name = req.getParameter("username");
        String pwd = req.getParameter("password");
        String sql = "SELECT * from `user` WHERE username='"+name+"' and password='"+pwd+"'";
        String[] key = {"username","id","is_admin"};
        try {
            JSONObject list = this.executeQuery(sql, key);
            this.returnData(resp, list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
