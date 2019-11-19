/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "components/argon-dashboard-react-master/views/Index.jsx";
import Profile from "components/argon-dashboard-react-master/views/examples/Profile.jsx";
import Maps from "components/argon-dashboard-react-master/views/examples/Maps.jsx";
import Register from "components/argon-dashboard-react-master/views/examples/Register.jsx";
import Login from "components/argon-dashboard-react-master/views/examples/Login.jsx";
import StoreManage from "components/argon-dashboard-react-master/views/examples/StoreManage.jsx";
import Icons from "components/argon-dashboard-react-master/views/examples/Icons.jsx";
import Messages from "./components/argon-dashboard-react-master/views/examples/Messages";
import ChangeEmail from "./components/argon-dashboard-react-master/views/examples/ChangeEmail";
import ChangePhone from "./components/argon-dashboard-react-master/views/examples/ChangePhone";
import ChangePassword from "./components/argon-dashboard-react-master/views/examples/ChangePassword";
import Statistical from "./components/argon-dashboard-react-master/views/examples/Statistical";
import StoreManageUpdateProduct from "./components/argon-dashboard-react-master/views/examples/StoreManageUpdateProduct";

var routes = [
    {
        path: "/index",
        name: "Trang chủ",
        icon: "ni ni-shop text-primary",
        component: Index,
        layout: "/admin"
    },
    {
        path: "/user-profile",
        name: "Thông tin cá nhân",
        icon: "ni ni-single-02 text-yellow",
        component: Profile,
        layout: "/admin"
    },
    {
        path: "/messages",
        name: "Tin nhắn",
        icon: "ni ni-chat-round text-blue",
        component: Messages,
        layout: "/admin"
    },
    {
        path: "/stores-manage",
        name: "Quản lý cửa hàng",
        icon: "ni ni-bullet-list-67 text-red",
        component: StoreManage,
        layout: "/admin"
    },
    {
        path: "/stores-manage-update-product",
        name: "Cập nhập cửa hàng, sản phẩm",
        icon: "ni ni-ruler-pencil",
        component: StoreManageUpdateProduct,
        layout: "/admin"
    },
    {
        path: "/change-email",
        name: "Đổi email",
        icon: "ni ni-email-83 text-info",
        component: ChangeEmail,
        layout: "/auth"
    },
    {
        path: "/change-phone",
        name: "Đổi số điện thoại",
        icon: "ni ni-mobile-button text-success",
        component: ChangePhone,
        layout: "/auth"
    },
    {
        path: "/change-pasword",
        name: "Đổi mật khẩu",
        icon: "ni ni-key-25",
        component: ChangePassword,
        layout: "/auth"
    },
    {
        path: "/statistical",
        name: "Thống kê",
        icon: "ni ni-chart-pie-35 text-orange",
        component: Statistical,
        layout: "/admin"
    },
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Index,
        layout: "/admin"
    },
    {
        path: "/icons",
        name: "Icons",
        icon: "ni ni-planet text-blue",
        component: Icons,
        layout: "/admin"
    },
    {
        path: "/maps",
        name: "Maps",
        icon: "ni ni-pin-3 text-orange",
        component: Maps,
        layout: "/admin"
    },
    {
        path: "/user-profile",
        name: "User Profile",
        icon: "ni ni-single-02 text-yellow",
        component: Profile,
        layout: "/admin"
    },
    {
        path: "/tables",
        name: "Tables",
        icon: "ni ni-bullet-list-67 text-red",
        component: StoreManage,
        layout: "/admin"
    },
    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/auth"
    },
    {
        path: "/register",
        name: "Register",
        icon: "ni ni-circle-08 text-pink",
        component: Register,
        layout: "/auth"
    }
];
export default routes;
