package com.server;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class ReaderSearchModule extends Common{
    public ReaderSearchModule() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
        boolean _switch = false;
        String[] selectKey = {"readername","sex","readertype"};
        StringBuilder sql = new StringBuilder("SELECT * from reader");
        String[] key = {"id", "readername", "readertype", "sex", "max_num", "days_num"};
        for (String s : selectKey) {
            String SK = req.getParameter(s);
            if (SK != null && !SK.equals("")) {
                if (!_switch) {
                    sql.append(" WHERE");
                    _switch = true;
                } else {
                    sql.append(" AND");
                }
                sql.append(" ").append(s).append("='").append(SK).append("'");
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
