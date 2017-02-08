$(function(){
    // 回到顶部
    $('#goBack').on('click', function(){
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });

    //sub-nav 菜单点击效果
    $('.js-nav li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });


    // 搜索框功能
    var searchData = ['百度1', '百度2', '百度3', '百度4', '百度5', '百度6'];
    $('#autocomplete').autocomplete({
      hints: searchData,
      showButton: false,
      width: 480,
      placeholder: '搜索百度',
      onSubmit: function(text) {
        console.log(text);
        return false;
      }
    });


    // 首页轮播
    var unslider = $('#banner-slider').unslider({
		dots: true
	}),
	data = unslider.data('unslider');
    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        data[fn]();
    });


    // 首页广告轮播
    $('#ad-slider').unslider({
        dots: false,
        delay: 4000
    });


    // 宽屏轮播
    $('#big-slider-img').unslider({
        dots: true,
        fluid: true
    });


    // 分类显示
    $('.sort-way li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });


    // 品牌热卖tab切换
    $('#tab-switch li').on('click', function(){
        $(this).children('div').addClass('active');
        $(this).siblings().find('div').removeClass('active');
        var index = $(this).index();
        $('#tab-pane li').eq(index).css({display: 'block'}).siblings().css({display: 'none'});
    });


    // 搜索结果分类tab
    $('#sort-tab .sort-tab-item').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });


    // 商品列表标题超过两行显示省略号
    $('.list-item-title').ThreeDots();
    $('.seckill .list-item-title').ThreeDots({ max_rows: 1 });


    // 创建分页方法
    function createDemo(name){
        var container = $('#pagination-' + name);
        var sources = function(){
            var result = [];

            for(var i = 1; i < 196; i++){
                result.push(i);
            }

            return result;
        }();

        var options = {
            dataSource: sources,
            className: 'paginationjs-theme-pink',
            showGoInput: true,
            showGoButton: true,
            showNavigator: true,
            goButtonText: '确定',
            callback: function(response, pagination){
                window.console && console.log(pagination);
                    $('.page-number').text(pagination.pageNumber);
                    $('.total-page').text(pagination.totalPage);
//                var dataHtml = '<ul>';
//
//                $.each(response, function(index, item){
//                    dataHtml += '<li>'+ item +'</li>';
//                });
//
//                dataHtml += '</ul>';

//                container.prev().html(dataHtml);
            }
        };

        //$.pagination(container, options);

        container.addHook('beforeInit', function(){
            window.console && console.log('beforeInit...');
        });
        container.pagination(options);

        container.addHook('beforePageOnClick', function(){
            window.console && console.log('beforePageOnClick...');
            //return false
        });

        return container;
    }

    createDemo('product');
});
