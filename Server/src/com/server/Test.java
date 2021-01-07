package com.server;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import com.alibaba.fastjson.*;

//@WebServlet("/login")
public class Test extends HttpServlet {
    public Test(){
        super();
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException, IOException, ServletException {
//        req.setCharacterEncoding("utf-8");
//        resp.setCharacterEncoding("utf-8");
        resp.addHeader("Access-Control-Allow-Origin", "*");
//
//        String username = req.getParameter("username");
//        String password = req.getParameter("password");
//
//        String value = resp.getHeader("HTTP头中key值");
//        Enumeration e = (Enumeration) resp.getHeaderNames(); //获取所bai有的key 容器会将信息封装到durequest
//        String[] parameterValues = req.getParameterValues("hobbys");
//        System.out.println("=============================");
//        System.out.println(username);
//        System.out.println(password);
//        System.out.println(Arrays.toString(parameterValues));
//        System.out.println("=============================");
//
        System.out.println("POST");
         // 输出数据
         PrintWriter out = resp.getWriter();

//        out.println("[{\"id\":1,\"name\":\"123\"},{\"id\":2,\"name\":\"123\"}]");

        // 返回参数
        Map<String, Object> params = new HashMap<>();

        // form表单格式  表单形式可以从 ParameterMap中获取
//        if ("appliction/x-www-form-urlencoded".equalsIgnoreCase(contentType)) {
//            System.out.println(123);
//            // 获取参数
//            Map<String, String[]> parameterMap = req.getParameterMap();
//            if (parameterMap != null) {
//                for (Map.Entry<String, String[]> entry : parameterMap.entrySet()) {
//                    params.put(entry.getKey(), entry.getValue()[0]);
//                }
//            }
//        }

//        // json格式 json格式需要从request的输入流中解析获取
//        if ("application/json".equalsIgnoreCase(contentType)) {
//            // 使用 commons-io中 IOUtils 类快速获取输入流内容
//            String paramJson = IOUtils.toString(req.getInputStream(), "UTF-8");
//            Map parseObject = JSON.parseObject(paramJson, Map.class);
//            params.putAll(parseObject);
//        }

        Enumeration<String> e = req.getParameterNames();
//        while (e.hasMoreElements()) {
//            String name = e.nextElement();
//            String value = req.getParameter(name);
//            System.out.println(name + "=" + value);
//        }
        while(e.hasMoreElements()) {
            String paramName = (String)e.nextElement();
            System.out.println("paramName" + paramName);
            out.print("<tr><td>" + paramName + "</td>\n");
            String[] paramValues =
                    req.getParameterValues(paramName);
            System.out.println(paramName);
            System.out.println(Arrays.toString(paramValues));
            // 读取单个值的数据
            if (paramValues.length == 1) {
                String paramValue = paramValues[0];
                if (paramValue.length() == 0)
                    out.println("<td><i>没有值</i></td>");
                else
                    out.println("<td>" + paramValue + "</td>");
            } else {
                // 读取多个值的数据
                out.println("<td><ul>");
                for(int i=0; i < paramValues.length; i++) {
                    out.println("<li>" + paramValues[i]);
                }
                out.println("</ul></td>");
            }
            out.print("</tr>");
        }
        out.println("\n</table>\n</body></html>");
//        System.out.println(req.getParameter("username"));
//        out.println(params);
         // 完成后关闭
//         rs.close();
//         stmt.close();
//         connect.close();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        resp.setCharacterEncoding("utf-8");
        resp.addHeader("Access-Control-Allow-Origin", "*");
        String name = req.getParameter("username");
        String pwd = req.getParameter("password");



        JSONArray object = new JSONArray();

//        JSONObject obj = new JSONObject();
//        //string
//        obj.put("username",name);
//        object.add(obj);
        // 输出数据
        PrintWriter out = resp.getWriter();
//        System.out.println(JSONObject.toJSONString(object));
//        out.println(JSONObject.toJSONString(object));


        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con=java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/LibraryManagement?useUnicode=true&characterEncoding=utf8","root","12345678");
            Statement stmt=con.createStatement();
            ResultSet rst=stmt.executeQuery("select * from book");
            while(rst.next())
            {
                JSONObject obj = new JSONObject();
                //string
                obj.put("id",rst.getString("id"));
                obj.put("bookname",rst.getString("bookname"));
                obj.put("booktype",rst.getString("booktype"));
                obj.put("author",rst.getString("author"));
                object.add(obj);
            }
//            System.out.println(JSONObject.toJSONString(object));
            out.println(JSONObject.toJSONString(object));
            //关闭连接、释放资源
            rst.close();
            stmt.close();
            con.close();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
}
