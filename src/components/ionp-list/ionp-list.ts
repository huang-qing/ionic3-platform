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
  type: 'text' | 'button' | 'sliding' = 'text';
}

export class IonpListItem {
  id: string;
  icon: IonpListIcon;
  title: string;
  subTitle: string;
  description: string;
  class: string;
  input: IonpListInput;
  sliding: IonpListSlidingOption[];
  params: any;
  callback: (item: IonpListItem, params: any) => any;
}

export class IonpListInput {
  type: 'note' | 'button' | 'select' | 'icon' | 'toggle';
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
  type: 'icon' | 'thumbnail' | 'avatar' = 'icon';
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