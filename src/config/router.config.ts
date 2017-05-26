import { Injectable } from '@angular/core';
import { PageRouter } from '../models/page-router';

var COLORS = ["#387ef5", '#000', "#f53d3d", "rebeccapurple", "#FFC125", "#32db64"];
var getColor = function () {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

var pages: any = [{
    id: 'hello-ionic',
    title: 'HELLO_IONIC',
    component: 'hello-ionic',
    iconSet: '',
    iconName: 'ionic',
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
    title: 'TABS-DEMO',
    component: 'tabs-page',
    style: null,
    iconSet: '',
    iconName: 'appstore',
    color: getColor(),
    api: '',
    next: null,
    actions: null,
    isNav: true,
    isTabs: false
},];

@Injectable()
export class RouterConfig {

    private pages: PageRouter[] = pages;
    private navs: PageRouter[];
    private tabs: PageRouter[];
    private pagesHash;
    private navsHash;
    private tabsHash;
    public rootPage;

    constructor() {
        this.navs = this.getConfigByType('nav');
        this.tabs = this.getConfigByType('tabs');
        this.pagesHash = this.getConfigHash(this.pages);
        this.navsHash = this.getConfigHash(this.navs);
        this.tabsHash = this.getConfigHash(this.tabs);
        this.rootPage = 'tabs-page';
    }

    public getPageConfigById = function (id: string): string {

        return this.pagesHash[id] || null;
    }

    private getConfigByType = function (type) {
        var pages = this.pages,
            config = [];

        pages.forEach((page, index, array) => {
            if (type === 'nav' && page.isNav) {
                config.push(page);
            }
            else if (type === 'tabs' && page.isTabs) {
                config.push(page);
            }
        });

        return config;
    }

    public getRouter = function (): PageRouter[] {
        return this.pages;
    };

    public getNavRouter = function (): PageRouter[] {
        return this.navs;
    };

    public getTabsRouter = function (): PageRouter[] {
        return this.tabs;
    };

    private getConfigHash = function (config: PageRouter[]) {
        var confighash = {};

        config.forEach((page, index, pages) => {
            confighash[page.id] = page;
        });
        return confighash;
    }

    public getPagesConfigHash = function () {
        return this.pagesHash;
    }

    public getNavConfigHash = function () {
        return this.navHash;
    }

    public getTabsConfiHash = function () {
        return this.tabsHash;
    }

    public getPagesRouterHash = function () {
        return this.pagesHash;
    };

    public getNavRouterHash = function () {
        return this.navHash;
    };

    public getTabsRouterHash = function () {
        return this.tabsHash;
    };
}