## 配置service

自定义文件：`xxx.service`

放在: `/etc/systemd/system`

例如java服务是一个服务一个service

````shell
[Unit]
#定义描述
Description=base-sys-web
#指定了在systemd在执行完那些target之后再启动该服务
After=syslog.target
 
[Service]
User=root
Group=root
EnvironmentFile=/opt/yj/lasted/config-file/service-environment-file
#具体命令 需要写绝对路径
ExecStart=/opt/java/jdk1.8.0_192/bin/java -Xms512m -jar /opt/yj/lasted/sys-web/base-sys-web.jar
SuccessExitStatus=143

[Install] 
WantedBy=multi-user.target
````

## 配置自启动

```shell
#刷新配置
systemctl daemon-reload
#启动/暂停/重新启动命令
service base-sys-web start/stop/restart
# 配置自启动
systemctl enable base-sys-web.service
```

