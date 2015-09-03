---
layout: post
title: "python学习笔记1"
description: "python是一门非常有趣的编程语言"
category: lessons
tags: [python基础]
---
####静态语言与动态语言
变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如Java是静态语言，python是动态语言。

    #python
    a = 15
    #java
    int a = 15;

####常量
所谓常量就是不能变的变量，比如常用的数学常数π就是一个常量。在Python中，通常用全部大写的变量名表示常量：

    PI = 3.14159265359


还有一种除法是//，称为地板除，两个整数的除法仍然是整数.

list
**zip()函数**可以把两个 list 变成一个 list：

    >>> zip([10, 20, 30], ['A', 'B', 'C'])
    [(10, 'A'), (20, 'B'), (30, 'C')]
dict迭代
Python中，迭代永远是取出元素本身，而非元素的索引。

对于有序集合，元素确实是有索引的。有的时候，我们确实想在 for 循环中拿到索引，怎么办？
方法是使用 <font style="color:red">enumerate() 函数：</font>

    >>> L = ['Adam', 'Lisa', 'Bart', 'Paul']
    >>> for index, name in enumerate(L):
    ...     print index, '-', name
    ... 
    0 - Adam
    1 - Lisa
    2 - Bart
    3 - Paul

切片
    
    L = ['Adam', 'Lisa', 'Bart', 'Paul']
    >>> L[0:3]
    ['Adam', 'Lisa', 'Bart']
L[0:3]表示，从索引0开始取，直到索引3为止，但不包括索引3。即索引0，1，2，正好是3个元素。
    
    
只用一个 : ，表示从头到尾：

    >>> L[:]
    ['Adam', 'Lisa', 'Bart', 'Paul']
切片操作还可以指定第三个参数：表示每N个取一个，上面的 L[::2] 会每两个元素取出一个来，也就是隔一个取一个。

    L = range(1, 101)
    请利用切片，取出：
    1. 前10个数；print L[:10]
    2. 3的倍数；print L[2::3]
    3. 不大于50的5的倍数。print L[4:50:5]
<font style="color:#575FEE">字符串切片</font>
字符串 'xxx'和 Unicode字符串 u'xxx'也可以看成是一种list，每个元素就是一个字符。因此，字符串也可以用切片操作，只是操作结果仍是字符串：

    >>> 'ABCDEFG'[:3]
    'ABC'
    >>> 'ABCDEFG'[-3:]
    'EFG'
    >>> 'ABCDEFG'[::2]
    'ACEG'

<font style="color:#0593d3">生成表达式</font>
```
d = { 'Adam': 95, 'Lisa': 85, 'Bart': 59 }
#定义函数来替换字符串的格式化代码
def generate_tr(name, score):
    if score < 60:
        return '<tr><td>%s</td><td style="color:red">%s</td></tr>' % (name, score)
    return '<tr><td>%s</td><td>%s</td></tr>' % (name, score)

tds = [generate_tr(name, score) for name, score in d.iteritems()]
print '<table border="1">'
print '<tr><th>Name</th><th>Score</th><tr>'
print '\n'.join(tds)
print '</table>'
```
列表生成式的 for 循环后面还可以加上 if 判断。
```
>>> [x * x for x in range(1, 11) if x % 2 == 0]
[4, 16, 36, 64, 100]
```
请编写一个函数，它接受一个 list，然后把list中的所有字符串变成大写后返回，非字符串元素将被忽略。
```
def toUppers(L):
    return [s.upper() for s in L if isinstance(s,str)]
print toUppers(['Hello', 'world', 101])
```
多层表达式
for循环可以嵌套，因此，在列表生成式中，也可以用多层 for 循环来生成列表。

    >>> [m + n for m in 'ABC' for n in '123']
    ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']
多层嵌套生成列表表达式    
利用 3 层for循环的列表生成式，找出对称的 3 位数。例如，121 就是对称数，因为从右到左倒过来还是 121。    
```
#多层表达式
print [100 * n1 + 10 * n2 + n3 for n1 in range(1, 10) for n2 in range(10) for n3 in range(10) if n1==n3]
#利用for循环
L=[]
for n1 in range(1,10):
	for n2 in range(10):
		for n3 in range(10):
			if(n1==n3):
				L.append(n1*100+n2*10+n3)
print L

```
<font style="color:#0593d3">range</font>

    class range(stop)
    class range(start, stop[, step])
请利用列表生成式生成列表 [1x2, 3x4, 5x6, 7x8, ..., 99x100]
    
    print [x*(x+1) for x in range(1,100,2)]


####迭代
在迭代 ['Adam', 'Lisa', 'Bart', 'Paul'] 时，如果我们想打印出名次 - 名字（名次从1开始)，请考虑如何在迭代中打印出来。
```
L = ['Adam', 'Lisa', 'Bart', 'Paul'] 
for index, name in zip(range(1,len(L)+1),L):
    print index, "-", name
```
迭代dict的value
dict 对象有一个 values() 方法，这个方法把dict转换成一个包含所有value的list，这样，我们迭代的就是 dict的每一个 value
    
    d = { 'Adam': 95, 'Lisa': 85, 'Bart': 59 }
    print d.values()
    # [85, 95, 59]
