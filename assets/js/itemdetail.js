$(function() {
  // 回到顶部
  $('#goBack').on('click', function(){
      $('html,body').animate({scrollTop: 0}, 400);
      return false;
  });

  $(".view-img img").imagezoom();

  // 商品详情页图片切换
  $('.item-detail-thumbnail li').hover(function() {
    $(this).addClass('active').siblings().removeClass('active');
    var midImg = $(this).find('img').attr('mid'),
        bigImg = $(this).find('img').attr('big');
    $('.view-img img').attr({'src': midImg, 'rel': bigImg});
  });

  $('.size li, .color li').on('click',function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // 搜索框功能
  var searchData = ['衣服','鞋子','男生帆布鞋子','女生帆布鞋子'];
  $('#autocomplete').autocomplete({
    hints: searchData,
    height: 16,
    showButton: false,
    onSubmit: function(text) {
      console.log(text);
    }
  });

});
