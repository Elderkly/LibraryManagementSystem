package com.server;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

public class Common extends HttpServlet {
    public ResultSet rst;
    public Statement stmt;
    public Connection dbConn;
    public String userName = "root";
    public String userPwd = "12345678";
    public String driverName =  "com.mysql.jdbc.Driver";
    public String dbURL = "jdbc:mysql://localhost:3306/LibraryManagement?useUnicode=true&characterEncoding=utf8&useSSL=false";
    public Common() {
        super();
    }

    //  创建数据库连接
    public void createConn() {
        try {
            Class.forName(driverName);
            dbConn = DriverManager.getConnection(dbURL, userName, userPwd);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //  公用数据库查询模块
    public JSONObject executeQuery(String sql,String[] key) throws SQLException {
        this.createConn();
        JSONObject returnJson = new JSONObject();
        JSONArray data = new JSONArray();
        returnJson.put("code",500);
        returnJson.put("data",data);
        stmt= dbConn.createStatement();
        rst= stmt.executeQuery(sql);
        while(rst.next())
        {
            returnJson.put("code",200);
            JSONObject itemData = new JSONObject();
            for (String s : key) {
                itemData.put(s, rst.getString(s));
            }
            data.add(itemData);
        }
        returnJson.put("data",data);
        this.close();
        return returnJson;
    }

    //  增 删 改
    public JSONObject executeUpdate(String E_Type, String sql, String[] key, HttpServletRequest req) throws SQLException {
        this.createConn();
        JSONObject returnJson = new JSONObject();
        returnJson.put("code", 500);
        PreparedStatement pstmt = dbConn.prepareStatement(sql);
        String Text = E_Type.equals("Update") ? "修改" : E_Type.equals("Insert") ? "插入" : "删除";
        returnJson.put("msg", Text + "失败");
        for (int i = 0; i < key.length; i++) {
            pstmt.setString(i + 1, req.getParameter(key[i]));
        }
        if(pstmt.executeUpdate() > 0){
            returnJson.put("code",200);
            returnJson.put("msg",Text + "成功");
        }
        return returnJson;
    }
    //  返回数据给前端
    public void returnData(HttpServletResponse resp, JSONObject json) throws IOException {
        PrintWriter out = resp.getWriter();
        out.println(json);
    }

    //  关闭数据库连接
    public void close() throws SQLException {
        rst.close();
        stmt.close();
        dbConn.close();
    }

    //  接收Get请求
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        resp.setCharacterEncoding("utf-8");
        resp.addHeader("Access-Control-Allow-Origin", "*");
    }
}