dict除了values()方法外，还有一个 itervalues() 方法，用 itervalues() 方法替代 values() 方法，迭代效果完全一样：

    d = { 'Adam': 95, 'Lisa': 85, 'Bart': 59 }
    print d.itervalues()
    # <dictionary-valueiterator object at 0x106adbb50>
    for v in d.itervalues():
    print v
    # 85
    # 95
    # 59
values()与  itervalues() 的区别
1. values() 方法实际上把一个 dict 转换成了包含 value 的list。
2. 但是 itervalues() 方法不会转换，它会在迭代过程中依次从 dict 中取出 value，所以 itervalues() 方法比 values() 方法节省了生成 list 所需的内存。

迭代dict的key和value
我们看看 dict 对象的 items() 方法返回的值：

    >>> d = { 'Adam': 95, 'Lisa': 85, 'Bart': 59 }
    >>> print d.items()
    [('Lisa', 85), ('Adam', 95), ('Bart', 59)]

####高阶函数
<font style="color:#0593d3">可以接受函数作为参数的函数</font>
**map()**是 Python 内置的高阶函数，它接收一个函数 f 和一个 list，并通过把函数 f 依次作用在 list 的每个元素上，得到一个新的 list 并返回。

例如，对于list [1, 2, 3, 4, 5, 6, 7, 8, 9]

如果希望把list的每个元素都作平方，就可以用map()函数：
<img src="http://img.mukewang.com/54c8a7e40001327303410245.png"/>
因此，我们只需要传入函数f(x)=x*x，就可以利用map()函数完成这个计算：
```
def f(x):
    return x*x
print map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])
```
输出结果

    [1, 4, 9, 10, 25, 36, 49, 64, 81]
***注意：map函数不改变原来list的值，而是返回一个新的list***

#####小测试
输入：['adam', 'LISA', 'barT']
输出：['Adam', 'Lisa', 'Bart']
```
#1
def format_name(s):
    return s[0].upper() + s[1:].lower()
print map(format_name, ['adam', 'LISA', 'barT'])

#2
def format_name(s):
    return s.lower().capitalize()
print map(format_name, ['adam', 'LISA', 'barT'])
```

reduce


**filter()**函数是 Python 内置的另一个有用的高阶函数，filter()函数接收一个函数 f 和一个list，这个函数 f 的作用是对每个元素进行判断，返回 True或 False，filter()根据判断结果自动过滤掉不符合条件的元素，返回由符合条件元素组成的新list。

利用filter()，可以完成很多有用的功能，例如，删除 None 或者空字符串：
```
def is_not_empty(s):
    return s and len(s.strip()) > 0
filter(is_not_empty, ['test', None, '', 'str', '  ', 'END'])
```

请利用filter()过滤出1~100中平方根是整数的数，即结果应该是：
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```
import math

def is_sqr(x):
    if math.sqrt(x)%1==0:
        return x
print filter(is_sqr, range(1, 101))
```
sorted()函数可对list进行排序：

    >>>sorted([36,5,12,9,21])
    输出：[5, 9, 12, 21, 36]
但 sorted()也是一个高阶函数，它可以接收一个比较函数来实现自定义排序，**比较函数的定义是，传入两个待比较的元素 x, y，如果 x 应该排在 y 的前面，返回 -1，如果 x 应该排在 y 的后面，返回 1。如果 x 和 y 相等，返回 0。**
```
def reversed_cmp(x, y):
    if x > y:
        return -1
    if x < y:
        return 1
    return 0
>>> sorted([36, 5, 12, 9, 21], reversed_cmp)
输出：[36, 21, 12, 9, 5]
```

####装饰器
<font style="color:#0593d3">本质上，decorator就是一个返回函数的高阶函数。</font>

上一节的@performance只能打印秒，请给 @performace 增加一个参数，允许传入's'或'ms'：
```
import time
def performance(unit):
    def perf_decorator(f):
        def wrapper(*args, **kw):
            t1 = time.time()
            r = f(*args, **kw)
            t2 = time.time()
            t = (t2 - t1) * 1000 if unit=='ms' else (t2 - t1)
            print 'call %s() in %f %s' % (f.__name__, t, unit)
            return r
        return wrapper
    return perf_decorator

@performance('s')
def factorial(n):
    return reduce(lambda x,y: x*y, range(1, n+1))
print factorial(10)
```

####偏函数
在第7节中，我们在sorted这个高阶函数中传入自定义排序函数就可以实现忽略大小写排序。请用functools.partial把这个复杂调用变成一个简单的函数：
```
import functools

sorted_ignore_case = functools.partial(sorted,key=str.lower)

print sorted_ignore_case(['bob', 'about', 'Zoo', 'Credit'])
```






