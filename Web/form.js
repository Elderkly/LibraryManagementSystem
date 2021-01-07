/*****图书模块******/
const addBook = function (e) {
    const {id,bookname,booktype,author,translator,publisher,publish_time,price,stock} = event.target
    // console.log(id.value,bookname.value,booktype.value,author.value,translator.value,publisher.value,publish_time.value,price.value,stock.value)
    httpRequest('bookAdd',{
        id:id.value,
        bookname:bookname.value,
        booktype:booktype.value,
        author:author.value,
        translator:translator.value,
        publisher:publisher.value,
        publish_time:publish_time.value,
        price:price.value,
        stock:stock.value,
    })
        .then(res => {
            console.log(res)
            if (res.code === 200) {
                alert("插入成功")
                render.hidden()
            } else {
                alert(res.msg)
            }
        })
        .catch(e => {
            console.log(e)
            alert("插入失败")
        })
}
const searchBook = function (e) {
    const value = $('.search_input').value
    if (!!value) {
        const {id,bookname,booktype,author,translator,publisher,publish_time,price,stock} = $('#updateBook')
        const dom = [id,bookname,booktype,author,translator,publisher,publish_time,price,stock]
        httpRequest('bookQuery',{
            id: value
        })
            .then(res => {
                if (res.code === 200) {
                    const {id,bookname,booktype,author,translator,publisher,publish_time,price,stock} = res.data[0]
                    const data = [id,bookname,booktype,author,translator,publisher,publish_time,price,stock]
                    dom.map((e,index) => e.value = data[index])
                } else {
                    alert("未查询到相关书籍")
                }
            })
            .catch(e => {
                console.log(e)
                alert("查询失败")
            })
    } else {
        alert('请输入图书编号')
    }
}
const updateBook = function (e) {
    const {id,bookname,booktype,author,translator,publisher,publish_time,price,stock} = event.target
    httpRequest('bookUpdate',{
        id:id.value,
        bookname:bookname.value,
        booktype:booktype.value,
        author:author.value,
        translator:translator.value,
        publisher:publisher.value,
        publish_time:publish_time.value,
        price:price.value,
        stock:stock.value,
    })
        .then(res => {
            console.log(res)
            if (res.code === 200) {
                alert("修改成功")
                render.hidden()
            } else {
                alert(res.msg)
            }
        })
        .catch(e => {
            console.log(e)
            alert("修改失败")
        })
}
const deleteBook = function (e) {
    const {id} = event.target
    httpRequest('bookDelete',{
        id:id.value,
    })
        .then(res => {
            console.log(res)
            if (res.code === 200) {
                alert("删除成功")
                render.hidden()
            } else {
                alert(res.msg)
            }
        })
        .catch(e => {
            console.log(e)
            alert("删除失败")
        })
}

