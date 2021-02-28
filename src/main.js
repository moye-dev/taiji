let html = document.querySelector("#demo")
let style = document.querySelector("#style")
let string = `
/*你好，我是徐玲
我是一个前端新人
下面让我来展示一下我学的东西*/
#div1{
    border:1px red solid;
    width:200px;
    height:200px;
}
/*接下来把div变成一个八卦图
*首先，把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦图的阴阳制作
*开始
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加一个灵珠和一个魔丸*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}   
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;
let string2 = ""
let n = 0;
let step = () => {
    setTimeout(() => {
    if(string[n]=== "\n"){    //如果是回车就不照搬
        string2 += "<br>";
    }
    else if(string[n]=== " "){
        string2 += "&nbsp";
    }
    else{                   //如果是回车就不照搬     
        string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0,99999);
    demo.scrollTo(0,99999);
    if(n<string.length-1){      //如果n不是最后一个
        n = n + 1;
        step(); 
    }
},50);
};
step();