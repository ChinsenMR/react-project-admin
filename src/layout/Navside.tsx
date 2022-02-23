import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
type BaseMenu = {
  key: any;
  icon: any;
  title: any;
};
// 渲染link菜单
function renderMenuItem(menu: BaseMenu) {
  return (
    <Menu.Item key={menu.key}>
      <Link to={menu.key}>
        {menu.icon && <Icon type={menu.icon} />}
        <span>{menu.title}</span>
      </Link>
    </Menu.Item>
  );
}
type MenuItem = {
  key: any;
  icon: any;
  title: any;
  subs: any;
};
// 渲染有子菜单的subMenu
function renderSubMenu(subMenu: MenuItem) {
  return (
    <Menu.SubMenu
      key={subMenu.key}
      title={
        <span>
          {subMenu.icon && <Icon type={subMenu.icon} />}
          <span>{subMenu.title}</span>
        </span>
      }
    >
      {subMenu.subs &&
        subMenu.subs.map((menu: BaseMenu) => renderMenuItem(menu))}
    </Menu.SubMenu>
  );
}
