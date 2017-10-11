import {
    IonpList, IonpListItem, IonpListGroup, IonpListIcon,
    IonpListForm, IonpListSlidingOption, IonpListSelectOption
} from './ionp-list';


// icon name
let ICONSNAME = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
let CUSTOMICONSNAME = ['heart', 'star', 'trash'];
// button color
let COLORS = ["#387ef5", '#000', "#f53d3d", "rebeccapurple", "#FFC125", "#32db64"];
// icon color
let COLORSNAME = [
    'default',
    'secondary',
    'danger',
    //'light',
    'dark'
];

//avatars
let AVATARS = ["assets/img/avatar-ts-woody.png",
    "assets/img/avatar-ts-buzz.png",
    "assets/img/avatar-ts-jessie.png",
    "assets/img/avatar-ts-potatohead.png",
    "assets/img/avatar-ts-hamm.png",
    "assets/img/avatar-ts-slinky.png",
    "assets/img/avatar-ts-rex.png",
    "assets/img/avatar-ts-bullseye.png",
    "assets/img/avatar-ts-squeeze.png",
    "assets/img/avatar-ts-sarge.png",
    "assets/img/avatar-ts-bopeep.png"
];

//thumbnail
let THUMBNAIL = ["assets/img/thumbnail-totoro.png",
    "assets/img/thumbnail-rotla.png",
    "assets/img/thumbnail-ghostbusters.png",
    "assets/img/thumbnail-batman.png",
    "assets/img/thumbnail-bttf.png",
    "assets/img/thumbnail-esb.png",
    "assets/img/thumbnail-terminator.png"
];


//get thumbnail
let getThumbnail = function (): IonpListIcon {

    var thumbnail = new IonpListIcon();
    thumbnail.type = "thumbnail";
    thumbnail.src = THUMBNAIL[Math.floor(Math.random() * THUMBNAIL.length)];

    return thumbnail;
}

//get icon
let getIcon = function (): IonpListIcon {

    var icon = new IonpListIcon();
    icon.type = 'icon';
    icon.iconName = ICONSNAME[Math.floor(Math.random() * ICONSNAME.length)];
    icon.color = COLORS[Math.floor(Math.random() * COLORS.length)];

    return icon;
}

let getCustomIcon = function (): IonpListIcon {

    var icon = new IonpListIcon();
    icon.type = 'icon';
    icon.iconSet = 'evil';
    icon.iconName = CUSTOMICONSNAME[Math.floor(Math.random() * CUSTOMICONSNAME.length)];
    icon.color = COLORS[Math.floor(Math.random() * COLORS.length)];

    return icon;
}

// get avatar
let getAvatar = function (): IonpListIcon {

    var avatar = new IonpListIcon();
    avatar.type = 'avatar';
    avatar.src = AVATARS[Math.floor(Math.random() * AVATARS.length)];

    return avatar;
}

let SELECTOPTIONS = (function (): IonpListSelectOption[] {
    return [{
        text: 'NES',
        value: 'nes'
    }, {
        text: 'Nintendo64',
        value: 'n64'
    }, {
        text: 'PlayStation',
        value: 'ps'
    }, {
        text: 'Sega Genesis',
        value: 'genesis'
    }, {
        text: 'Sega Saturn',
        value: 'saturn'
    }, {
        text: 'SNES',
        value: 'snes'
    }]
})();


//get input
let getForm = function (type, style): IonpListForm {

    var text = "view",
        value: boolean | string = true,
        style: any = style || 'text',
        name = ICONSNAME[Math.floor(Math.random() * ICONSNAME.length)],
        customName = CUSTOMICONSNAME[Math.floor(Math.random() * ICONSNAME.length)],
        color = COLORSNAME[Math.floor(Math.random() * COLORSNAME.length)],
        options: IonpListSelectOption[] = [],
        listForm = new IonpListForm();

    switch (type) {
        case 'note':
            text = "note";
            break;
        case 'icon':
            break;
        case 'text':
            text = "text";
            value = "Hello";
            //style = 'number';
            break;
        case 'select':
            value = "n64";
            options = SELECTOPTIONS;
            break;
        default:
            break;
    }

    switch (style) {
        case 'number':
            text = style;
            value = "123";
            break;
        default:
            break;
    }

    listForm.type = type;
    listForm.text = text;
    listForm.style = style;
    listForm.value = value;
    listForm.color = color;
    listForm.options = options;

    if (Math.floor(Math.random() * 2)) {
        listForm.iconName = customName;
        listForm.iconSet = 'evil';
    } else {
        listForm.iconName = name;
    }

    return listForm;
}

