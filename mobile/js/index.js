$(function(){

    // 侧滑菜单
    $('#sort-btn, .mask').on('click', function() {
        if($('.mask').attr('data-toggle') === 'false'){
            $('.mask').animate({left: 0}, 'fast');
            $('.container').animate({left: '80%'}, 'fast');
            $('.mask').attr('data-toggle', 'true');
        }else {
            $('.mask').animate({left: '-100%'}, 'fast');
            $('.container').animate({left: 0}, 'fast');
            $('.mask').attr('data-toggle', 'false');
        }
    });


    // 回到顶部
    $('#goBack').on('click', function() {
       $('html,body').animate({scrollTop: 0}, 300);
        return false;
    });


    // 商品详情页tab切换
    $('.switch-tab-btn li').on('click', function() {
      var index = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');

      if(index === 0) {
        $('.item-base-info').show();
        $('.item-base-service').hide();
      }
      if(index === 1) {
        $('.item-base-info').hide();
        $('.item-base-service').show();
      }
    });
});

function loadData(el,data)
{
    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());     //浏览器的高度加上滚动条的高度

    if ($(document).height() <= totalheight)     //当文档的高度小于或者等于总的高度的时候，开始动态加载数据
    {
        //加载数据
        $(el).append(data);
    }
}
