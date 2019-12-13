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
import Index from "components/admin/views/Index.jsx";
import Profile from "components/admin/views/examples/Profile.jsx";
import EmployeesManage from "./components/admin/views/examples/EmployeesManage";
import UsersManage from "./components/admin/views/examples/UsersManage";
import StoresManage from "./components/admin/views/examples/StoresManage";
// import Analytics from "./components/admin/views/examples/Analytics";
// import ChangeEmail from "./components/admin/views/examples/ChangeEmail";
// import ChangePhone from "./components/admin/views/examples/ChangePhone";
// import ChangePassword from "./components/admin/views/examples/ChangePassword";

var routes = [
    {
        path: "/index",
        name: "Trang chủ",
        icon: "ni ni-shop text-primary",
        component: Index,
        layout: "/admin"
    },
    {
        path: "/profile",
        name: "Thông tin cá nhân",
        icon: "ni ni-single-02 text-yellow",
        component: Profile,
        layout: "/admin"
    },
    {
        path: "/employees-manage",
        name: "Quản lý nhân viên",
        icon: "ni ni-bullet-list-67 text-red",
        component: EmployeesManage,
        layout: "/admin"
    },
    {
        path: "/users-manage",
        name: "Quản lý người dùng",
        icon: "ni ni-bullet-list-67 text-red",
        component: UsersManage,
        layout: "/admin"
    },
    {
        path: "/stores-manage",
        name: "Quản lý cửa hàng",
        icon: "ni ni-bullet-list-67 text-red",
        component: StoresManage,
        layout: "/admin"
    },
    // {
    //     path: "/analytics",
    //     name: "Thống kê",
    //     icon: "ni ni-chart-pie-35 text-orange",
    //     component: Analytics,
    //     layout: "/admin"
    // },
    // {
    //     path: "/change-email",
    //     name: "Đổi email",
    //     icon: "ni ni-email-83 text-info",
    //     component: ChangeEmail,
    //     layout: "/auth"
    // },
    // {
    //     path: "/change-phone",
    //     name: "Đổi số điện thoại",
    //     icon: "ni ni-mobile-button text-success",
    //     component: ChangePhone,
    //     layout: "/auth"
    // },
    // {
    //     path: "/change-pasword",
    //     name: "Đổi mật khẩu",
    //     icon: "ni ni-key-25",
    //     component: ChangePassword,
    //     layout: "/auth"
    // }
    {
        path: "/analytics",
        name: "Thống kê",
        icon: "ni ni-chart-pie-35 text-orange",
        component: Index,
        layout: "/admin"
    },
    {
        path: "/change-email",
        name: "Đổi email",
        icon: "ni ni-email-83 text-info",
        component: Index,
        layout: "/admin"
    },
    {
        path: "/change-phone",
        name: "Đổi số điện thoại",
        icon: "ni ni-mobile-button text-success",
        component: Index,
        layout: "/admin"
    },
    {
        path: "/change-pasword",
        name: "Đổi mật khẩu",
        icon: "ni ni-key-25",
        component: Index,
        layout: "/admin"
    }
];
export default routes;
