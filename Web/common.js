const baseUrl = 'http://localhost:8080/ServerDemo_war_exploded/TomcatTest/'
const $ = dom => document.querySelector(dom)
const getParams = obj => {
    let params = ''
    for (let i in obj) {
        params+= `${!params ? '?' : '&'}${i}=${obj[i]}`
    }
    return params
}
const httpRequest = (url, params) => {
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}${url}${getParams(params)}`,{
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(e => reject(e))
    })
}

const changeDom = () => {
    const userInfo = localStorage.getItem("USERINFO")
    if (!!userInfo && JSON.parse(userInfo)) {
        $('.loginBox').style.display = 'none'
        $('.mainBox').style.display = 'flex'
        JSON.parse(userInfo)[0].is_admin === '0' ? $('.top_menu').className += ' user_menu' : $('.top_menu').className = 'top_menu'
    } else {
        $('.loginBox').style.display = 'flex'
        $('.mainBox').style.display = 'none'
    }

    //  下拉菜单
    let hideIndex,time
    const childMenu = document.querySelectorAll('.child_menu>div')
    const menuItems = document.getElementsByClassName('menu_items')
    for(let i = 0; i < menuItems.length; i ++) {
        const _switch = JSON.parse(userInfo) && JSON.parse(userInfo)[0].is_admin === '0' && i < 2
        function onmouseenter() {
            childMenu[i].style.display = 'block'
        }
        function onmouseout() {
            hideIndex = i
            time = setTimeout(() => {
                childMenu[i].style.display = 'none'
                hideIndex = null
            },30)
        }
        menuItems[i].onmouseenter = _switch ? null : onmouseenter
        menuItems[i].onmouseout = _switch ? null : onmouseout
    }
    for(let i = 0; i < childMenu.length; i++) {
        childMenu[i].onmouseenter = () => {
            if (hideIndex === i) {
                clearTimeout(time)
            }
        }
        childMenu[i].onmouseleave = (e) => {
            childMenu[i].style.display = 'none'
        }
        // childMenu[i].onclick = () => {
        //     render.show()
        // }
    }
}

const changeBorrow = (_switch) => {
    const domSwitch = !!$('.borrow_switch')
    if (_switch) {
        domSwitch ? $('.borrow_switch').innerHTML = '是' : null
        $('.borrow_btn').className = 'borrow_btn'
        $('.borrow_btn').onclick = domSwitch ? borrowBook : backBook
    } else {
        domSwitch ? $('.borrow_switch').innerHTML = '否' : null
        $('.borrow_btn').className = 'borrow_btn disable_btn'
        $('.borrow_btn').onclick = null
    }
}

const formatDate = (date) => {
    const time = !!date ? new Date(date) : new Date()
    const f = d => d > 9 ? d : '0' + d
    return `${f(time.getFullYear())}-${f(time.getMonth() + 1)}-${f(time.getDate())}`
}

const getDayTime = (day) => {
    return 60 * 60 * 1000 * 24 * parseInt(day)
}


const logOut = () => {
    localStorage.removeItem("USERINFO")
    changeDom()
}