/********借书模块***********/
const searchBorrowData = function () {
    const [bookNumber,readerNumber] = [
        $('.search_book_number').value,
        $('.search_reader_number').value
    ]
    const key = ["author","bookname","days_num","max_num","price","publish_time","publisher","readername","readertype","stock", "borrow_num"]
    if (!!bookNumber && !!readerNumber) {
        httpRequest('borrowQuery',{
            bookId: bookNumber,
            readerId: readerNumber
        })
            .then(res => {
                console.log(res)
                if (res.code === 200) {
                    res.data = res.data[0]
                    res.data.publish_time = res.data.publish_time && res.data.publish_time.split(' ')[0]
                    key.map(e => !!$(`.borrow_${e}`) ? $(`.borrow_${e}`).innerHTML = res.data[e] : null)
                    const _switch = !!$('.borrow_switch') ? res.data["borrow_this_book"] > 0 || res.data.stock < 1 || res.data["borrow_num"] >= parseInt(res.data["max_num"]) : !res.data["borrow_this_book"] || res.data["borrow_this_book"] < 0
                    if (_switch){
                        changeBorrow(false)
                    } else {
                        changeBorrow(true)
                    }
                } else {
                    alert("查询失败")
                    key.map(e => !!$(`.borrow_${e}`) ? $(`.borrow_${e}`).innerHTML = '' : null)
                }
            })
            .catch(e => {
                console.log(e)
                key.map(e => !!$(`.borrow_${e}`) ? $(`.borrow_${e}`).innerHTML = '' : null)
                alert("查询失败")
            })
    } else {
        alert("请输入图书编号和读者编号")
    }
}
const borrowBook = function (e) {
    console.log(event.target.bookname)
    const [bookNumber,readerNumber, days_num] = [
        $('.search_book_number').value,
        $('.search_reader_number').value,
        $('.borrow_days_num').innerHTML
    ]
    const [borrow_date, back_date] = [
        formatDate(),
        formatDate(new Date().getTime() + getDayTime(days_num))
    ]
    httpRequest('borrow',{
        "book_id": bookNumber,
        "reader_id": readerNumber,
        "borrow_date": borrow_date,
        "back_date": back_date
    })
        .then(res => {
            console.log(res)
            if (res.code === 200) {
                alert("借出成功")
                render.hidden()
            } else {
                alert("借出失败")
            }
        })
        .catch(e => {
            alert("借出失败")
            console.log(e)
        })
}
const backBook = function () {
    if (!$('.borrow_publish_time').innerHTML) return
    const [bookNumber,readerNumber] = [
        $('.search_book_number').value,
        $('.search_reader_number').value,
    ]
    httpRequest('back',{
        bookId: bookNumber,
        readerId: readerNumber
    })
        .then(res => {
            if(res.code === 200) {
                alert("还书成功")
                render.hidden()
            } else {
                alert("还书失败")
            }
        })
        .catch(e => {
            console.log(e)
            alert("还书失败")
        })
}
const changePwd = function () {
    const {input_pwd1, input_pwd2} = event.target
    const USERINFO = JSON.parse(localStorage.getItem("USERINFO"))[0]
    const [pwd1, pwd2] = [input_pwd1.value, input_pwd2.value]
    const n = !pwd1 || !pwd2 ? 1 :
        pwd1 !== pwd2 ? 2 : 0
    switch(n){
        case 1:
            alert("请正确输入密码")
            return;
        case 2:
            alert("两次密码不一致")
            return;
    }
    httpRequest('updatePassword',{
        id: USERINFO.id,
        password: pwd2
    })
        .then(res => {
            if (res.code === 200) {
                alert("修改成功")
                render.hidden()
            } else {
                alert("修改失败")
            }
        })
        .catch(e => {
            console.log(e)
            alert("修改失败")
        })
}

/**********读者模块**********/
const addReader = function () {
    const {id, readername, readertype, sex, max_num, days_num} = event.target
    httpRequest('readerAdd',{
        id:id.value,
        readername:readername.value,
        readertype:readertype.value,
        sex:sex.value,
        max_num:max_num.value,
        days_num:days_num.value,
    })
        .then(res => {
            console.log(res)
            if (res.code === 200) {
                alert("添加成功")
                render.hidden()
            } else {
                alert(res.msg)
            }
        })
        .catch(e => {
            console.log(e)
            alert("添加失败")
        })
}
const searchReader = function (e) {
    const value = $('.search_input').value
    if (!!value) {
        const {id, readername, readertype, sex, max_num, days_num} = $('#updateReader')
        const dom = [id, readername, readertype, sex, max_num, days_num]
        httpRequest('readerQuery',{
            id: value
        })
            .then(res => {
                if (res.code === 200) {
                    const {id, readername, readertype, sex, max_num, days_num} = res.data[0]
                    const data = [id, readername, readertype, sex, max_num, days_num]
                    dom.map((e,index) => e.value = data[index])
                } else {
                    alert("未查询到相关读者")
                }
            })
            .catch(e => {
                console.log(e)
                alert("查询失败")
            })
    } else {
        alert('请输入图书编号')
    }
}
const updateReader = function (e) {
    const {id, readername, readertype, sex, max_num, days_num} = event.target
    httpRequest('readerUpdate',{
        id:id.value,
        readername:readername.value,
        readertype:readertype.value,
        sex:sex.value,
        max_num:max_num.value,
        days_num:days_num.value,
    })
        .then(res => {
            console.log(res)
            if (res.code === 200) {
                alert("修改成功")
                render.hidden()
            } else {
                alert(res.msg)
            }
        })
        .catch(e => {
            console.log(e)
            alert("修改失败")
        })
}
const deleteReader = function (e) {
    const {id} = event.target
    httpRequest('readerDelete',{
        id:id.value,
    })
        .then(res => {
            console.log(res)
            if (res.code === 200) {
                alert("删除成功")
                render.hidden()
            } else {
                alert(res.msg)
            }
        })
        .catch(e => {
            console.log(e)
            alert("删除失败")
        })
}

