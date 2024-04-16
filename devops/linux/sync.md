# rsync && ssh 无密码 传输文件

## 简介

我们在开发项目的时候会搭建多台的虚拟机，但是呢？我们在虚拟机传输文件的时候很慢，这个时候我们有一个小软件Rsync,

sync的 （ 远程同步 ）为在Linux / Unix系统局部 拷贝和同步文件和目录远程以及一个最常用的命令。
随着rsync命令的帮助，您可以复制并在目录中远程和本地同步数据，在磁盘和网络，进行数据备份和两台Linux机器之间的镜像。

#### 管方的解释

Rsync命令的一些优点和功能它有效地将文件复制到远程系统或从远程系统同步。支持复制链接，设备，所有者，组和权限。这是比快SCP（
安全复制 ），因为rsync使用远程更新协议，允许转让只是两套文件之间的差异。
第一次，它从源到目标复制文件或目录的整个内容，但从下一次，它只将已更改的块和字节复制到目标。rsync的消耗更少的带宽
，因为它使用压缩和解压缩方法在发送和接收数据两端。

**

## 安装rsync软件

``` shell
yum -y install rsync
```

## 创建shell脚本

#### 前言

我们在开发的时候不可能一个一个代码去传输吧，我们需要脚本文件,我们这里准备了5台主机他们的ip
192.168.19.200 (主服务器)
192.168.19.200 (从服务器)
192.168.19.200 (从服务器)
192.168.19.200 (从服务器)
192.168.19.200 (从服务器)
我们在==192.168.19.200这台主机上的执行vim /usr/local/bin/xsync在文件中写入以下代码；

``` shell
#!/bin/bash
pcount=$#
if((pcount==0)); then
echo no args;
exit;
fi
 
 
#2 获取文件名称
p1=$1
fname=`basename $p1`
echo fname=$fname
 
 
#3 获取上级目录到绝对路径
pdir=`cd -P $(dirname $p1); pwd`
echo pdir=$pdir
 
 
#4 获取当前用户名称
user=`whoami`
 
 
#5 循环
for((host=201; host<205;host++)); do
        echo ------------------- 正在向192.168.19.$host 发送协议 --------------
        rsync -avz -e ssh  $pdir/$fname $user@hadoop$host:$pdir
done

```

#### 编写host文件

``` shell
vim /etc/hosts
```

代码如下

``` shell
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
192.168.19.201 hadoop201
192.168.19.201 hadoop202
192.168.19.201 hadoop203
192.168.19.201 hadoop204
```

## SSH无密码登录

**通过ssh执行rsync(需要密码)通过ssh帐户(需要密码)
执行rsync，将文件同步镜像到远程服务器。下面这个例子将本地的/home/ramesh同步到远程目录/backup/ramesh(
服务器地址192.168.19.201)。执行以下操作时，服务器将会提示需要用户使用密码登录。**

```shell
rsync -avz -e ssh /home/ramesh/ ramesh@192.168.200.10:/backup/ramesh/
```

#### 用ssh-keygen生成密匙

现在我们来设置ssh,以便在执行ssh操作时不需要密码，使用ssh-keygen在本地生成公钥和私钥。

``` shell
$ ssh-keygen
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

一直回车即可

#### 使用ssh-copy-id将公匙拷贝至远程主机

执行ssh-copy-id,将通过ssh-keygen生成的公匙拷贝至远程主机。

``` shell
ssh-copy-id -i ~/.ssh/id_rsa.pub 192.168.19.201
ssh-copy-id -i ~/.ssh/id_rsa.pub 192.168.19.202
ssh-copy-id -i ~/.ssh/id_rsa.pub 192.168.19.203
ssh-copy-id -i ~/.ssh/id_rsa.pub 192.168.19.204
```

#### 无需密码通过ssh来执行rsync

```shell
ssh 192.168.19.201
```

## 重点(脚本使用)

由于我们的脚本文件是放在 ==：/usr/local/bin/== 我们可以全局的使用
在我们要发送的文件下执行：

```shell
xsync 文件名 
```

执行过后使用ssh免密登录到其他的主机上，来使用。


