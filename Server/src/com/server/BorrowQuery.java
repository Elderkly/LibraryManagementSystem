package com.server;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class BorrowQuery extends Common{
    public BorrowQuery() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
        String sql = "SELECT book.bookname,book.author,book.publisher,book.publish_time,book.price,book.stock, reader.days_num, reader.max_num,reader.readertype,reader.readername from book, reader where book.id = '"+req.getParameter("bookId")+"' AND reader.id = '"+req.getParameter("readerId")+"'";
        String[] key = {"bookname", "author", "publisher", "publish_time", "price", "stock", "days_num", "max_num", "readertype", "readername"};
        String sql2 = "SELECT back_date, COUNT(*) as borrow_this_book from borrow where reader_id = '"+req.getParameter("readerId")+"' AND book_id = '"+req.getParameter("bookId")+"' AND if_back = '0' GROUP BY back_date";
        String[] key2 = {"borrow_this_book","back_date"};
        String sql3 = "SELECT COUNT(*) as borrow_num from borrow where borrow.reader_id = '"+req.getParameter("readerId")+"' AND if_back = '0'";
        String[] key3 = {"borrow_num"};
        System.out.println("BorrowQuery");
        try {
            JSONObject list = this.executeQuery(sql, key);
            JSONObject list2 = this.executeQuery(sql2, key2);
            JSONObject list3 = this.executeQuery(sql3, key3);
            JSONObject list1Data = (JSONObject) list.getJSONArray("data").get(0);
            if (list2.getJSONArray("data").size() > 0) {
                JSONObject list2Data = (JSONObject) list2.getJSONArray("data").get(0);
                String borrow_this_book = list2Data.getString("borrow_this_book");
                String back_date = list2Data.getString("back_date");
                list1Data.put("back_date",back_date);
                list1Data.put("borrow_this_book",borrow_this_book);
            }
            if (list3.getJSONArray("data").size() > 0) {
                JSONObject list3Data = (JSONObject) list3.getJSONArray("data").get(0);
                String borrow_num = list3Data.getString("borrow_num");
                list1Data.put("borrow_num", borrow_num);
            }
            JSONArray newData = new JSONArray();
            newData.add(list1Data);
            list.put("data",newData);
            this.returnData(resp, list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
