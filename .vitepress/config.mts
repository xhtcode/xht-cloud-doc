import {defineConfig} from 'vitepress'
import devopsModules from './modules/devops'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "xht-cloud-doc",
    lang: 'zh-CN',
    base: "/xht-cloud-doc/",
    lastUpdated: true,
    head: [
        ['link', {rel: 'icon', href: '/xht-cloud-doc/favicon.ico'}],
    ],
    markdown: {
        lineNumbers: true,
        image: {
            // 默认禁用图片懒加载
            lazyLoading: true
        }
    },
    ignoreDeadLinks: true,
    themeConfig: {
        siteTitle: '小糊涂微服务',
        logo: {src: '/favicon.ico', width: 24, height: 24},
        nav: [
            {text: '工具和中间件', link: '/devops/docker/001'},
            {text: '开发文档', link: '/develop/'},
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
                {
                    text: "JDK8新特性", collapsed: true, items: [
                        {text: '一、简介', link: '/system/jdk8/001'},
                        {text: '二、Lambda表达式', link: '/system/jdk8/002'},
                        {text: '三、常用内置函数式接口', link: '/system/jdk8/003'},
                        {text: '四、方法引用', link: '/system/jdk8/004'},
                        {text: '五、Stream流(一)', link: '/system/jdk8/005'},
                        {text: '六、Stream流(二)', link: '/system/jdk8/006'},
                        {text: '七、Stream流(三)', link: '/system/jdk8/007'},
                        {text: '八、并行Stream流', link: '/system/jdk8/008'},
                        {text: '九、Optional类', link: '/system/jdk8/009'},
                        {text: '十、日期', link: '/system/jdk8/010'}
                    ]
                },
                {
                    text: "SpringBoot", collapsed: true, items: [
                        {text: '一、简介',link: '/system/SpringBoot/001'},
                        {text: '二、HelloWorld',link: '/system/SpringBoot/002'},
                        {text: '三、基础',link: '/system/SpringBoot/003'},
                        {text: '四、自动装配',link: '/system/SpringBoot/004'},
                        {text: '五、yaml配置文件',link: '/system/SpringBoot/005'},
                        {text: '六、web开发',link: '/system/SpringBoot/006'},
                        {text: '七、web开发',link: '/system/SpringBoot/007'},
                        {text: '附录·FreeMarker',link: '/system/SpringBoot/008'},
                        {text: '附录·Thymeleaf',link: '/system/SpringBoot/009'},
                    ]
                },
                {text: "LogBack日志配置", link: '/system/logback/'},
                {
                    text: "微服务", collapsed: true, items: [
                        {text: '简介', link: '/system/microservice/001'},
                        {text: 'CAP', link: '/system/microservice/002'},
                        {text: '项目模块建立', link: '/system/microservice/003'},
                        {text: 'RestTemplate', link: '/system/microservice/004'},
                        {text: 'SpringActuator', link: '/system/microservice/005'},
                        {text: 'Spring Boot Admin', link: '/system/microservice/006'},
                        {text: 'Eureka', link: '/system/microservice/007'},
                        {text: 'SpringBootAdmin与Eureka', link: '/system/microservice/008'},
                        {text: 'ZooKeeper', link: '/system/microservice/009'},
                        {text: 'Consul', link: '/system/microservice/010'},
                        {text: 'Ribbon(老版本)', link: '/system/microservice/011'},
                        {text: '重要提醒（版本更替问题）', link: '/system/microservice/012'},
                        {text: 'spring-cloud-loadbalancer', link: '/system/microservice/013'},
                        {text: 'OpenFegin', link: '/system/microservice/014'},
                        {text: 'bootstarp.yml', link: '/system/microservice/015'},
                        {text: 'Nacos', link: '/system/microservice/016'},
                        {text: 'SpringBootAdmin与Nacos', link: '/system/microservice/017'},
                        {text: '网关GateWay', link: '/system/microservice/018'},
                        {text: 'Sentinel实现熔断与限流', link: '/system/microservice/019'},
                        {text: '分布式ID', link: '/system/microservice/id'},
                    ]
                },
                {text: "Oauth2.1", collapsed: true, items: []},
                {
                    text: 'Flowable',
                    collapsed: true, //显示一个切换按钮来隐藏/显示
                    items: [
                        {text: '简介', link: '/system/flowable/'}
                    ]
                },
            ],
            '/web': [],
            '/develop': [],
            ...devopsModules
        },
        socialLinks: [
            // {
            //     icon: {svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1711680016792" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5075" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="5076"></path></svg>'},
            //     link: 'https://gitee.com/xhtrepo/xht-cloud-doc',
            // },
            // {icon: 'github', link: 'https://github.com/xhtcode/xht-cloud-doc'},

        ],
        // editLink: {
        //     text: '在 GitHub 上编辑此页面',
        //     pattern: ({filePath}) => {
        //         // return `https://gitee.com/xhtcode/xht-cloud-doc/edit/${filePath}`
        //         return `https://github.com/xhtcode/xht-cloud-doc/edit/master/${filePath}`
        //     },
        // },
        lastUpdated: {
            text: '最近修改时间',
        },
        footer: {
            copyright: 'Copyright@ 2023 Albert 小糊涂 '
        }
    }


})
