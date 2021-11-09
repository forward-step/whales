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
    Avatar,
    InputSearch,
    Badge,
    Row,
    Col,
    Carousel,
    Card,
    Tabs,
    TabPane
} from 'ant-design-vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';
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
        Vue.component(Row.name, Row);
        Vue.component(Col.name, Col);
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
        Vue.component(InputSearch.name, InputSearch);
        Vue.component(Select.name, Select);
        Vue.component('AOption', Select.Option);
        // 其他
        Vue.component(Avatar.name, Avatar);
        Vue.component(Table.name, Table);
        Vue.component(Button.name, Button);
        Vue.component(Modal.name, Modal);
        Vue.component(Image.name, Image);
        Vue.component(Divider.name, Divider);
        Vue.component(Badge.name, Badge);
        Vue.component(Carousel.name, Carousel);
        Vue.component(Card.name, Card);
        Vue.component(Tabs.name, Tabs);
        Vue.component("ATabPane", TabPane);
        Vue.component('iconfont', createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_2775308_0nm0y19nnbu.js', // 在 iconfont.cn 上生成
            // scriptUrl: '@/assets/iconfont/iconfont.js', // 在 iconfont.cn 上生成
        }));
    },
};
