// import { ListItem, ListGroup } from './ionp-list';

// export var ICONS = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
//     'american-football', 'boat', 'bluetooth', 'build'];

// export var COLORS = ["#387ef5", '#000', "#f53d3d", "rebeccapurple", "#FFC125", "#32db64"]

// export var ITEMS: () => Array<ListItem> = function () {
//     var items: Array<ListItem> = [];
//     for (let i = 1; i < 10; i++) {
//         items.push({
//             title: 'Item ' + i,
//             note: 'This is item #' + i,
//             callback: function (item, params) { },
//             icon: {
//                 name: ICONS[Math.floor(Math.random() * ICONS.length)],
//                 text: "",
//                 src: "",
//                 class: "icon-customer",
//                 color: COLORS[Math.floor(Math.random() * COLORS.length)],
//                 params: {},
//                 callback: function (item, params) { },
//             },
//             description: "description" + i,
//             secondIcon: {
//                 text: "view",
//                 name: "",
//                 src: "",
//                 class: "icon-customer",
//                 color: COLORS[Math.floor(Math.random() * COLORS.length)],
//                 params: {},
//                 callback: function (item, params) { },
//             },
//             detailPush: i % 3 === 0 ? true : false,
//             params: {},
//             options: i % 2 === 0 ? [{
//                 text: "call",
//                 class: "button-secondary",
//                 name: "call",
//                 callback: function (item, params) { },
//                 params: {}
//             },
//                 {
//                     text: "text",
//                     class: "button-primary",
//                     callback: function (item, params) { },
//                     name: "text",
//                     params: {}
//                 }] : [],
//         });
//     }

//     return items;
// };

// export var GROUPS: () => Array<ListGroup> = function () {
//     var groups: Array<ListGroup> = [];
//     for (let i = 1; i < 10; i++) {
//         groups.push({
//             name: i !== 4 ? "group" + i : "",
//             items: ITEMS(),
//             pager:{index:1}
//         });
//     }
//     return groups;
// };

