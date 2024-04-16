export default {
    '/devops': [
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
            text: "Git", collapsed: true, items: [
                {text: '基础', link: '/devops/git/'},
                {text: 'Idea配置', link: '/devops/git/idea'},
                {text: '扩展', link: '/devops/git/appendix'}
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
    ]
}
