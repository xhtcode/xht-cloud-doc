import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "xht-cloud-doc",
    lang: 'zh-CN',
    base: "/xht-cloud-doc/",
    themeConfig: {
        siteTitle: '小糊涂微服务',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '工作流', link: '/system/flowable/'},
            {text: '开发规范', link: '/develop/'},
            {text: '首页', link: '/'},
        ],
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        outline: {
            level: [1, 3], // 右侧大纲标题层级
            label: "页面导航", // 右侧大纲标题文本配置
        },
        sidebar: {
            '/system': [
                {text: "SpringBoot", collapsed: true, items: []},
                {text: "SpringCloud", collapsed: true, items: []},
                {text: "Oauth2.1", collapsed: true, items: []},
                {
                    text: 'Flowable',
                    collapsed: true, //显示一个切换按钮来隐藏/显示
                    items: [
                        {
                            text: '简介',
                            link: '/system/flowable/'
                        }
                    ]
                },
                {text: "Docker", collapsed: true, items: []},
            ],
            '/web': [],
            '/develop': []
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
    }


})
