var data = [];

var dataStr = 
"1.开普勒-186f星人<br>\
<br>\
&emsp;&emsp;隶属于002档案室的开普勒-186f星人，身份是摇滚歌手。喜欢诱拐边缘人，最喜欢的食物是天狼星上的蛋包饭。魔力存量很多，但施法密度和范围都很小。感性在利益面前会被理智消灭，但平时总是怪异过度，感性神经，经常放纵自己去模仿别人。<br>\
<br>\
<br>\
2.Gliese581g星人<br>\
<br>\
&emsp;&emsp;隶属于534档案室的Gliese581g星人，是自山巅而降的信使，宇宙的罪人。曾犯下了无可饶恕的罪孽，亦曾射杀了自我迷失的英雄们，最终被星球放逐。具有独一无二的个性，做事果断，具有超强的行动力，能在第一天就完成第二天的事情，好像有永远用不完的精力。<br>\
<br>\
<br>\
3.HD40307d星人<br>\
<br>\
&emsp;&emsp;隶属于219档案室的HD40307d星人，有长而茂密的胡须，硕大的脑袋里装满了智慧。不太会说话，想要友好沟通只能是死路一条。魔力很强，擅长攻击，但是不擅长防御，治疗，辅助。想要见到双眼本来颜色的话只有转换为天使才行。<br>\
<br>\
<br>\
4.Beta星人<br>\
<br>\
&emsp;&emsp;隶属于011档案室的来β星人，来自异世界，外形很像人类，平时的爱好是模仿地球人。在地球以骇客的身份生活着。真实的他全身覆盖着荧光的硬毛，是一种微小的水中生物。一般为半透明，没有实体的状态。<br>\
<br>\
<br>\
5.TauCetie星人<br>\
<br>\
&emsp;&emsp;隶属于367档案室的TauCetie星人，是发着绿色荧光的木棉妖。给它草莓慕斯的话，它会很开心的。充满了侵略欲，希望周围的一切都在自己的掌握之中，理想不到，脚步不停。执着得有点过分，不切实金得也有点夸张。<br>\
<br>\
<br>\
6.TRAPPIST-1d星人<br>\
<br>\
&emsp;&emsp;隶属于612档案室的TRAPPIST-1d星人，处女座，是粉红却有点恐怖的样子。有着珊瑚触角和黑色的眼镜，总是挂着黑眼圈，沉默寡言。已经很久没做梦了，最近的愿望是拥有优质的睡眠。攻击力比较低。<br>\
"
var d = dataStr.split("<br><br><br>");
for(var i = 0; i<d.length; i++){
  var c = d[i].split("<br><br>");
  data.push({
    img: c[0]+ ".jpg",
    caption: c[0].split(".")[1],
    desc: c[1]
  });
}

