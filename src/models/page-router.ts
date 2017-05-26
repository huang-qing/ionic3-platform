
export class PageRouter {
    id: string;
    title: string;
    component: string;
    style: any;
    api: string;
    next: PageRouter | null;
    actions: any;
}