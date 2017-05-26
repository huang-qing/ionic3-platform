
export class PageRouter {
    id: string;
    title: string;
    component: string;
    style: any;
    iconSet: string;
    iconName: string;
    color: string;
    api: string;
    next: PageRouter | null;
    actions: any;
}