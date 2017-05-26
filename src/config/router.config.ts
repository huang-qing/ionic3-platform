import { Injectable } from '@angular/core'
import { PageRouter } from '../models/page-router';

var pages: any = [{
    id: 'hello-ionic',
    title: 'HELLO_IONIC',
    component: 'hello-ionic',
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
    api: '',
    next: null,
    actions: null,
    isNav: false,
    isTabs: true
}, {
    id: 'demo',
    title: 'LIST_PAGE',
    component: 'list-page',
    api: 'api/lists',
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
}];

@Injectable()
export class RouterConfig {

    private pages: PageRouter[] = pages;
    private navs: PageRouter[];
    private tabs: PageRouter[];
    private pagesHash;
    private navsHash;
    private tabsHash;

    constructor() {
        this.navs = this.getConfigByType('nav');
        this.tabs = this.getConfigByType('tabs');
        this.pagesHash = this.getConfigHash(this.pages);
        this.navsHash = this.getConfigHash(this.navs);
        this.tabsHash = this.getConfigHash(this.tabs);
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

    public getRouter = function () {
        return this.pages;
    };

    public getNavRouter = function () {
        return this.navs;
    };

    public getTabsRouter = function () {
        return this.tabs;
    };

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