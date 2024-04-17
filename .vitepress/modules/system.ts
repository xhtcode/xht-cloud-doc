export default {
    '/system': [
        {
            text: "JavaSE", collapsed: true, items: [
                {
                    text: "JDK8新特性", collapsed: true, items: [
                        {text: '简介', link: '/system/jdk8/001'},
                        {text: 'Lambda表达式', link: '/system/jdk8/002'},
                        {text: '常用内置函数式接口', link: '/system/jdk8/003'},
                        {text: '方法引用', link: '/system/jdk8/004'},
                        {
                            text: 'Stream流', collapsed: true, items: [
                                {text: '一', link: '/system/jdk8/005'},
                                {text: '二', link: '/system/jdk8/006'},
                                {text: '三', link: '/system/jdk8/007'},
                            ]
                        },
                        {text: '并行Stream流', link: '/system/jdk8/008'},
                        {text: 'Optional类', link: '/system/jdk8/009'},
                        {text: '日期', link: '/system/jdk8/010'}
                    ]
                },
            ]
        },
        {
            text: "SpringBoot", collapsed: true, items: [
                {text: '简介', link: '/system/SpringBoot/001'},
                {text: 'HelloWorld', link: '/system/SpringBoot/002'},
                {text: '基础', link: '/system/SpringBoot/003'},
                {text: '自动装配', link: '/system/SpringBoot/004'},
                {text: 'yaml配置文件', link: '/system/SpringBoot/005'},
                {text: 'web开发', link: '/system/SpringBoot/006'},
                {text: 'web开发', link: '/system/SpringBoot/007'},
                {
                    text: "静态模板", collapsed: true, items: [
                        {text: 'FreeMarker', link: '/system/SpringBoot/008'},
                        {text: 'Thymeleaf', link: '/system/SpringBoot/009'},
                    ]
                },
                {text: '自定义启动器', link: '/system/SpringBoot/start'}
            ]
        },
        {
            text: "日志", collapsed: true, items: [
                {text: 'Logback日志配置', link: '/system/logback/'}
            ]
        },
        {
            text: "持久层", collapsed: true, items: [
                {
                    text: "MyBatis", collapsed: true, items: [
                        {text: 'Mybatis简介', link: '/system/MyBatis/001'},
                        {text: '搭建MyBatis', link: '/system/MyBatis/002'},
                        {text: '核心配置文件详解', link: '/system/MyBatis/003'},
                        {text: '默认的类型别名', link: '/system/MyBatis/004'},
                        {text: 'MyBatis的增删改查', link: '/system/MyBatis/005'},
                        {text: 'MyBatis获取参数值的两种方式（重点）', link: '/system/MyBatis/006'},
                        {text: 'MyBatis的各种查询功能', link: '/system/MyBatis/007'},
                        {text: '特殊SQL的执行', link: '/system/MyBatis/008'},
                        {text: '自定义映射resultMap', link: '/system/MyBatis/009'},
                        {text: '动态SQL', link: '/system/MyBatis/010'},
                        {text: 'MyBatis的缓存', link: '/system/MyBatis/011'},
                        {text: 'MyBatis的逆向工程', link: '/system/MyBatis/012'},
                        {text: '分页插件', link: '/system/MyBatis/013'}
                    ]
                },
                {
                    text: "MyBatisPlus", collapsed: true, items: [
                        {text: '简介', link: '/system/MyBatisPlus/001'},
                        {text: 'HelloWorld', link: '/system/MyBatisPlus/002'},
                        {text: 'Mapper 接口', link: '/system/MyBatisPlus/003'},
                        {text: 'Service接口', link: '/system/MyBatisPlus/004'},
                        {text: '常用注解', link: '/system/MyBatisPlus/005'},
                        {text: 'Wrapper条件构造器', link: '/system/MyBatisPlus/006'},
                        {text: '扩展', link: '/system/MyBatisPlus/007'},
                    ]
                },
            ]
        },
        {
            text: "权限安全", collapsed: true, items: [
                {
                    text: "JWT", collapsed: true, items: [
                        {text: '简介', link: '/system/jwt/001'},
                        {text: '传统认证', link: '/system/jwt/002'},
                        {text: 'JWT组成', link: '/system/jwt/003'},
                        {text: '案例、基础', link: '/system/jwt/004'},
                    ]
                },
                {
                    text: 'SpringSecurity',
                    collapsed: true, //显示一个切换按钮来隐藏/显示
                    items: [
                        {text: '简介', link: '/system/SpringSecurity/001'},
                        {text: '项目准备', link: '/system/SpringSecurity/002'},
                        {text: 'HelloWord', link: '/system/SpringSecurity/003'},
                        {text: '认证', link: '/system/SpringSecurity/004'},
                        {text: '授权', link: '/system/SpringSecurity/005'},
                        {text: '权限校验方式', link: '/system/SpringSecurity/006'},
                        {text: '自定义异常处理', link: '/system/SpringSecurity/007'},
                        {text: '跨域', link: '/system/SpringSecurity/008'},
                        {text: 'CSRF', link: '/system/SpringSecurity/009'},
                        {text: '处理器', link: '/system/SpringSecurity/010'},
                        {text: 'HttpSecurity(常用方法)', link: '/system/SpringSecurity/011'},
                        {text: 'OAuth2.0', link: '/system/SpringSecurity/012'},
                        {text: 'SpringCloudSecurityOAuth2', link: '/system/SpringSecurity/013'},
                        {text: 'OAuth2授权模式', link: '/system/SpringSecurity/014'},
                        {text: 'OAuth2数据表', link: '/system/SpringSecurity/015'},
                        {text: 'OAuth2整合（老版本）', link: '/system/SpringSecurity/016'},
                        {text: 'OAuth2.1改动', link: '/system/SpringSecurity/017'},
                        {text: 'OAuth2.1数据表', link: '/system/SpringSecurity/018'}
                    ]
                },
            ]
        },
        {
            text: "服务监控", collapsed: true, items: [
                {text: 'SpringActuator', link: '/system/monitoring/actuator'},
                {text: 'SpringBootAdmin', link: '/system/monitoring/admin'},
            ]
        },
        {
            text: "微服务", collapsed: true, items: [
                {text: '简介', link: '/system/microservice/001'},
                {text: 'CAP', link: '/system/microservice/002'},
                {text: '项目模块建立', link: '/system/microservice/003'},
                {text: 'RestTemplate', link: '/system/microservice/004'},
                {
                    text: "服务注册中心", collapsed: true, items: [
                        {text: 'Eureka', link: '/system/microservice/005'},
                        {text: 'SpringBootAdmin与Eureka', link: '/system/microservice/006'},
                        {text: 'ZooKeeper', link: '/system/microservice/007'},
                        {text: 'Consul', link: '/system/microservice/008'},
                        {text: 'Nacos', link: '/system/microservice/014'},
                        {text: 'SpringBootAdmin与Nacos', link: '/system/microservice/015'},
                    ]
                },
                {text: 'Ribbon(老版本)', link: '/system/microservice/009'},
                {text: '重要提醒（版本更替问题）', link: '/system/microservice/010'},
                {text: 'spring-cloud-loadbalancer', link: '/system/microservice/011'},
                {text: 'OpenFeign', link: '/system/microservice/012'},
                {text: 'bootstrap.yml', link: '/system/microservice/013'},
                {text: '网关GateWay', link: '/system/microservice/016'},
                {text: 'Sentinel实现熔断与限流', link: '/system/microservice/017'},
                {text: '分布式ID', link: '/system/microservice/id'},
            ]
        },
    ]
}