//sliding
let getSliding = function (): IonpListSlidingOption[] {
    let sliding: IonpListSlidingOption[] = [],
        names = ['call', 'text', 'more'],
        name,
        customName = CUSTOMICONSNAME[Math.floor(Math.random() * ICONSNAME.length)],
        slidingOption;

    for (var i = 0; i < 3; i++) {
        name = names[i];
        slidingOption = new IonpListSlidingOption();
        slidingOption.text = name;
        slidingOption.iconName = name;
        //slidingOption.color = COLORSNAME[Math.floor(Math.random() * COLORSNAME.length)];
        slidingOption.color = COLORS[Math.floor(Math.random() * COLORS.length)];

        if (i % 2) {
            slidingOption.iconName = customName;
            slidingOption.iconSet = 'evil';
        } else {
            slidingOption.iconName = name;
        }
        sliding.push(slidingOption);
    }

    return sliding;
};

// 模拟的guid，in-memory-data模拟不出来，直接返回空做为演示吧
let getGUID = (function () {
    //var i = 1;
    return function () {
        return "";
        //return `ionp-list-item-${i++}`;
    }
})();

//Basic Items
let BasicItems = (function () {
    let items: Array<IonpListItem> = [],
        descriptions = ['Pokémon Yellow', 'Super Metroid', 'Mega Man X'],
        descriptioin;

    //Basic
    for (var i = 0; i < 3; i++) {
        descriptioin = descriptions[i];
        items.push({
            id: getGUID(),
            title: descriptioin,
            subTitle: null,
            description: '',
            class: null,
            icon: null,
            input: null,
            inputValue: '',
            sliding: null,
            arrow: i === 1 ? false : true,
            params: {},
            callback: function (item, params) { }
        });
    }

    return items;
})();

//Basic Items
let BasicAItems = (function () {
    let items: Array<IonpListItem> = [],
        descriptions = ['Pokémon Yellow', 'Super Metroid', 'Mega Man X'],
        descriptioin;

    //Basic
    for (var i = 0; i < 3; i++) {
        descriptioin = descriptions[i];
        items.push({
            id: getGUID(),
            title: null,
            subTitle: null,
            description: descriptioin,
            class: null,
            icon: null,
            input: null,
            inputValue: '',
            sliding: null,
            arrow: i === 1 ? false : true,
            params: {},
            callback: function (item, params) { }
        });
    }

    return items;
})();

//Basic Items
let BasicBItems = (function () {
    let items: Array<IonpListItem> = [],
        descriptions = ['Pokémon Yellow', 'Super Metroid', 'Mega Man X'],
        descriptioin;

    //Basic
    for (var i = 0; i < 3; i++) {
        descriptioin = descriptions[i];
        items.push({
            id: getGUID(),
            title: null,
            subTitle: null,
            description: descriptioin,
            class: null,
            icon: null,
            input: null,
            inputValue: '',
            sliding: null,
            arrow: i === 1 ? false : true,
            params: {},
            callback: function (item, params) { }
        });
    }

    return items;
})();

//Avatar Items
let AvatarItems = (function () {
    let items: Array<IonpListItem> = [],
        titles = [null, 'Finn', 'Finn'],
        subTitles = [null, "Don't Know What To Do!", "Don't Know What To Do!"],
        descriptioins = ['Pokémon Yellow', "I've had a pretty messed up day. If we just", null],
        title,
        subTitle,
        descriptioin;

    for (var i = 0; i < 3; i++) {
        title = titles[i];
        subTitle = subTitles[i];
        descriptioin = descriptioins[i];

        items.push({
            id: getGUID(),
            title: title,
            subTitle: subTitle,
            description: descriptioin,
            class: null,
            icon: getAvatar(),
            input: null,
            inputValue: '',
            sliding: null,
            arrow: i == 0 ? false : true,
            params: {},
            callback: function (item, params) { }
        });
    }

    return items;
})();

//Thumbnail Items
let ThumbnailItems = (function () {
    let items: Array<IonpListItem> = [],
        titles = [null, 'Finn', 'Finn'],
        subTitles = [null, "Don't Know What To Do!", "Don't Know What To Do!"],
        descriptioins = ['Pokémon Yellow', "I've had a pretty messed up day. If we just", null],
        title,
        subTitle,
        descriptioin;

    for (var i = 0; i < 3; i++) {
        title = titles[i];
        subTitle = subTitles[i];
        descriptioin = descriptioins[i];

        items.push({
            id: getGUID(),
            inputValue: '',
            title: title,
            subTitle: subTitle,
            description: descriptioin,
            class: null,
            icon: getThumbnail(),
            input: null,
            sliding: null,
            arrow: i === 0 ? false : true,
            params: {},
            callback: function (item, params) { }
        });
    }

    return items;
})();

