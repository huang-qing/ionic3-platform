import { zh_CN } from './i18n/zh-CN';

var COLORS = ["#387ef5", '#000', "#f53d3d", "rebeccapurple", "#FFC125", "#32db64"];
var getColor = function () {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}
var pages = [];

//hello ionic page
var helloIonic = {
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
};
pages.push(helloIonic);

// hello list page 
var helloList = {
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
};
pages.push(helloList);

// list demo page 
var listDemo = {
    id: 'list-demo',
    title: 'LIST_PAGE',
    component: 'list-page',
    api: 'api/lists',
    iconSet: '',
    iconName: 'list-box',
    color: getColor(),
    segments: [{
        text: 'segment1',
        value: '',
        selected: true
    }, {
        text: 'SEGMENT2',
        value: 'segment2',
        selected: false
    }, {
        text: 'segment3',
        value: 'segment3',
        selected: false
    }],
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
        api: 'api/details',
        style: null,
        next: null,
        actions: null
    },
    isNav: true,
    isTabs: true
};
pages.push(listDemo);

// tabs demo page
var tabsDemo = {
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
};
pages.push(tabsDemo);


//chart list page
var chartList = {
    id: 'chart-list',
    title: 'CHARTS_LIST',
    component: 'chart-list-page',
    iconSet: 'evil',
    iconName: 'heart',
    color: getColor(),
    style: null,
    api: 'api/charts',
    next: null,
    actions: null,
    isNav: true,
    isTabs: false
};
pages.push(chartList);

const AppConfig = {
    i18n: {
        name: 'zh-CN',
        content: zh_CN
    },
    rootPage: 'tabs-page',
    router: pages
}

export { AppConfig };
