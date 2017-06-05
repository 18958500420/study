function addZero(num){
    if(num<10){
        num="0"+num
    }
    return num;
}
/**
 *居中函数
 * element：需要居中的元素
 */
function center(element){
    element.style.left=((getWindowSiza().width-element.offsetWidth)/2+getScorllSize().left)+"px";
    element.style.top=((getWindowSiza().height-element.offsetHeight)/2+getScorllSize().top)+"px";
}
/**
 *获取窗口的尺寸
 *不同浏览器，窗口的尺寸计算不同
 */
function getWindowSiza(){
    return  {
        "width":window.innerWidth||document.documentElement.clientWidth,
        "height":window.innerHeight||document.documentElement.clientHeight
    };
}
/**
 *获取滚动条滚动的值
 */
    function getScorllSize(){
    return  {
        "top":document.documentElement.scrollTop||document.body.scrollTop,
        "left":document.documentElement.scrollLeft||document.body.scrollLeft
    };
}
/*邮箱验证*/
function valide_email(value){
    var pattern=/^[a-zA-Z0-9]+([\._-][a-z0-9]+)?@[a-z0-9]+([_-][a-z0-9])?\.[a-z]{2,11}(\.[a-z]{2,4})?$/i;
    if(pattern.test(value)){
        return true;
    }else {
        return false;
    }
}
/*修剪数据前后的空格*/
function trim(value){
    var pattern=/^\s*(.+?)\s*$/g;
    value=value.replace(pattern,"$1");
    return value;
}
function valide_pwd(value){
    var num=0;
    //value中没有数字
    if(!/[\d]/.test(value)){
        num+=1;
    }
    //value中没有小写字母
    if(!/[a-z]/.test(value)){
        num+=1;
    }
    //value中没有大写字母
    if(!/[A-Z]/.test(value)){
        num+=1;
    }
    //value中没有特殊符号
    if(!/[\W]/.test(value)){
        num+=1;
    }
    return num;
}