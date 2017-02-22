$(function() {
  $('.search-input').on('input',function() {

    var searchSuggest = ['衣服衬衫', '衣服', '衣服鞋子'];
    var searchContainer = $('.search-list'),
        ul = searchContainer.find('ul'),
        searchNum = '2500件',
        searchItem = null;
    if(ul.find('li').length < 8) {
      for(var i = 0, length = searchSuggest.length; i < length; i++) {
        searchItem = '<li><a href="searchresult.html"><i class="iconfont icon-sousuo01"></i>' +
        searchSuggest[i] + '<span class="search-result fl-right">' + searchNum +'</span></a></li>';
        ul.append(searchItem);
      }
    }
    if($(this).val() == '') {
      ul.find('li').remove();
    }
  });
});
