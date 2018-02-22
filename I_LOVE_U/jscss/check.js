$(function(){
    var checkStatus = window.localStorage.getItem('love_day') === '20180124true';
    if(!checkStatus){
        window.location.href = 'http://www.91lik.win/';
    }
});
