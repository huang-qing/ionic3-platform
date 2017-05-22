import { PageRouter } from '../models/page-router';

var pagesConfig: PageRouter[] = [
    {
        title: 'HELLO_IONIC',
        component: 'hello-ionic',
        style: null,
        api: '',
        next: null,
        actions: null
    },
    {
        title: 'MY_FIRST_LIST',
        component: 'hello-list',
        style: null,
        api: '',
        next: null,
        actions: null
    },
    //{ title: 'IONIC_LIST_PAGE', component: IonicListPage },
    {
        title: 'LIST_PAGE',
        component: 'list-page',
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
        style: {
            nolines: false,
            inset: false
        },
        next: {
            title: 'DETAIL_PAGE',
            component: 'detail-page',
            api: 'api/items',
            style: null,
            next: null,
            actions: null
        },
        api: 'api/lists'
    }
];

export {
    pagesConfig
}