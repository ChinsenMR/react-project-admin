import { Home, Mine, ErrorPage, Article } from "../pages";

interface SubsItem {
  key: string;
  title: string;
  component: JSX.Element;
}

interface MenuItem {
  key: string;
  title: string;
  icon: string;
  component: JSX.Element;
  subs: SubsItem[];
}

const routes: MenuItem[] = [
  {
    key: "/",
    title: "首页",
    icon: "bank",
    component: <Home />,
    subs: [],
  },
  {
    key: "/404",
    title: "页面错误",
    icon: "bank",
    component: <ErrorPage />,
    subs: [],
  },
  {
    key: "/index",
    title: "首页",
    icon: "bank",
    component: <Home />,
    subs: [],
  },
  {
    key: "/mine",
    title: "首页",
    icon: "bank",
    component: <Mine />,
    subs: [],
  },
  {
    key: "/article",
    title: "文章",
    icon: "bank",
    component: <Article />,
    subs: [],
  },
  // { key: "/main/table", title: "表格", icon: "book", component: "BaseTable" },
  // { key: "/main/message", title: "消息", icon: "bulb", component: "Messsage" },
  // { key: "/main/auth", title: "权限", icon: "bug", component: "Auth" },
  // { key: "/main/staff", title: "员工", icon: "audio", component: "Staff" },
  // {
  //   key: "/main/setting",
  //   title: "设置",
  //   icon: "rocket",
  //   component: 'none',
  //   subs: [
  //     {
  //       key: "/main/setting/usercenter",
  //       title: "个人中心",
  //       component: "Usercenter",
  //     },
  //     // {
  //     //   key: "/main/setting/expand",
  //     //   title: "功能扩展",
  //     //   component: "Expand",
  //     // },
  //   ],
  // },
];
export default routes;
