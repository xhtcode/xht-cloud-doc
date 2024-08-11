export default {
    '/devops': [
        {
            text: "Git", collapsed: true, items: [
                {text: '基础', link: '/devops/git/'},
                {text: 'Idea配置', link: '/devops/git/idea'},
                {text: '扩展', link: '/devops/git/appendix'}
            ]
        },
        {
            text: "数据库", collapsed: true, items: [
                {
                    text: "MySql初级", collapsed: true, items: [
                        {text: '一、简介', link: '/devops/mysql/001'},
                        {text: '二、基础', link: '/devops/mysql/002'},
                        {text: '三、查询（一）', link: '/devops/mysql/003'},
                        {text: '四、查询(二)', link: '/devops/mysql/004'},
                        {text: '五、查询(三)', link: '/devops/mysql/005'},
                        {text: '六、流程控制', link: '/devops/mysql/006'},
                        {text: '七、增删改', link: '/devops/mysql/007'},
                        {text: '八、表和列', link: '/devops/mysql/008'},
                        {text: '九、事务', link: '/devops/mysql/009'},
                        {text: '十、触发器', link: '/devops/mysql/010'},
                        {text: '十一、存储过程', link: '/devops/mysql/011'},
                    ]
                },
                {
                    text: "MySql高级", collapsed: true, items: [
                        {text: '简介', link: '/devops/mysql/012'},
                        {text: '用户与权限管理', link: '/devops/mysql/013'},
                        {text: 'sql_mode', link: '/devops/mysql/014'},
                        {text: '逻辑架构介绍', link: '/devops/mysql/015'},
                        {text: 'Mysql存储引擎', link: '/devops/mysql/016'},
                        {
                            text: "索引", collapsed: true, items: [
                                {text: '一', link: '/devops/mysql/017'},
                                {text: '二', link: '/devops/mysql/018'}
                            ]
                        },

                    ]
                },
                {
                    text: "MySql安装", collapsed: true, items: [
                        {text: 'MySql8安装-Win', link: '/devops/mysql/win-8'},
                    ]
                },
                {
                    text: "Oracle", collapsed: true, items: [
                        {
                            text: "Oracle安装", collapsed: true, items: [
                                {text: '11G安装-Linux', link: '/devops/oracle/linux-11g'},
                            ]
                        },
                    ]
                },
                {
                    text: "常用Sql总结", collapsed: true, items: [
                        {text: 'MySql递归查询', link: '/devops/mysql/sql-deep'},
                    ]
                },
                {
                    text: "Redis", collapsed: true, items: [
                        {text: '简介/安装', link: '/devops/redis/001'},
                        {text: 'Key(键)', link: '/devops/redis/002'},
                        {text: '数据类型', link: '/devops/redis/003'},
                        {text: '配置文件redis.conf', link: '/devops/redis/004'},
                        {text: '发布订阅', link: '/devops/redis/005'},
                        {text: '持久化', link: '/devops/redis/006'},
                        {text: '事务', link: '/devops/redis/007'},
                        {text: '删除策略|逐出(淘汰)策略', link: '/devops/redis/008'},
                        {text: '主从复制', link: '/devops/redis/009'},
                        {text: '哨兵模式', link: '/devops/redis/010'},
                        {text: '集群', link: '/devops/redis/011'},
                        {text: 'Jedis', link: '/devops/redis/012'},
                        {text: '整合SpringBoot', link: '/devops/redis/013'},
                        {text: '应用问题', link: '/devops/redis/014'}
                    ]
                },
                {
                    text: "MongoDB", collapsed: true, items: [
                        {text: '简介', link: '/devops/mongoDB/001'},
                        {text: '数据库，集合，数据介绍', link: '/devops/mongoDB/002'},
                        {text: '基础命令', link: '/devops/mongoDB/003'},
                        {text: '索引', link: '/devops/mongoDB/004'},
                        {text: '副本集', link: '/devops/mongoDB/005'},
                        {text: '分片', link: '/devops/mongoDB/006'},
                        {
                            text: "附录", collapsed: true, items: [
                                {text: '数据导出导入', link: '/devops/mongoDB/007'},
                                {text: 'rs.status()命令详解', link: '/devops/mongoDB/009'},
                                {text: 'SpringBoot整合案例评论', link: '/devops/mongoDB/008'},
                            ]
                        },

                    ]
                },
            ]
        },
        {
            text: "分布式存储", collapsed: true, items: [
                {
                    text: "Minio", collapsed: true, items: [
                        {text: '简介', link: '/devops/minio/001'},
                        {text: 'windows安装', link: '/devops/minio/002'},
                        {text: 'Docker安装', link: '/devops/minio/003'},
                    ]
                }
            ]
        },
        {
            text: "Linux", collapsed: true, items: [
                {text: "常用命令", link: '/devops/linux/cmd'},
                {text: "服务自启动", link: '/devops/linux/starting'},
                {text: "时间同步", link: '/devops/linux/time'},
                {text: "文件传输", link: '/devops/linux/sync'},
                {text: "Boot启动/关闭脚本", link: '/devops/linux/boot'},
            ]
        },
        {
            text: "Nginx", collapsed: true, items: [
                {text: '一、简介', link: '/devops/nginx/001'},
                {text: '二、基础内容', link: '/devops/nginx/002'},
                {text: '三、基础配置实战', link: '/devops/nginx/003'},
                {text: '四、静态资源配置', link: '/devops/nginx/004'},
                {text: '五、Rewrite功能配置', link: '/devops/nginx/005'},
                {text: '六、正/反向代理', link: '/devops/nginx/006'},
                {text: '七、nginx和ssl使用', link: '/devops/nginx/007'},
                {text: '八、负载均衡', link: '/devops/nginx/008'},
                {text: '九、Nginx缓存集成', link: '/devops/nginx/009'},
                {text: '十、Nginx实现服务器端集群搭建', link: '/devops/nginx/010'},
                {text: '十一、下载站点', link: '/devops/nginx/011'},
                {text: '十二、Nginx的用户认证模块', link: '/devops/nginx/012'},
                {text: '十三、Nginx的扩展模块-LUA', link: '/devops/nginx/013'},
            ]
        },
        {
            text: "容器化", collapsed: true, items: [
                {
                    text: "Docker", collapsed: true, items: [
                        {text: '简介', link: '/devops/docker/001'},
                        {text: '安装及配置', link: '/devops/docker/002'},
                        {text: 'Docker镜像', link: '/devops/docker/003'},
                        {text: '数据卷', link: '/devops/docker/004'},
                        {text: 'Docker私有库', link: '/devops/docker/005'},
                        {text: 'DockerFile', link: '/devops/docker/006'},
                        {text: 'Docker网络', link: '/devops/docker/007'},
                        {text: '微服务实战', link: '/devops/docker/008'},
                        {text: '命令使用说明', link: '/devops/docker/009'},
                    ]
                },
                {
                    text: "Docker常用安装", collapsed: true, items: [
                        {text: 'Mysql单机安装', link: '/devops/docker/install-mysql'},
                        {text: 'Tomcat单机安装', link: '/devops/docker/install-redis'},
                        {text: 'Redis单机安装', link: '/devops/docker/install-tomcat'},
                    ]
                }
            ]
        },
        {
            text: "消息中间件", collapsed: true, items: [
                {
                    text: "RabbitMQ", collapsed: true, items: [
                        {text: '基础', link: '/devops/rabbitmq/RabbitMQ'},
                        {text: '高级', link: '/devops/rabbitmq/RabbitMQ-Plus'},
                    ]
                }
            ]
        }
    ]
}
