var md5 = require('md5');

const User = require("../../models/user.model");
const UserDao = require("../../dao/user.dao");
const Authorization = require("../../models/authorization.model");
const AuthorizationDao = require("../../dao/authorization.dao");

// console.log(md5("123456")); //e10adc3949ba59abbe56e057f20f883e

const users = [
    {authorizationName: "Admin", fullname: { firstname: "Admin", lastname: "1" }, phone: "0123456789", email: "admin1@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "Admin", fullname: { firstname: "Admin", lastname: "2" }, phone: "0123456790", email: "admin2@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "Admin", fullname: { firstname: "Admin", lastname: "3" }, phone: "0123456791", email: "admin3@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "Admin", fullname: { firstname: "Admin", lastname: "4" }, phone: "0123456792", email: "admin4@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "Admin", fullname: { firstname: "Admin", lastname: "5" }, phone: "0123456793", email: "admin5@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},

    {authorizationName: "Employee", fullname: { firstname: "Employee", lastname: "1" }, phone: "0123456794", email: "employee1@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "Employee", fullname: { firstname: "Employee", lastname: "2" }, phone: "0123456795", email: "employee2@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "Employee", fullname: { firstname: "Employee", lastname: "3" }, phone: "0123456796", email: "employee3@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "Employee", fullname: { firstname: "Employee", lastname: "4" }, phone: "0123456797", email: "employee4@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "Employee", fullname: { firstname: "Employee", lastname: "5" }, phone: "0123456798", email: "employee5@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},

    {authorizationName: "User", fullname: { firstname: "User", lastname: "1" }, phone: "0123456799", email: "user1@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "2" }, phone: "0123456800", email: "user2@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "3" }, phone: "0123456801", email: "user3@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "4" }, phone: "0123456802", email: "user4@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "5" }, phone: "0123456803", email: "user5@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "6" }, phone: "0123456804", email: "user6@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "7" }, phone: "0123456805", email: "user7@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "8" }, phone: "0123456806", email: "user8@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "9" }, phone: "0123456807", email: "user9@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "10" }, phone: "0123456808", email: "user10@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "11" }, phone: "0123456809", email: "user11@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "12" }, phone: "0123456810", email: "user12@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "13" }, phone: "0123456811", email: "user13@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "14" }, phone: "0123456812", email: "user14@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "15" }, phone: "0123456813", email: "user15@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "16" }, phone: "0123456814", email: "user16@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "17" }, phone: "0123456815", email: "user17@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "18" }, phone: "0123456816", email: "user18@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "19" }, phone: "0123456817", email: "user19@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "20" }, phone: "0123456818", email: "user20@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "21" }, phone: "0123456819", email: "user21@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "22" }, phone: "0123456820", email: "user22@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "23" }, phone: "0123456821", email: "user23@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "24" }, phone: "0123456822", email: "user24@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "25" }, phone: "0123456823", email: "user25@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "26" }, phone: "0123456824", email: "user26@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "27" }, phone: "0123456825", email: "user27@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "28" }, phone: "0123456826", email: "user28@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "29" }, phone: "0123456827", email: "user29@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "30" }, phone: "0123456828", email: "user30@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "31" }, phone: "0123456829", email: "user31@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "32" }, phone: "0123456830", email: "user32@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "33" }, phone: "0123456831", email: "user33@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "34" }, phone: "0123456832", email: "user34@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "35" }, phone: "0123456833", email: "user35@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "36" }, phone: "0123456834", email: "user36@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "37" }, phone: "0123456835", email: "user37@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "38" }, phone: "0123456836", email: "user38@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "39" }, phone: "0123456837", email: "user39@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "40" }, phone: "0123456838", email: "user40@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "41" }, phone: "0123456839", email: "user41@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "42" }, phone: "0123456840", email: "user42@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "43" }, phone: "0123456841", email: "user43@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "44" }, phone: "0123456842", email: "user44@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "45" }, phone: "0123456843", email: "user45@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "46" }, phone: "0123456844", email: "user46@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "47" }, phone: "0123456845", email: "user47@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "48" }, phone: "0123456846", email: "user48@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "49" }, phone: "0123456847", email: "user49@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]},
    {authorizationName: "User", fullname: { firstname: "User", lastname: "50" }, phone: "0123456848", email: "user50@gmail.com", password: "e10adc3949ba59abbe56e057f20f883e", address: "Thủ Đức, Hồ Chí Minh", gender: false, birthday: "", timeRegister: Date.now(), avatars: ["images/nancy_avatar.jpg"]}
];

module.exports.createDefaultCollection = async () => {
    const usersArray = await UserDao.find();
    if(usersArray.length <= 0){
        console.log("User collection is empty.");
        const authorizations = await AuthorizationDao.find();
        if(authorizations.length <= 0){
            console.log("Authorization collection is empty.");
        }
        else{            
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
                        UserDao.save(userNew);
                    }
                });
            });
            console.log("Default User collection created.");   
        }   
    }
    else{
        console.log("User collection existed.");
    }
};
