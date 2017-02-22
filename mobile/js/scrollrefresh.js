
$(function() {
  // 下滑到底部加载内容
  $(window).scroll(function() {
    var dataItem = '<li>' +
        '<a href="itemdetail.html">' +
          '<div class="item-img">' +
            '<img src="images/mobile_item_img2.jpg" alt="">' +
          '</div>' +
          '<div class="product-info">白色精美印花连衣裙白色精美印花连衣裙</div>' +
          '<div class="product-price-info">' +
              '<span class="product-price">$' +
                  '<b>99</b>' +
                  '<b class="invalid-price">199</b>' +
              '</span>' +
          '</div>' +
        '</a></li>';
    var data = [];
    for(var i = 0; i < 2; i++) {
      data.push(dataItem);
    }
    // console.log("滚动条到顶部的垂直高度: "+$(document).scrollTop());
    // console.log("页面的文档高度 ："+$(document).height());
    // console.log('浏览器的高度：'+$(window).height());
    loadData('.product-list ul',data);
  });
});
