$(function() {
  // 限时秒杀
  // countDown('2016/06/20 12:00:00', '#countDown');
  // countDown('2016/06/21 12:00:00', '#countDown1');
  // countDown('2016/06/22 12:00:00', '#countDown2');
  // countDown('2016/06/23 12:00:00', '#countDown3');
  // countDown('2016/06/24 12:00:00', '#countDown4');
  countDown('2016/06/30 12:00:00', '.rest-info');

  // 品牌热卖
  countDown('2016/06/30 12:00:00', '.clock-countdown');
});
function countDown(time,id){
    var day_elem = $(id).find('.day');
    var hour_elem = $(id).find('.hour');
    var minute_elem = $(id).find('.minute');
    var second_elem = $(id).find('.second');

    //if(typeof end_time == "string")
    var end_time = new Date(time).getTime(),//月份是实际月份-1
        sys_second = (end_time-new Date().getTime())/1000;
    var timer = setInterval(function(){
        if(sys_second > 1) {
            sys_second -= 1;
            var day = Math.floor((sys_second / 3600) / 24);
            var hour = Math.floor((sys_second / 3600) % 24);
            var minute = Math.floor((sys_second / 60) % 60);
            var second = Math.floor(sys_second % 60);
            day_elem && $(day_elem).text(day);//计算天
            $(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
            $(minute_elem).text(minute<10?"0"+minute:minute);//计算分钟
            $(second_elem).text(second<10?"0"+second:second);//计算秒杀
        }else {
          clearInterval(timer);
        }
    }, 1000);
}
