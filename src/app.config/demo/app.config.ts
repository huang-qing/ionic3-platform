import { zh_CN } from './i18n/zh-CN';

var COLORS = ["#387ef5", '#000', "#f53d3d", "rebeccapurple", "#FFC125", "#32db64"];
var getColor = function () {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

var pages: any = [{
    id: 'hello-ionic',
    title: 'HELLO_IONIC',
    component: 'hello-ionic',
    iconSet: 'evil',
    iconName: 'heart',
    color: getColor(),
    style: null,
    api: '',
    next: null,
    actions: null,
    isNav: true,
    isTabs: true
}, {
    id: 'hello-list',
    title: 'MY_FIRST_LIST',
    component: 'hello-list',
    style: null,
    iconSet: '',
    iconName: 'list',
    color: getColor(),
    api: '',
    next: null,
    actions: null,
    isNav: false,
    isTabs: true
}, {
    id: 'list-demo',
    title: 'LIST_PAGE',
    component: 'list-page',
    api: 'api/lists',
    iconSet: '',
    iconName: 'list-box',
    color: getColor(),
    style: {
        nolines: false,
        inset: false
    },
    actions: {
        button: {
            title: 'DETAIL_PAGE',
            component: 'detail-page',
            api: 'api/items',
            style: null,
            next: null
        },
        sliding: {

        }
    },
    next: {
        title: 'DETAIL_PAGE',
        component: 'detail-page',
        api: 'api/items',
        style: null,
        next: null,
        actions: null
    },
    isNav: true,
    isTabs: true
}, {
    id: 'tabs-demo',
    //title: 'TABS-DEMO',
    title: 'Tabs示例',
    component: 'tabs-page',
    style: null,
    iconSet: '',
    iconName: 'list',
    color: getColor(),
    api: '',
    next: null,
    actions: null,
    isNav: true,
    isTabs: false
}];

const AppConfig = {
    i18n: {
        name: 'zh-CN',
        content: zh_CN
    },
    rootPage: 'tabs-page',
    router: pages
}

export { AppConfig };
