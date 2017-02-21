refresher.init({
    id:"wrapper",
    pullUpAction:Load 									
});																									
// 下拉刷新
function Refresh() {																
    setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
        var el, li, i;																		
        el =document.querySelector("#wrapper ul");					
        //这里写你的刷新代码				
        document.getElementById("wrapper").querySelector(".pullDownIcon").style.display="none";		
        document.getElementById("wrapper").querySelector(".pullDownLabel").innerHTML="<img src='images/icon/ok.png'/>刷新成功";																					 
        setTimeout(function () {
            wrapper.refresh();
            document.getElementById("wrapper").querySelector(".pullDownLabel").innerHTML="";								
            },1000);//模拟qq下拉刷新显示成功效果
        /****remember to refresh after  action completed！ ---yourId.refresh(); ----| ****/
    }, 1000);
}

// 上拉加载
function Load() {
    setTimeout(function () {// <-- Simulate network congestion, remove setTimeout from production!
        var el, li, i;
        el =document.querySelector("#wrapper ul");
        for (i=0; i<2; i++) {
            li = document.createElement('li');
            li.innerHTML='<a href="itemdetail.html">'+
                    '<div><img src="images/mobile_item_img1.jpg" alt=""></div>'+
                    '<div class="product-info">白色精美印花连衣裙</div>'+
                    '<div class="product-price-info">'+
                        '<span class="product-price">$'+
                            '<b>99</b>'+
                            '<b class="invalid-price">199</b>'+
                    '</span></div></a>'
            el.appendChild(li, el.childNodes[0]);
        }
        wrapper.refresh();/****remember to refresh after action completed！！！   ---id.refresh(); --- ****/
    },2000);	
}