function time()
{
    // 首先获取当前时间信息
    var now=new Date();
    var year=now.getFullYear();
    var month=now.getMonth();
    var date=now.getDate();
    var day=now.getDay();
    var hour=now.getHours().toString();
    var minute=now.getMinutes().toString();
    var second=now.getSeconds().toString();
    if(hour.length==1){
        hour="0"+hour;
    }
    if(minute.length==1){
        minute="0"+minute;
    }
    if(second.length==1){
        second="0"+second;
    }
    document.getElementById("date").innerHTML=year+"-"+month+"-"+date;
    document.getElementById("time").innerHTML=hour+":"+minute+":"+second;
}
//准备好文档树并开始加载media之前就可以触发一次time更新
document.onreadystatechange=time
// document.getElementById("time").
//每秒触发一次time更新
setInterval(time,500);

// Index.html页面的JS动画:mouseover动画
mouseovereffect = function(docdom,wordid){
    //鼠标覆盖上的时候,把图片减淡一点,再把文字设置为可见.
    docdom.style.opacity="80%";
    document.getElementById(wordid).style.opacity="100%"
}
mouseouteffect = function(docdom,wordid){
    //在html中传入this对象
    docdom.style.opacity="100%";
    document.getElementById(wordid).style.opacity="0%"
}
iconeffect_in = () => {
    document.getElementById("head2").style.transform="scale(1.1)";
    // console.log("triggered");
}
iconeffect_out = () => {
    document.getElementById("head2").style.transform="scale(1)";
    // console.log("triggered");
}