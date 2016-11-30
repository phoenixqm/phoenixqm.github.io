

## MacOSX 安装OpenCV3+Python虚拟环境

主要参考这篇博文：
- [Install OpenCV 3.0 and Python 2.7+ on OSX](http://www.pyimagesearch.com/2015/06/15/install-opencv-3-0-and-python-2-7-on-osx/)
- [Building Your First Image Search Engine](http://www.pyimagesearch.com/2014/01/27/hobbits-and-histograms-a-how-to-guide-to-building-your-first-image-search-engine-in-python/)
注意以下问题（坑）：
- 使用`brew`安装时不应该使用`sudo`的。如果brew不能安装，说明`/usr/local/`下面有的目录owner不是自己而是root。
这个时候可以`sudo chown -R` 然后继续`brew install`。

- pip安装python模块的时候可能遇到`ValueError: unknown locale: UTF-8`。这时需要~/.profile中加入并启用：
```
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
```
- 必须依照博文中说的，使用cmake-gui手动设置 PYTHON2_PACKAGES_PATH, PYTHON2_LIBRARY, 
PYTHON2_INCLUDE_DIR, 以及PYTHON2_NUMPY_INCLUDE_DIRS；否则cv2.so不被编译安装。


