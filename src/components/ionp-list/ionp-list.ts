export class IonpList {
  id: string;
  nolines: boolean = false;
  inset: boolean = false;
  groups: IonpListGroup[];
}

export class IonpListGroup {
  id: string;
  style: 'header' | 'dividers' = 'header';
  text: string;
  items: IonpListItem[];
  type: 'text' | 'button' | 'sliding' = 'button';
}

export class IonpListItem {
  id: string;
  detail: boolean = true;
  icon: IonpListIcon;
  title: string;
  subTitle: string;
  description: string;
  class: string;
  input: IonpListForm;
  sliding: IonpListSlidingOption[];
  params: any;
  callback: (item: IonpListItem, params: any) => any;
}

export class IonpListForm {
  type: 'note' | 'button' | 'select' | 'icon' | 'toggle' | 'input' = 'note';
  style: 'text' | 'email' | 'number' | 'tel' | 'url' = 'text';
  name: string;
  color: string;
  text: string;
  value: string | boolean;
  class: string;
  options: IonpListSelectOption[];
  params: any;
  callback: (item: IonpListItem, params: any) => any;
}

export class IonpListIcon {
  type: 'icon' | 'thumbnail' | 'avatar' | 'label';
  style: 'fixed';
  // thumbnail avatar 
  src: string;
  //icon
  name: string;
  color: string;
  //通用
  class: string;
  params: any;
  callback: (item: IonpListItem, params: any) => any;
}

export class IonpListSelectOption {
  text: string;
  value: string;
}

export class IonpListSlidingOption {
  text: string;
  color: string = 'primary';
  name: string;
  class: string;
  callback: (item: IonpListItem, params: any) => any;
  params: any;
}