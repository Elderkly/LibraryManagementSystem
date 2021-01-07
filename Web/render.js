const render = {
    box: $('.fixedBox'),
    append(html) {
        this.box.innerHTML += html
        this.show()
    },
    show() {
        this.box.className += ' showFixedBox'
    },
    hidden() {
        this.box.className = 'fixedBox'
        this.box.innerHTML = '<div class="background" onclick="render.hidden()"></div>'
    },
    renderAddBook() {
        const html = `
            <div class="content_items">
            <div class="header">添加图书</div>
            <form action='#' onsubmit="addBook()" >
                <div class="content_box">
                    <div>
                        <span>图书编号：</span>
                        <input type="text" id="id">
                    </div>
                    <div>
                        <span>图书名称：</span>
                        <input type="text" id="bookname">
                    </div>
                    <div>
                        <span>图书类别：</span>
                        <select id="booktype">
                            <option value ="文学">文学</option>
                            <option value ="科学">科学</option>
                            <option value="自然">自然</option>
                            <option value="社会">社会</option>
                        </select>
                    </div>
                    <div>
                        <span>图书作者：</span>
                        <input type="text" id="author">
                    </div>
                    <div>
                        <span>译者&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp：</span>
                        <input type="text" id="translator">
                    </div>
                    <div>
                        <span>出版社&nbsp&nbsp&nbsp：</span>
                        <input type="text" id="publisher">
                    </div>
                    <div>
                        <span>出版时间：</span>
                        <input type="text" id="publish_time">
                    </div>
                    <div>
                        <span>定价&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp：</span>
                        <input type="text" id="price">
                    </div>
                    <div>
                        <span>库存数量：</span>
                        <input type="text" id="stock">
                    </div>
                </div>
                <div class="button_box">
                    <input type="submit" value="保存">
                    <input type="button" value="关闭" onclick="render.hidden()">
                </div>
            </form>
        </div>
        `
        this.append(html)
    },
    renderUpdateBook() {
        const html = `
            <div class="content_items">
            <div class="header">修改图书</div>
            <div class="search">
                <div>
                    <span>图书编号：</span>
                    <input type="text" class="search_input">
                </div>
                <div onclick="searchBook()">查询</div>
            </div>
            <form action='#' onsubmit="updateBook()" id="updateBook">
                <div class="content_box">
                    <div>
                        <span>图书编号：</span>
                        <input type="text" id="id" disabled>
                    </div>
                    <div>
                        <span>图书名称：</span>
                        <input type="text" id="bookname">
                    </div>
                    <div>
                        <span>图书类别：</span>
                        <select id="booktype">
                            <option value ="文学">文学</option>
                            <option value ="科学">科学</option>
                            <option value="自然">自然</option>
                            <option value="社会">社会</option>
                        </select>
                    </div>
                    <div>
                        <span>图书作者：</span>
                        <input type="text" id="author">
                    </div>
                    <div>
                        <span>译者&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp：</span>
                        <input type="text" id="translator">
                    </div>
                    <div>
                        <span>出版社&nbsp&nbsp&nbsp：</span>
                        <input type="text" id="publisher">
                    </div>
                    <div>
                        <span>出版时间：</span>
                        <input type="text" id="publish_time">
                    </div>
                    <div>
                        <span>定价&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp：</span>
                        <input type="text" id="price">
                    </div>
                    <div>
                        <span>库存数量：</span>
                        <input type="text" id="stock">
                    </div>
                </div>
                <div class="button_box">
                    <input type="submit" value="保存">
                    <input type="button" value="关闭" onclick="render.hidden()">
                </div>
            </form>
        </div>
        `
        this.append(html)
    },
    renderDeleteBook() {
        const html = `
            <div class="content_items">
            <div class="header">删除图书</div>
            <div class="search">
                <div>
                    <span>图书编号：</span>
                    <input type="text" class="search_input">
                </div>
                <div onclick="searchBook()">查询</div>
            </div>
            <form action='#' onsubmit="deleteBook()" id="updateBook">
                <div class="content_box">
                    <div>
                        <span>图书编号：</span>
                        <input type="text" id="id" disabled>
                    </div>
                    <div>
                        <span>图书名称：</span>
                        <input type="text" id="bookname">
                    </div>
                    <div>
                        <span>图书类别：</span>
                        <select id="booktype">
                            <option value ="文学">文学</option>
                            <option value ="科学">科学</option>
                            <option value="自然">自然</option>
                            <option value="社会">社会</option>
                        </select>
                    </div>
                    <div>
                        <span>图书作者：</span>
                        <input type="text" id="author">
                    </div>
                    <div>
                        <span>译者&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp：</span>
                        <input type="text" id="translator">
                    </div>
                    <div>
                        <span>出版社&nbsp&nbsp&nbsp：</span>
                        <input type="text" id="publisher">
                    </div>
                    <div>
                        <span>出版时间：</span>
                        <input type="text" id="publish_time">
                    </div>
                    <div>
                        <span>定价&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp：</span>
                        <input type="text" id="price">
                    </div>
                    <div>
                        <span>库存数量：</span>
                        <input type="text" id="stock">
                    </div>
                </div>
                <div class="button_box">
                    <input type="submit" value="删除">
                    <input type="button" value="关闭" onclick="render.hidden()">
                </div>
            </form>
        </div>
        `
        this.append(html)
    },
    renderBorrowBook() {
        const html = `
            <div class="content_items">
            <div class="header">借阅图书</div>
            <div class="search borrow_book_search">
                <div>
                    <span>图书编号：</span>
                    <input type="text" class="search_book_number">
                </div>
                <div>
                    <span>读者编号：</span>
                    <input type="text" class="search_reader_number">
                </div>
                <div onclick="searchBorrowData()">查询</div>
            </div>
            <div class="book_data_items"> 
                <p>--------------------图书信息--------------------</p>
                <div> 
                    <div class="items_l"> 
                        <p>图书名称：<span class="borrow_bookname"></span></p>
                        <p>出版社：<span class="borrow_publisher"></span></p>
                        <p>定价：<span class="borrow_price"></span></p>
                    </div>
                    <div class="items_r"> 
                        <p>作者：<span class="borrow_author"></span></p>
                        <p>出版时间：<span class="borrow_publish_time"></span></p>
                        <p>库存数量：<span class="borrow_stock"></span></p>
                    </div>
                </div>
            </div>
            <div class="book_data_items"> 
                <p>--------------------读者信息--------------------</p>
                <div> 
                    <div class="items_l"> 
                        <p>读者姓名：<span class="borrow_readername"></span></p>
                        <p>最大可借数：<span class="borrow_max_num"></span></p>
                    </div>
                    <div class="items_r"> 
                        <p>读者类型：<span class="borrow_readertype"></span></p>
                        <p>最大可借天数：<span class="borrow_days_num"></span></p>
                    </div>
                </div>

            </div>
            <div class="book_data_items"> 
                <p>--------------------借阅信息--------------------</p>
                <div> 
                    <div class="items_l"> 
                        <p>该读者已借阅图书数量：<span class="borrow_borrow_num"></span></p>
                        <p>该读者是否可借所选图书：<span class="borrow_switch"></span></p>
                        <p>借阅日期：<span>${formatDate()}</span></p>
                    </div>
                </div>
            </div>
            <div class="button_box">
                <input type="button" value="借出" class="borrow_btn">
                <input type="button" value="关闭" onclick="render.hidden()">
            </div>
        </div>
        `
        this.append(html)
    },
    renderBackBook() {
        const html = `
            <div class="content_items">
            <div class="header">还回图书</div>
            <div class="search borrow_book_search">
                <div>
                    <span>图书编号：</span>
                    <input type="text" class="search_book_number">
                </div>
                <div>
                    <span>读者编号：</span>
                    <input type="text" class="search_reader_number">
                </div>
                <div onclick="searchBorrowData()">查询</div>
            </div>
            <div class="book_data_items"> 
                <p>--------------------图书信息--------------------</p>
                <div> 
                    <div class="items_l"> 
                        <p>图书名称：<span class="borrow_bookname"></span></p>
                        <p>出版社：<span class="borrow_publisher"></span></p>
                        <p>定价：<span class="borrow_price"></span></p>
                    </div>
                    <div class="items_r"> 
                        <p>作者：<span class="borrow_author"></span></p>
                        <p>出版时间：<span class="borrow_publish_time"></span></p>
                        <p>库存数量：<span class="borrow_stock"></span></p>
                    </div>
                </div>
            </div>
            <div class="book_data_items"> 
                <p>--------------------读者信息--------------------</p>
                <div> 
                    <div class="items_l"> 
                        <p>读者姓名：<span class="borrow_readername"></span></p>
                        <p>最大可借数：<span class="borrow_max_num"></span></p>
                    </div>
                    <div class="items_r"> 
                        <p>读者类型：<span class="borrow_readertype"></span></p>
                        <p>最大可借天数：<span class="borrow_days_num"></span></p>
                    </div>
                </div>

            </div>
            <div class="book_data_items"> 
                <p>--------------------还书信息--------------------</p>
                <div> 
                    <div class="items_l"> 
                        <p>还书时间：<span>${formatDate()}</span></p>
                    </div>
                </div>
            </div>
            <div class="button_box">
                <input type="button" value="还书" class="borrow_btn">
                <input type="button" value="关闭" onclick="render.hidden()">
            </div>
        </div>
        `
        this.append(html)
    },
    renderChangePwd() {
        const html = `
            <div class="content_items">
                <div class="header">修改密码</div>
                <form action='#' onsubmit="changePwd()" >
                    <div class="changePwdBox"> 
                       <div>
                            <span>请输入新密码&nbsp&nbsp&nbsp：</span>
                            <input type="password" placeholder="请输入用户名" id="input_pwd1">
                        </div>
                        <div>
                            <span>再次确认新密码：</span>
                            <input type="password" placeholder="请输入密码" id="input_pwd2">
                        </div>
                    </div>
                    <div class="button_box">
                        <input type="submit" value="确定">
                        <input type="button" value="取消" onclick="render.hidden()">
                    </div>
                </form>
            </div>
        `
        this.append(html)
    },
    renderAddReader() {
        const html = `
            <div class="content_items">
            <div class="header">添加读者</div>
            <form action='#' onsubmit="addReader()" >
                <div class="content_box">
                    <div>
                        <span>读者编号：</span>
                        <input type="text" id="id">
                    </div>
                    <div>
                        <span>读者姓名：</span>
                        <input type="text" id="readername">
                    </div>
                    <div>
                        <span>读者类型：</span>
                        <select id="readertype">
                            <option value ="学生">学生</option>
                            <option value ="教师">教师</option>
                        </select>
                    </div>
                    <div>
                        <span>读者性别：</span>
                        <input type="text" id="sex">
                    </div>
                    <div>
                        <span>最大可借数：</span>
                        <input type="text" id="max_num">
                    </div>
                    <div>
                        <span>可借天数：</span>
                        <input type="text" id="days_num">
                    </div>
                </div>
                <div class="button_box">
                    <input type="submit" value="保存">
                    <input type="button" value="关闭" onclick="render.hidden()">
                </div>
            </form>
        </div>
        `
        this.append(html)
    },
    renderUpdateReader() {
        const html = `
            <div class="content_items">
            <div class="header">修改读者</div>
            <div class="search">
                <div>
                    <span>读者编号：</span>
                    <input type="text" class="search_input">
                </div>
                <div onclick="searchReader()">查询</div>
            </div>
            <form action='#' onsubmit="updateReader()" id="updateReader">
                <div class="content_box">
                    <div>
                        <span>读者编号：</span>
                        <input type="text" id="id" disabled>
                    </div>
                    <div>
                        <span>读者姓名：</span>
                        <input type="text" id="readername">
                    </div>
                    <div>
                        <span>读者类型：</span>
                        <select id="readertype">
                            <option value ="学生">学生</option>
                            <option value ="教师">教师</option>
                        </select>
                    </div>
                    <div>
                        <span>读者性别：</span>
                        <input type="text" id="sex">
                    </div>
                    <div>
                        <span>最大可借数：</span>
                        <input type="text" id="max_num">
                    </div>
                    <div>
                        <span>可借天数：</span>
                        <input type="text" id="days_num">
                    </div>
                </div>
                <div class="button_box">
                    <input type="submit" value="保存">
                    <input type="button" value="关闭" onclick="render.hidden()">
                </div>
            </form>
        </div>
        `
        this.append(html)
    },
    renderDeleteReader() {
        const html = `
            <div class="content_items">
            <div class="header">删除读者</div>
            <div class="search">
                <div>
                    <span>读者编号：</span>
                    <input type="text" class="search_input">
                </div>
                <div onclick="searchReader()">查询</div>
            </div>
            <form action='#' onsubmit="deleteReader()" id="updateReader">
                    <div class="content_box">
                    <div>
                        <span>读者编号：</span>
                        <input type="text" id="id" disabled>
                    </div>
                    <div>
                        <span>读者姓名：</span>
                        <input type="text" id="readername">
                    </div>
                    <div>
                        <span>读者类型：</span>
                        <select id="readertype">
                            <option value ="学生">学生</option>
                            <option value ="教师">教师</option>
                        </select>
                    </div>
                    <div>
                        <span>读者性别：</span>
                        <input type="text" id="sex">
                    </div>
                    <div>
                        <span>最大可借数：</span>
                        <input type="text" id="max_num">
                    </div>
                    <div>
                        <span>可借天数：</span>
                        <input type="text" id="days_num">
                    </div>
                </div>
                <div class="button_box">
                    <input type="submit" value="删除">
                    <input type="button" value="关闭" onclick="render.hidden()">
                </div>
            </form>
        </div>
        `
        this.append(html)
    },
    renderBookSearchModule() {
        const html = `
            <div class="content_items searchModule">
            <div class="header">图书查询</div>
            <form action="#" onsubmit="searchBookModule()"> 
                <div class="searchModuleHearth"> 
                    <div class="searchModuleHeader_L"> 
                        <div class="searchModuleItems"> 
                            <span>图书名称 </span>
                            <input type="text" id="bookname">
                        </div>
                        <div class="searchModuleItems"> 
                            <span>出版社 </span>
                            <input type="text" id="publisher">
                        </div>
                    </div>
                    <div class="searchModuleHeader_R"> 
                        <div class="searchModuleItems"> 
                            <span>作者 </span>
                            <input type="text" id="author">
                        </div>
                        <div class="searchModuleItems"> 
                            <span>出版时间(年-月)</span>
                            <input type="text" id="publish_time">
                        </div>
                    </div>
                </div>
                <div class="searchModuleBtn"> 
                    <input type="submit" value="查询"/>
                    <input type="button" value="关闭" onclick="render.hidden()">
                </div>
            </form>
            <div class="table"> 
                <div class="td tHeader"> 
                    <div>图书编号</div>
                    <div>图书名称</div>
                    <div>图书类别</div>
                    <div>作者</div>
                    <div>译者</div>
                    <div>出版社</div>
                    <div>出版时间</div>
                    <div>定价</div>
                    <div>库存数量</div>
                </div>
            </div>
        </div>
        `
        this.append(html)
    },
    renderReaderSearchModule() {
        const html = `
            <div class="content_items searchModule">
            <div class="header">读者查询</div>
            <form action="#" onsubmit="searchReaderModule()"> 
                <div class="searchModuleHearth"> 
                    <div class="searchModuleHeader_L"> 
                        <div class="searchModuleItems"> 
                            <span>读者名称 </span>
                            <input type="text" id="readername">
                        </div>
                        <div class="searchModuleItems"> 
                            <span>性别 </span>
                            <input type="text" id="sex">
                        </div>
                    </div>
                    <div class="searchModuleHeader_R"> 
                        <div class="searchModuleItems"> 
                            <span>读者类型 </span>
                            <input type="text" id="readertype">
                        </div>
                    </div>
                </div>
                <div class="searchModuleBtn"> 
                    <input type="submit" value="查询"/>
                    <input type="button" value="关闭" onclick="render.hidden()">
                </div>
            </form>
            <div class="table"> 
                <div class="td tHeader"> 
                    <div>读者编号</div>
                    <div>读者姓名</div>
                    <div>读者类型</div>
                    <div>性别</div>
                    <div>最大可借数</div>
                    <div>可借天数</div>
                </div>
            </div>
        </div>
        `
        this.append(html)
    }
}
