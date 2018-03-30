# GIT

## GIT命令操作

- 初始化一个本地GIT仓储
    - 就是在本地文件夹中添加了一个.git的文件夹用于记录所有的项目变更信息
    ```shell
    cd 当前项目目录
    git init                            // 初始化一个本地的仓库
    ```

- 查看本地仓储的变更状态
    - 用于查看本地仓储的状态,第一次查看,显示的是一坨没有被跟踪的文件
    ```shell
    git status
    git status -s                       // -s 是输出简要的变更日志
    ```

- 添加本地暂存（托管）文件
    - 可以将一个没有被跟踪的文件添加到跟踪列表
    ```shell
    git add                             //可以将一个没有被跟踪的文件添加到跟踪列表
    git add .                           //可以将全部没有被跟踪的文件添加到跟踪列表
    ```

- 添加本地GIT忽略清单文件
    - 在代码库文件夹的根目录添加一个.gitignore文件,此文件用于说明忽略的文件有哪些

- 提交被托管的文件变化到本地仓储
    - 可以将一个没有被跟踪的文件添加到跟踪列表
    ```shell
    git commit -m "注释"                //提交到本地仓库
    ```
    
- 对比差异
    - 可以用于对比当前状态和版本库中状态的变化
    ```shell
    git diff
    ```

- 查看提交日志
    - 可以查看提交日志
    ```shell
    git log
    ```
    
- 回归到指定版本
    ```shell
    git reset --hard
    ```

## 远程操作(github)

- 将github上的项目移至本地
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

- 将本地代码提交到github上
    - 方法1：
    ```shell
    // 远程主机名:可以在.git下config remote下查看
    // <远程分支名><本地分支名>：本地的哪个分支提交到远程的哪个分支
    // git push <远程主机名> <本地分支名>:<远程分支名>
    git push origin master                //先commit到本地后,push到origin源master分支上
    // git push origin master:master 合并分支名相同可以简化为 git push origin master
    ```