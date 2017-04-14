http://www.zhangxinxu.com/wordpress/2015/01/tips-blank-character-chinese-align/
任意字符转换成HTML识别格式 http://www.zhangxinxu.com/sp/char.html

&ensp;
透明 1/2个中文宽度  小写字母n的宽度
&emsp;
透明 1个中文宽度
因此，想在HTML/JS/CSS中转义“我”这个汉字，分别是：

&#x6211;
\u6211, 如console.log('\u6211');
\6211, 如.xxx:before { content: '\6211'; }
考虑到直接&#x3000;这种形式暴露在HTML中，可能会让屏幕阅读器等辅助设备读取，从而影响正常阅读流，因此，我们可以进一步优化下，使用标签，利用伪元素，例如：

.half:before { content: '\2002'; speak: none; }
.full:before { content: '\2003'; speak: none; }

<script type="text/javascript">

var arr = new Array(6)
arr[0] = "10"
arr[1] = "5"
arr[2] = "40"
arr[3] = "25"
arr[4] = "1000"
arr[5] = "1"

document.write(arr + "<br />")
document.write(arr.sort())
document.write(arr.sort(sortNumber))
</script>
10,5,40,25,1000,1
1,10,1000,25,40,5
1,5,10,25,40,1000

sort打乱数组局限
http://www.genshuixue.com/i-cxy/p/15565581