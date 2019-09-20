var mongoose = require('mongoose')
var nodemailer = require('nodemailer')
var Mongoose = {
    url: 'mongodb://localhost:27017/movie',
    connect() {
        mongoose.connect(this.url, { useNewUrlParser: true }, (error) => {
            if (error) {
                console.log("Error", error)
                console.log("数据库连接失败");
                return;
            }
            console.log("数据库连接成功");
        });
    }
};

var Email = {
    config: {
        host: "smtp.exmail.qq.com",
        service: 'qq',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: '776303560@qq.com', // generated ethereal user
            pass: 'cemtiygiseebbdgb' // generated ethereal password
        }
    },
    get transporter() {
        return nodemailer.createTransport(this.config)
    },
    get verify() {
        return Math.random().toString().substring(2, 6);
    },
    get time() {
        return Date.now();
    }
}

var Head = {
    baseUrl: 'http://localhost:3000/uploads/'
}

module.exports = {
    Mongoose,
    Email,
    Head
}