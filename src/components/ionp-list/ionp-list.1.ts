export class ListGroup {
  name: string;
  items: Array<ListItem>;
  pager: { index: number }
}

export class ListItem {
  title: string;
  description: string;
  note: string;
  icon: ListIcon;
  secondIcon: ListIcon;
  detailPush: boolean;
  options: Array<ListOptions>;
  params: any;
  callback: (item: ListItem, params: any) => any;
}

export class ListIcon {
  text: string;
  name: string;
  src: string;
  class: string;
  color: string;
  params: any;
  callback: (item: ListItem, params: any) => any;
}

export class ListOptions {
  text: string;
  class: string;
  name: string;
  callback: (item: ListItem, params: any) => any;
  params: any;
}