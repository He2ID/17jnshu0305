http://www.zhangxinxu.com/wordpress/2015/01/tips-blank-character-chinese-align/
�����ַ�ת����HTMLʶ���ʽ http://www.zhangxinxu.com/sp/char.html

&ensp;
͸�� 1/2�����Ŀ��  Сд��ĸn�Ŀ��
&emsp;
͸�� 1�����Ŀ��
��ˣ�����HTML/JS/CSS��ת�塰�ҡ�������֣��ֱ��ǣ�

&#x6211;
\u6211, ��console.log('\u6211');
\6211, ��.xxx:before { content: '\6211'; }
���ǵ�ֱ��&#x3000;������ʽ��¶��HTML�У����ܻ�����Ļ�Ķ����ȸ����豸��ȡ���Ӷ�Ӱ�������Ķ�������ˣ����ǿ��Խ�һ���Ż��£�ʹ�ñ�ǩ������αԪ�أ����磺

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

sort�����������
http://www.genshuixue.com/i-cxy/p/15565581