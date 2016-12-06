
##

paddle 要在 ubuntu 下安装。ubuntu 上基本可以直接编译安装运行通过。
paddle 要在 ubuntu 下安装。其他发行版 linux 发行版应该也可以。windows 是根本不支持的。
paddle 最好在 ubuntu 下安装。macOS 支持的也不是很好。
原因是 macOS 有自己的 python 环境，再装其他 python 环境的时候会出现奇怪的问题。
再就是最好是使用 cuda，而 mac book 一般没有支持 cuda 的显卡。
如果没有 cuda， image 相关的 training 会很慢。

坑一：

安装 cuda 参考下面 thread 中的一部分
http://askubuntu.com/questions/767269/how-can-i-install-cudnn-on-ubuntu-16-04


Step 1: download cudnn from link:  (about 80 MB)

Step 2: extracted it to your local folder

Step 3: Copy the files to system:

$ cd folder/extracted/contents
$ sudo cp -P include/cudnn.h /usr/include
$ sudo cp -P lib64/libcudnn* /usr/lib/x86_64-linux-gnu/
$ sudo chmod a+r /usr/lib/x86_64-linux-gnu/libcudnn*
	 	
Adding -P retains the symbolic links.

注意直接使用 paddle 文档中的方法可能会 cmake 不通过.

坑二：
cmake 选项用的是(注意最后的 NVCC 选项)：
```
cmake .. -DWITH_GPU=ON -DWITH_DOC=OFF -DWITH_SWIG_PY=ON -DCUDA_NVCC_FLAGS=“-D_FORCE_INLINES -D_MWAITXINTRIN_H_INCLUDE”
```

安转之后就可以玩 paddle 自带的几个 demo 了. 后续我会贴出一些算法分析和实验.



  	 	