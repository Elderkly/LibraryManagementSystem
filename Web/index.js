(function () {

    changeDom()

    $('.btn_l').onclick = () => {
        const [name, pwd] = [
            $('.input_name').value,
            $('.input_pwd').value
        ]
        if (!!name && !!pwd) {
            httpRequest('login',{
                "username": name,
                "password": pwd
            })
                .then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        localStorage.setItem("USERINFO",JSON.stringify(res.data))
                        changeDom()
                    } else {
                        alert("用户名或密码有误")
                    }
                })
                .catch(e => {
                    console.log(e)
                })
        } else {
            alert("请输入用户名和密码")
        }
    }
})()
