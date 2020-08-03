/*
* @Author: yyx219
* @Date:   2018-05-26 22:58:44
* @Last Modified by:   yyx219
* @Last Modified time: 2018-05-27 22:29:23
* @Email: yyx219@qq.com
* @Url: http://www.hzbiz.net
* @判断网页是否进入可视区，并加载animate.css动画库
*/

function init(el) {
    var aDiv = el;
    var clientHeight = document.documentElement.clientHeight;
    var n = 0;
    var flag = false;
    for (var index = 0; index < aDiv.length; index++) {
       
        n += 100;
        n = n > 3000 ? 0 : n;
        var element = aDiv[index];
        
        var elTop = element.getBoundingClientRect().top;
        if (elTop < clientHeight) {
            element.classList.add('animated')
            
            let f;
            if(flag){
                element.style.background='rgba(255,0,0,1)'
                f = 'fadeInDownBig'
                flag = false
            }else{
                element.style.background='rgba(0,0,255,1)'
                f = 'fadeInUpBig'
                flag = true
            }
            element.style['animationDelay'] = n + 'ms'
            element.classList.add(f)
            element.classList.add('active')
        
            
        }

    }
}
// init(document.getElementsByTagName('div'))
document.addEventListener('scroll', function () {
    init(document.getElementsByTagName('div'))
})