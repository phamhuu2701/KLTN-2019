var md5 = require('md5');

const User = require("../../models/user.model");
const UserDao = require("../../dao/user.dao");
const Authorization = require("../../models/authorization.model");
const AuthorizationDao = require("../../dao/authorization.dao");

// console.log(md5("123456")); //e10adc3949ba59abbe56e057f20f883e

const users = [
    {authorizationName: "Admin", fullname: { firstname: "Admin", lastname: "1" }, phone: "0123456789", email: "admin1@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "Admin", fullname: { firstname: "Admin", lastname: "2" }, phone: "0123456790", email: "admin2@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "Admin", fullname: { firstname: "Admin", lastname: "3" }, phone: "0123456791", email: "admin3@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "Admin", fullname: { firstname: "Admin", lastname: "4" }, phone: "0123456792", email: "admin4@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "Admin", fullname: { firstname: "Admin", lastname: "5" }, phone: "0123456793", email: "admin5@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "Employee", fullname: { firstname: "Employee", lastname: "1" }, phone: "0123456794", email: "employee1@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "Employee", fullname: { firstname: "Employee", lastname: "2" }, phone: "0123456795", email: "employee2@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "Employee", fullname: { firstname: "Employee", lastname: "3" }, phone: "0123456796", email: "employee3@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "Employee", fullname: { firstname: "Employee", lastname: "4" }, phone: "0123456797", email: "employee4@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "Employee", fullname: { firstname: "Employee", lastname: "5" }, phone: "0123456798", email: "employee5@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "1" }, phone: "0123456799", email: "user1@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "2" }, phone: "0123456800", email: "user2@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "3" }, phone: "0123456801", email: "user3@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "4" }, phone: "0123456802", email: "user4@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "5" }, phone: "0123456803", email: "user5@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "6" }, phone: "0123456804", email: "user6@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "7" }, phone: "0123456805", email: "user7@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "8" }, phone: "0123456806", email: "user8@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "9" }, phone: "0123456807", email: "user9@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "10" }, phone: "0123456808", email: "user10@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, avatars: ["https://olm.vn/images/avt/avt3/avt2710703_256by256.jpg"]}
];

module.exports.createDefaultCollection = async () => {
    const usersArray = await UserDao.find();
    if(usersArray.length <= 0){
        console.log("User collection is empty.");

        const authorizations = await AuthorizationDao.find();
        if(authorizations.length > 0){

            authorizations.map(authorization => {
                users.map(user => {
                    if (user.authorizationName.localeCompare(authorization.name) == 0) {
                        const userNew = new User({
                            authorization: authorization,
                            fullname: user.fullname,
                            phone: user.phone,
                            email: user.email,
                            password: user.password,
                            address: user.address,
                            gender: user.gender,
                            birthday: user.birthday,
                            timeRegister: user.timeRegister,
                            avatars: user.avatars
                        });    

                        // console.log(userNew);
                        UserDao.save(userNew);
                    }
                });
            });
            console.log("Default User collection created.");   
        }   
    }
    else{
        console.log("User collection existed: ", usersArray.length, "/20");
    }
};
