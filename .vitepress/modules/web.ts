export default {
    '/web': [
        {
            text: 'Vue2', collapsed: true, items: [
                {text: '简介', link: '/web/vue2/001'},
                {text: 'HelloWorld', link: '/web/vue2/002'},
                {
                    text: 'VUE基础', collapsed: true, items: [
                        {text: '基础一', link: '/web/vue2/003'},
                        {text: '基础二', link: '/web/vue2/004'},
                        {text: '基础三', link: '/web/vue2/005'},
                    ]
                },
                {text: '组件化编程', link: '/web/vue2/006'},
                {text: 'VUE脚手架(一）', link: '/web/vue2/007'},
                {text: 'VUE脚手架(二)', link: '/web/vue2/008'},
                {text: 'Vuex', link: '/web/vue2/009'},
                {text: '路由', link: '/web/vue2/010'},
                {text: 'VueUI库', link: '/web/vue2/011'},
                {text: 'vue init、ui、create', link: '/web/vue2/012'},
                {
                    text: '项目练习', collapsed: true, items: [
                        {text: 'TodoList', link: '/web/vue2/013'},
                        {text: 'GitHub搜索', link: '/web/vue2/014'},
                    ]
                }
            ]
        },
        {
            text: 'Vue3', collapsed: true, items: []
        },
        {
            text: 'Vue插件整理', link: '/web/'
        }
    ]
}
