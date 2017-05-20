/**
 * Created by Lik.
 */
$(function () {
    //get Object of Date
    var oDate = new Date();
    const onlyLikDate = new Date();
    //currentOnly year-month-date
    const currentOnlyYearMonthDate = onlyLikDate.getFullYear() + '-' + (onlyLikDate.getMonth()+1) + '-' + onlyLikDate.getDate();
    console.log(currentOnlyYearMonthDate);
    //get current year
    var currentYear = oDate.getFullYear();
    //get current month
    var currentMonth = oDate.getMonth();
    //get the day of the first day in current month and the totals of current month
    function getCurrentMonthDays(curYear, curMon) {
        console.log(curYear, curMon);
        var date = new Date();
        date.setFullYear(curYear);
        date.setMonth(curMon);
        date.setDate(1);
        var weekday = new Array(7);
        weekday[0] = '星期日';
        weekday[1] = '星期一';
        weekday[2] = '星期二';
        weekday[3] = '星期三';
        weekday[4] = '星期四';
        weekday[5] = '星期五';
        weekday[6] = '星期六';
        var lastDate = new Date(curYear, curMon + 1, 0);
        var firstDay = date.getDay();
        var daysLength = lastDate.getDate();
        console.log(firstDay, daysLength);
        //console.log("本月第一天是 " + weekday[date.getDay()] + '    本月最后一天是 ' + lastDate.getDate());
        console.log($('#lik-fullcalendar .day-box .lik-date-item').length);
        //clear class and day content
        for(var i=0;i<$('#lik-fullcalendar .day-box .lik-date-item').length;i++){
            $('#lik-fullcalendar .day-box .lik-date-item').eq(i).removeClass('lik-prev-month-day').removeClass('lik-cur-month-day').removeClass('lik-next-month-day').find('span.day').html('');
            $('span.day').eq(i).html('');
        }
        //add class 'lik-prev-month-day' for previous month
        for(var i=0;i<firstDay;i++){
            $('#lik-fullcalendar .day-box .lik-date-item').eq(i).addClass('lik-prev-month-day');
        }
        //get prev month totals
        var prevMonthTotals = (new Date(curYear, curMon, 0)).getDate();
        var prevMonthLose = $('#lik-fullcalendar .day-box .lik-prev-month-day').length;
        for(var i=0;i<prevMonthLose;i++){
            $('#lik-fullcalendar .day-box .lik-prev-month-day').eq(i).find('span.day').html(prevMonthTotals+i-prevMonthLose+1);
        }
        //add class 'lik-cur-month-day' for current month
        for(var i=firstDay;i<daysLength+firstDay;i++){
            $('#lik-fullcalendar .day-box .lik-date-item').eq(i).addClass('lik-cur-month-day').attr('lik-data-date', curYear+'-'+(curMon+1)+'-'+(i+1-firstDay));
        }
        //current date light
        $.each($('.lik-date-item'), function (i, v) {
            $('.lik-date-item').eq(i).removeClass('lik-cur-month-today');
            if ($('.lik-date-item').eq(i).attr('lik-data-date') == currentOnlyYearMonthDate) {
                $('.lik-date-item').eq(i).addClass('lik-cur-month-today');
            }
        });
        //add class 'lik-next-month-day' for next month
        for(var i=daysLength+firstDay;i<$('#lik-fullcalendar .day-box .lik-date-item').length;i++){
            $('#lik-fullcalendar .day-box .lik-date-item').eq(i).addClass('lik-next-month-day');
        }
        var nextMonthLose = $('#lik-fullcalendar .day-box .lik-next-month-day').length;
        for(var i=0;i<nextMonthLose;i++){
            $('#lik-fullcalendar .day-box .lik-next-month-day').eq(i).find('span.day').html(i + 1);
        }
        //add dates for current month
        for(var i=0;i<$('#lik-fullcalendar .day-box .lik-cur-month-day').length;i++){
            $('#lik-fullcalendar .day-box .lik-cur-month-day').eq(i).find('span.day').html(i + 1);
        }
        //lik-week-row show/unshow
        $.each($('#lik-fullcalendar .lik-week-row'), function(i, v){
            if(!$('#lik-fullcalendar .lik-week-row').eq(i).find('.lik-date-item').hasClass('lik-cur-month-day')){
                $('#lik-fullcalendar .lik-week-row').eq(i).css('display', 'none');
            }else{
                $('#lik-fullcalendar .lik-week-row').eq(i).css('display', 'block');
            }
        })
    }

    //current month show / unshow
    function likCurrentMonthShow(curYear, curMonth) {
        if (curYear == onlyLikDate.getFullYear() && curMonth == onlyLikDate.getMonth()) {
            $('#lik-fullcalendar .today-month').css('display', 'none');
        } else {
            $('#lik-fullcalendar .today-month').css('display', 'block');
        }
    }

    getCurrentMonthDays(currentYear, currentMonth);

    $('#lik-fullcalendar .cur-month').html(currentYear + '年' + (currentMonth + 1) + '月');
    //prev month
    $('#lik-fullcalendar .prev-month').on('click', function () {
        if (currentMonth == 0) {
            currentMonth = 11;
            currentYear -= 1;
            oDate.setFullYear(currentYear);
            $('#lik-fullcalendar .cur-month').html(currentYear + '年' + (currentMonth + 1) + '月');
        } else {
            currentMonth--;
            oDate.setMonth(currentMonth);
            $('#lik-fullcalendar .cur-month').html(currentYear + '年' + (currentMonth + 1) + '月');
        }
        likCurrentMonthShow(currentYear, currentMonth);
        getCurrentMonthDays(currentYear, currentMonth);
    });
    //next month
    $('#lik-fullcalendar .next-month').on('click', function () {
        if (currentMonth >= 11) {
            currentMonth = 0;
            currentYear += 1;
            oDate.setFullYear(currentYear);
            $('#lik-fullcalendar .cur-month').html(currentYear + '年' + (currentMonth + 1) + '月');
        } else {
            currentMonth++;
            oDate.setMonth(currentMonth);
            $('#lik-fullcalendar .cur-month').html(currentYear + '年' + (currentMonth + 1) + '月');
        }
        likCurrentMonthShow(currentYear, currentMonth);
        getCurrentMonthDays(currentYear, currentMonth);
    });
    //go back to current month
    $('#lik-fullcalendar .today-month').on('click', function () {
        //get current year
        currentYear = onlyLikDate.getFullYear();
        //get current month
        currentMonth = onlyLikDate.getMonth();
        console.log(currentYear, currentMonth);
        $('#lik-fullcalendar .cur-month').html(currentYear + '年' + (currentMonth + 1) + '月');
        likCurrentMonthShow(currentYear, currentMonth);
        getCurrentMonthDays(currentYear, currentMonth);
    })

});
