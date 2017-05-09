let template = {
  divider: `
  <ion-item-divider color="light" *ngIf="group.style==='dividers'">
    {{group?.text}}
  </ion-item-divider>`,
  header: `
  <ion-list-header color="light" *ngIf="group.style==='header'">
    {{group?.text}}
  </ion-list-header>`,
  item: {
    left: `
    <!--left:avatar-->
    <ion-avatar item-left *ngIf="item?.icon?.type==='avatar'">
      <img [src]="item.icon.src">
    </ion-avatar>

    <!--left:thumbnail-->
    <ion-thumbnail item-left *ngIf="item?.icon?.type==='thumbnail'">
      <img [src]="item.icon.src">
    </ion-thumbnail>

    <!--left:icon-->
    <ion-icon [name]="item.icon.name" item-left [color]="item.icon.color" [style.color]="item.icon.color" *ngIf="item?.icon?.type==='icon'">
    </ion-icon>`,
    center: `
    <ion-label>
      <!---Multi-line:title-->
      <h2 *ngIf="item.title">{{item.title}}</h2>

      <!---Multi-line:subTitle-->
      <h3 *ngIf="item.subTitle">{{item.subTitle}}</h3>

      <!---Multi-line:description-->
      <p *ngIf="(item.title||item.subTitle)&&item.description">{{item.description}}</p>

      <!--Single-line:text-->
      <div *ngIf="(!item.title&&!item.subTitle)&&item.description">
        {{item.description}}
      </div>
    </ion-label>
    `,
    right: `
    <!--note-->
    <ion-note item-right *ngIf="item?.input?.type==='note'">
      {{item.input.text}}
    </ion-note>

    <!--icon-->
    <ion-icon [name]='item.input.name' item-right [color]="item.input.color" [style.color]="item.input.color" *ngIf="item?.input?.type==='icon'"></ion-icon>
    
    <!--button-->
    <button ion-button outline item-right *ngIf="item?.input?.type==='button'"> 
      {{item.input.text}}
    </button>

    <!--toggle-->
    <ion-toggle checked="{{item.input.value}}" *ngIf="item?.input?.type==='toggle'"></ion-toggle>

    <!--text-->
    <ion-input type="text" item-right value="{{item.input.value}}" placeholder="{{item.input.text}}" *ngIf="item?.input?.type==='text'"></ion-input>
    
    <!--select-->
    <ion-select [(ngModel)]="item.input.value" *ngIf="item?.input?.type==='select'" >
      <ion-option value="{{option.value}}" *ngFor="let option of item.input.options" >{{option.text}}</ion-option>
    </ion-select>`,
  },
  sliding: {
    options: `
    <ion-item-options side="right" *ngIf="item?.sliding?.length>0">
      <button ion-button [color]="option.color" [color]="option.color" [style.color]="option.color"  *ngFor="let option of item.sliding">
        <ion-icon [name]="option.name"></ion-icon>
        {{option.text}}
      </button>
    </ion-item-options>`,
  }
};

let listItemContentTemplate = `
${template.item.left}
${template.item.center}
${template.item.right}`;

let listItemTemplate = `
<!--item-->
<button ion-item (click)="itemSelected(item)" [attrs]="{'detail-none':!item.detail}">
  ${listItemContentTemplate}
</button>`;

let listTextItemsTemplate = `
<div *ngIf="group.type==='text'">
<!--item-->
  <ion-item ion-item *ngFor="let item of group.items">
    ${listItemContentTemplate}
  </ion-item>
</div>`;

let listButtonItemsTemplate = `
<div *ngIf="group.type==='button'">
<!--item-->
  <button ion-item (click)="itemSelected(item)"  *ngFor="let item of group.items"  [attrs]="{'detail-none':!item.detail}">
    ${listItemContentTemplate}
  </button>
</div>`;

let listSlidingItemsTemplate = `
<div *ngIf="group.type==='sliding'">
  <ion-item-sliding *ngFor="let item of group.items">
    <!--item-->
    ${listItemTemplate}
    <!--sliding options-->
    ${template.sliding.options}
  </ion-item-sliding>
</div>`;

let listTemplate = `
  <ion-list [attrs]="{'no-lines':list.nolines,'inset':list.inset}" *ngIf='list' >
    <ion-item-group *ngFor="let group of list.groups" >
      ${template.divider}
      ${template.header}
      ${listTextItemsTemplate}
      ${listButtonItemsTemplate}
      ${listSlidingItemsTemplate}
    </ion-item-group>
  </ion-list>`;


export let IonpListComponentTemplate = listTemplate;