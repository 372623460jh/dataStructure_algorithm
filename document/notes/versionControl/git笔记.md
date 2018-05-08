# GIT

## git init
> 初始化git仓库,会在目录下生成一个.git的隐藏文件，里面保存着本地库的版本管理信息

## git status
> `git status`命令可以让我们时刻掌握仓库当前的状态
- 以下代码表示README.md文件在master分支下被修改
```shell
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

## git diff
> 虽然Git告诉我们README.md被修改了，但如何能看看具体修改了什么内容呢，我们就使用`git diff <文件名>`。
- 可以看到README.md文件版本的变化（使用q退出diff）
```shell
diff --git a/README.md b/README.md
index d8036c1..013b5bc 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,2 @@
-Git is a version control system.
+Git is a distributed version control system.
 Git is free software.
\ No newline at end of file
```

## git log
> `git log`命令显示从最近到最远的提交日志
- git log可以看到你由近到远的提交记录
```shell
commit 3628164fb26d48395383f8f31179f24e0882e1e0
Author: xxx
Date:   Tue Aug 20 15:11:49 2013 +0800

    append GPL

commit ea34578d5496d7dd233c827ed32a8cd576c5ee85
Author: xxx
Date:   Tue Aug 20 14:53:12 2013 +0800

    add distributed

commit cb926e7ea50ad11b8f9e909c05226233bf755030
Author: xxx
Date:   Mon Aug 19 17:51:55 2013 +0800

    wrote a readme file
```

## git reset
### `git reset` 切回指定版本，
- 用HEAD表示当前版本，
- 上一个版本就是HEAD^，
- 上上一个版本就是HEAD^^，
- 当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。
- 或者是指定commit id（版本号没必要写全，6-7位就可以了，Git会自动去找。）
> `git reset --hard HEAD^`回到上一个版本
### `git reset` 撤销暂存区
> `git reset HEAD <文件名>`从暂存区中移除该文件

## git reflog
> Git提供了一个命令git reflog用来记录你的每一次命令
- 使用场景：现在，你回退到了某个版本，关掉了电脑，第二天早上就后悔了，想恢复到新版本怎么办？找不到新版本的commit id怎么办?当你reset到上几个版本后反悔了想要回到之前的版本就可以使用`git reflog`查看之前执行的命令和对应的commit id这样就可以根据commit id回到指定的版本了

## 小结一波：
> 三个关键词：工作区,暂存区,版本库
### 暂存区的概念
> 我们执行git add指令后代码被提交到了哪？其实就是被提交到了暂存区，对应.git/index(stage)文件就是暂存区
### HEAD的概念
> HEAD其实就是一个指针指向当前分支，如我们当前是master分支HEAD就指向master分支,我们执行完add将代码提交到暂存区，再执行commit方法就把暂存区的东西一次性提交到HEAD指向的分支
> git管理的是修改而不是文件，如何理解？`第一次修改 -> git add -> 第二次修改 -> git commit` 我们可以看出只有第一次修改被提交就是因为git提交的只是修改的记录而不是整个文件，第二次的修改记录不存在暂存区中所以没被提交

## 分支（branch）
> 上面提到HEAD和master分支,HEAD是指向当前分支的,如果当前分支是master那么HEAD就是指向master,而master是指向当前分支的最后一次提交。
> 现在我们在master指向的提交上建立一个分支dev，并且使用dev分支，这是HEAD就指向dev分支，而dev就指向创建分支时对应的master分支指向的提交，接下来在dev分支上进行一次提交,这时master分支还是指向master分支的最后一次提交，dev分支指向了最新的dev分支上的提交，HEAD指向了dev

### git branch <分支名>
> 创建分支。`git branch dev`创建dev分支

### git branch 
> 列出所有分支，当前分支前有*（HEAD指向的分支）

### git branch -d <分支名>
> 该命令用于删除分支
```shell
git checkout -d dev
```

### git branch --set-upstream <本地分支名> origin/<远程分支名>
> 该命令用于本地分支和远程分支的关联
```shell
git branch --set-upstream dev origin/dev
```

## -checkout
### git checkout -- <文件名> 注意：中间的--很重要没有--就变成了切换分支的命令了
> 撤销操作：简而言之，就是让这个文件回到最近一次git commit或git add时的状态。
> 如果该文件在暂存区中有修改记录，那么`git checkout -- <文件名>`就回到暂存区的状态
> 如果该文件没有被提交到暂存区，那么`git checkout -- <文件名>`就回到版本库的状态

### git checkout <分支名>
> 切换分支。`git checkout dev`切换到dev分支

### git checkout -b <分支名>
> 创建并且切换到该分支
```shell
git checkout -b dev
```

### git checkout -b <本地分支名> origin/<远程分支名>
> 创建本地分支并关联相应的远程分支，本地和远程分支的名称最好一致
```shell
git checkout -b dev origin/dev
```
- 相当于
```shell
git branch dev
git checkout dev
```

## git config
- 查看当前目录下的config配置列表
```shell
git config --list
```
- 配置全局config
```shell
# 配置全局用户名
git config --global user.name 'XXX'
```

- 配置项目私有config
```shell
# 配置项目私有用户名
git config --local user.name 'XXX'
```

## git clone

- 克隆远程仓库master分支到本地
```shell
# 克隆远程仓库到本地目录
git clone xxx
```

- 克隆远程仓库其他分支到本地
```shell
git clone -b 分支名 git远程地址
```

- 查看本地仓库分支
```shell
git branch
``` 

## git tag 给当前仓库添加标签主要用来设置版本号

- 给本地仓库添加标签
```shell
git tag -a v0.1 -m 'v0.1'
```

- 将本地残酷标签推送到远程仓库
```shell
git push --tag
```

## 添加本地GIT忽略清单文件
- 在代码库文件夹的根目录添加一个.gitignore文件,此文件用于说明忽略的文件有哪些

## 将github上的项目移至本地
- 方法1：
```shell
git init
git remote add origin github地址      //添加origin
// git pull <远程主机名> <远程分支名>:<本地分支名>
git pull origin master                //从origin源下更新master分支
// git pull origin master:master 合并分支名相同可以简化为 git pull origin master
```

- 方法2：
```shell
git init
// git clone <版本库的网址> <本地目录名>
git clone github地址                      //克隆
git clone -b 指定的分支名字 github地址     //克隆某分支
```

## 将本地代码提交到github上
- 方法1：
```shell
// 远程主机名:可以在.git下config remote下查看
// <远程分支名><本地分支名>：本地的哪个分支提交到远程的哪个分支
// git push <远程主机名> <本地分支名>:<远程分支名>
git push origin master                //先commit到本地后,push到origin源master分支上
// git push origin master:master 合并分支名相同可以简化为 git push origin master
```

## GitLab/GitHub SSH关联(mac/linux)

### 1.检查是否有秘钥对
> `ls -al ~/.ssh`检查是否显示有id_rsa.pub或者id_dsa.pub存在，如果存在请直接跳至第3步。

### 2.生成秘钥对
> `ssh-keygen -t rsa -C ”email”`,注意这个地方的邮箱地址需要和gitlab/github上对应，一直回车密码可以为空,这样就会在/Users/用户名/.ssh/下生成id_rsa和id_rsa.pub

### 3.配置GitLab/GitHub SSH
> 打开GitLab/GitHub关于SSH的配置,一般叫做ssh key。
> cat id_rsa.pub
> 将秘钥复制到GitLab/GitHub的key中

### 4.修改git配置
```shell
git config --global user.name '用户名'
git config --global user.email '刚刚生成秘钥填的邮箱'
```

### 5.git clone ssh
