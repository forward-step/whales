import { App } from 'vue';
import {
    Layout,
    Button,
    Form,
    Input,
    Table,
    Select,
    Menu,
    Modal,
    Dropdown,
    Image,
    Divider,
    Avatar
} from 'ant-design-vue';
/**
 * 引入需要的antd组件
 */
export const antd = {
    install(Vue: App) {
        // 布局
        Vue.component(Layout.name, Layout);
        Vue.component(Layout.Header.name, Layout.Header);
        Vue.component(Layout.Content.name, Layout.Content);
        Vue.component(Layout.Sider.name, Layout.Sider);
        // 菜单
        Vue.component(Menu.name, Menu);
        Vue.component(Menu.Item.name, Menu.Item);
        Vue.component(Menu.SubMenu.name, Menu.SubMenu);
        Vue.component(Menu.ItemGroup.name, Menu.ItemGroup);
        Vue.component(Dropdown.name, Dropdown); // 下拉菜单
        // 表单
        Vue.component(Form.name, Form);
        Vue.component(Form.Item.name, Form.Item);
        Vue.component(Input.name, Input);
        Vue.component(Input.TextArea.name, Input.TextArea);
        Vue.component(Select.name, Select);
        Vue.component('AOption', Select.Option);
        // 其他
        Vue.component(Avatar.name, Avatar);
        Vue.component(Table.name, Table);
        Vue.component(Button.name, Button);
        Vue.component(Modal.name, Modal);
        Vue.component(Image.name, Image);
        Vue.component(Divider.name, Divider);
    },
};
