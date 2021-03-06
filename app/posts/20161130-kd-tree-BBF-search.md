
## 高维特征向量索引技术总结

 - [从K近邻算法、距离度量谈到KD树、SIFT+BBF算法](http://www.afenxi.com/post/22016)

注意文中提到的：
> 从上述标准的kd树查询过程可以看出其搜索过程中的“回溯”是由“查询路径”决定的，并没有考虑查询路径上
一些数据点本身的一些性质。一个简单的改进思路就是将“查询路径”上的结点进行排序，如按各自分割超平面(也称bin)
与查询点的距离排序，也就是说，回溯检查总是从优先级最高(Best Bin)的树结点开始。
> 这就引出了kd树最近邻搜索算法的改进：BBF(Best-Bin-First)查询算法，它是由发明sift算法的 
David Lowe在1997的一篇文章中针对高维数据提出的一种近似算法，此算法能确保优先检索包含最近邻点
可能性较高的空间，此外，BBF机制还设置了一个运行超时限定。采用了BBF查询机制后，kd树便可以有效的
扩展到高维数据集上。