//Icon Items
let IconItems = (function () {
    let items: Array<IonpListItem> = [],
        titles = [null, 'Finn', 'Finn'],
        subTitles = [null, "Don't Know What To Do!", "Don't Know What To Do!"],
        descriptioins = ['Pokémon Yellow', "I've had a pretty messed up day. If we just", null],
        title,
        subTitle,
        descriptioin;

    for (var i = 0; i < 3; i++) {
        title = titles[i];
        subTitle = subTitles[i];
        descriptioin = descriptioins[i];

        items.push({
            id: getGUID(),
            inputValue: '',
            title: title,
            subTitle: subTitle,
            description: descriptioin,
            class: null,
            icon: i % 2 ? getCustomIcon() : getIcon(),
            input: null,
            sliding: null,
            arrow: i === 0 ? false : true,
            params: {},
            callback: function (item, params) { }
        });
    }

    return items;
})();

//Input Items
let InputItems = (function () {
    let items: Array<IonpListItem> = [],
        titles = [null, 'Finn', 'Finn', 'Finn', 'Finn', 'Finn', 'number', 'prompt'],
        subTitles = [null, "Don't Know What To Do!", "Don't Know What To Do!", null, null, null],
        descriptioins = ['Pokémon Yellow', "I've had a pretty messed up day. If we just",
            null, "I've had a pretty messed up day. If we just", null, null],
        icons = [
            getIcon(),
            getCustomIcon(),
            getIcon(),
            getCustomIcon(),
            getIcon(),
            getCustomIcon(),
            getCustomIcon(),
            getCustomIcon()
        ],
        inputs = [
            getForm('note', null),
            getForm('icon', null),
            getForm('button', null),
            getForm('toggle', null),
            getForm('select', null),
            getForm('text', null),
            getForm('text', 'number'),
            getForm('prompt', null)
        ],
        icon,
        input,
        title,
        subTitle,
        descriptioin;

    for (var i = 0, len = inputs.length; i < len; i++) {
        title = titles[i];
        subTitle = subTitles[i];
        descriptioin = descriptioins[i];
        icon = icons[i];
        input = inputs[i];


        items.push({
            id: getGUID(),
            title: title,
            inputValue: '',
            subTitle: subTitle,
            description: descriptioin,
            class: null,
            icon: icon,
            input: input,
            sliding: getSliding(),
            arrow: true,
            params: {},
            callback: function (item, params) { }
        });
    }

    return items;
})();

//Sliding Items
let SlidingItems = (function () {
    let items: Array<IonpListItem> = [],
        titles = [null, 'Finn', 'Finn'],
        subTitles = [null, "Don't Know What To Do!", "Don't Know What To Do!"],
        descriptioins = ['Pokémon Yellow', "I've had a pretty messed up day. If we just", null],
        icons = [
            getThumbnail(),
            getIcon(),
            getAvatar()
        ],
        icon,
        title,
        subTitle,
        descriptioin;

    for (var i = 0; i < 3; i++) {
        title = titles[i];
        subTitle = subTitles[i];
        descriptioin = descriptioins[i];
        icon = icons[i];


        items.push({
            id: getGUID(),
            inputValue: '',
            title: title,
            subTitle: subTitle,
            description: descriptioin,
            class: null,
            icon: icon,
            input: null,
            arrow: true,
            sliding: getSliding(),
            params: {},
            callback: function (item, params) { }
        });
    }

    return items;
})();

//Groups
let GROUPS = (function (): IonpListGroup[] {
    var groups: IonpListGroup[] = [],
        texts = [
            'A',
            'B',
            'Basic',
            'Avatar',
            'Thumbnail',
            'Icon',
            'Sliding',
            'Input'
        ],
        styles = [
            'dividers',
            'dividers',
            'header',
            'header',
            'header',
            'header',
            'header',
            'header'
        ],
        listItems = [
            BasicAItems,
            BasicBItems,
            BasicItems,
            AvatarItems,
            ThumbnailItems,
            IconItems,
            SlidingItems,
            InputItems
        ],
        text,
        type,
        style,
        items;

    for (var i = 0, len = texts.length; i < len; i++) {
        text = texts[i];
        style = styles[i];
        items = listItems[i];
        type = 'text';

        //button
        if (i >= 2 && i < 6) {
            type = 'button';
        }
        //sliding
        else if (i === 6) {
            type = 'sliding';
        }

        groups.push({
            text: text,
            style: style,
            id: `ionp-list-group-${i.toString()}`,
            items: items,
            type: type
        });
    }

    return groups;
})();

//List Mock
export let IonpListMock: IonpList = {
    id: 'ionp-list-mock',
    nolines: false,
    inset: false,
    groups: GROUPS
}

//List Group Mock
export let ionpListGroupsMock: IonpListGroup[] = GROUPS;