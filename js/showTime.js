function starttime(){
     var t=new Date();
     var y=t.getFullYear();//getFullYear 方法以绝对数字的形式返回年份值。例如，1976 年的返回值就是 1976。这样可以避免出现 2000 年问题，从而不会将 2000 年1月1日以后的日期与 1900 年1月1日以后的日期混淆起来。
     var m=t.getMonth()+1;
     var d=t.getDate();
     var h=t.getHours();
     var i=t.getMinutes();
     var s=t.getSeconds();
    
     h=h<10?"0"+h:h;
     i=i<10?"0"+i:i;
     s=s<10?"0"+s:s;
     
    //document.getElementById("nowtime"),写上这句可以增加支持火狐兼容性
    document.getElementById("nowtime").innerHTML=(y+"年"+m+"月"+d+"日"+ " " + h +":"+i+":"+s);
    setTimeout ("starttime()",1000);//设定函数自动执行starttime()的方法时间为 1000 ms(1s)
}