/**********查询模块********/
const searchBookModule = function () {
    const box = $('.table')
    const tHeader = `<div class="td tHeader"> 
                    <div>图书编号</div>
                    <div>图书名称</div>
                    <div>图书类别</div>
                    <div>作者</div>
                    <div>译者</div>
                    <div>出版社</div>
                    <div>出版时间</div>
                    <div>定价</div>
                    <div>库存数量</div>
                </div>`
    const cleanTable = () => box.innerHTML = tHeader
    const {bookname,publisher,author,publish_time} = event.target
    httpRequest('bookSearchModule',{
        bookname: bookname.value,
        publisher: publisher.value,
        author: author.value,
        publish_time: publish_time.value,
    })
        .then(res => {
            console.log(res)
            if (res.code === 200) {
                cleanTable()
                for (let i = 0; i < 30; i++) {
                    if (i >= res.data.length) {
                        box.innerHTML += `
                        <div class="td"> 
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    `
                    } else {
                        const e = res.data[i]
                        box.innerHTML += `
                        <div class="td"> 
                            <div>${e.id}</div>
                            <div>${e.bookname}</div>
                            <div>${e.booktype}</div>
                            <div>${e.author}</div>
                            <div>${e.translator}</div>
                            <div>${e.publisher}</div>
                            <div>${e.publish_time}</div>
                            <div>${e.price}</div>
                            <div>${e.stock}</div>
                        </div>
                    `
                    }
                }
            } else {
                cleanTable()
            }
        })
        .catch(e => {
            alert("查询失败")
            console.log(e)
        })
}
const searchReaderModule = function () {
    const box = $('.table')
    const tHeader = `<div class="td tHeader"> 
                    <div>读者编号</div>
                    <div>读者姓名</div>
                    <div>读者类型</div>
                    <div>性别</div>
                    <div>最大可借数</div>
                    <div>可借天数</div>
                </div>`
    const cleanTable = () => box.innerHTML = tHeader
    const {readername,sex,readertype} = event.target
    httpRequest('readerSearchModule',{
        readername: readername.value,
        sex: sex.value,
        readertype: readertype.value
    })
        .then(res => {
            console.log(res)
            if (res.code === 200) {
                cleanTable()
                for (let i = 0; i < 30; i++) {
                    if (i >= res.data.length) {
                        box.innerHTML += `
                        <div class="td"> 
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    `
                    } else {
                        const e = res.data[i]
                        box.innerHTML += `
                        <div class="td"> 
                            <div>${e.id}</div>
                            <div>${e.readername}</div>
                            <div>${e.readertype}</div>
                            <div>${e.sex}</div>
                            <div>${e.max_num}</div>
                            <div>${e.days_num}</div>
                        </div>
                    `
                    }
                }
            } else {
                cleanTable()
            }
        })
        .catch(e => {
            alert("查询失败")
            console.log(e)
        })
}
