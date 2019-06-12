function login(config) {
    // 模擬資料
    let result = {
        code: 200,
        data: null,
        msg: '獲取成功',
        time: new Date()
    }

    result.data = { userName: "hello", mobile: "13888888888" };
    return result;
}

module.exports = {
    login: login()
}