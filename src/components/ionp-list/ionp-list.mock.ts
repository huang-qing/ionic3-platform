import {
    IonpList, IonpListItem, IonpListGroup, IonpListIcon,
    IonpListInput, IonpListSlidingOption, IonpListSelectOption
} from './ionp-list';
// icon name
let ICONSNAME = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
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
    return {
        type: "thumbnail",
        src: THUMBNAIL[Math.floor(Math.random() * THUMBNAIL.length)],
        name: null,
        color: null,
        class: null,
        params: null,
        callback: null
    }
}

//get icon
let getIcon = function (): IonpListIcon {

    return {
        type: 'icon',
        name: ICONSNAME[Math.floor(Math.random() * ICONSNAME.length)],
        src: "",
        class: "icon-customer",
        color: COLORSNAME[Math.floor(Math.random() * COLORSNAME.length)],
        params: {},
        callback: function (item, params) { }
    }
}

// get avatar
let getAvatar = function (): IonpListIcon {

    return {
        type: "avatar",
        src: AVATARS[Math.floor(Math.random() * AVATARS.length)],
        name: null,
        color: null,
        class: null,
        params: null,
        callback: null
    }
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
let getInput = function (type): IonpListInput {

    var text = "view",
        value: boolean | string = true,
        name = ICONSNAME[Math.floor(Math.random() * ICONSNAME.length)],
        color = COLORSNAME[Math.floor(Math.random() * COLORSNAME.length)],
        options: IonpListSelectOption[] = [];

    switch (type) {
        case 'note':
            text = "note";
            break;
        case 'icon':
            break;
        case 'text':
            text = "placeholder";
            value = "";
            break;
        case 'select':
            value = "n64";
            options = SELECTOPTIONS;
            break;
        default:
            break;
    }

    return {
        type: type,
        text: text,
        value: value,
        name: name,
        class: null,
        color: color,
        options: options,
        params: {},
        callback: function (item, params) { }
    }
}

//sliding
let getSliding = function (): IonpListSlidingOption[] {
    let sliding: IonpListSlidingOption[] = [],
        names = ['call', 'text', 'more'],
        name;

    for (var i = 0; i < 3; i++) {
        name = names[i];
        sliding.push({
            text: name,
            color: COLORSNAME[Math.floor(Math.random() * COLORSNAME.length)],
            class: "",
            name: name,
            callback: function (item, params) { },
            params: {}
        });
    }

    return sliding;
};

//Basic Items
let BasicItems = (function () {
    let items: Array<IonpListItem> = [],
        descriptions = ['Pokémon Yellow', 'Super Metroid', 'Mega Man X'],
        descriptioin;

    //Basic
    for (var i = 0; i < 3; i++) {
        descriptioin = descriptions[i];
        items.push({
            id: null,
            title: null,
            subTitle: null,
            description: descriptioin,
            class: null,
            icon: null,
            input: null,
            sliding: null,
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
            id: null,
            title: title,
            subTitle: subTitle,
            description: descriptioin,
            class: null,
            icon: getAvatar(),
            input: null,
            sliding: null,
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
            id: null,
            title: title,
            subTitle: subTitle,
            description: descriptioin,
            class: null,
            icon: getThumbnail(),
            input: null,
            sliding: null,
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
            id: null,
            title: title,
            subTitle: subTitle,
            description: descriptioin,
            class: null,
            icon: getIcon(),
            input: null,
            sliding: null,
            params: {},
            callback: function (item, params) { }
        });
    }

    return items;
})();

//Input Items
let InputItems = (function () {
    let items: Array<IonpListItem> = [],
        titles = [null, 'Finn', 'Finn', 'Finn', 'Finn', 'Finn'],
        subTitles = [null, "Don't Know What To Do!", "Don't Know What To Do!", null, null, null],
        descriptioins = ['Pokémon Yellow', "I've had a pretty messed up day. If we just",
            null, "I've had a pretty messed up day. If we just", null, null],
        icons = [
            getIcon(),
            getIcon(),
            getIcon(),
            getIcon(),
            getIcon(),
            getIcon()
        ],
        inputs = [
            getInput('note'),
            getInput('icon'),
            getInput('button'),
            getInput('toggle'),
            getInput('text'),
            getInput('select')
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
            id: null,
            title: title,
            subTitle: subTitle,
            description: descriptioin,
            class: null,
            icon: icon,
            input: input,
            sliding: getSliding(),
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
            id: null,
            title: title,
            subTitle: subTitle,
            description: descriptioin,
            class: null,
            icon: icon,
            input: null,
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
            //dividers:A
            'A',
            //dividers:B,
            'B',
            'Basic',
            'Avatar',
            'Thumbnail',
            'Icon',
            'Sliding',
            'Input'
        ],
        types = [
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
            BasicItems,
            BasicItems,
            BasicItems,
            AvatarItems,
            ThumbnailItems,
            IconItems,
            SlidingItems,
            InputItems
        ],
        text,
        type,
        items;

    for (var i = 0, len = texts.length; i < len; i++) {
        text = texts[i];
        type = types[i];
        items = listItems[i];

        groups.push({
            text: text,
            type: type,
            id: i.toString(),
            items: items
        });
    }

    return groups;
})();

//List Mock
export let IonpListMock: IonpList = {
    id: '1',
    nolines: false,
    inset: false,
    groups: GROUPS
}