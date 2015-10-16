$( document ).ready(function() {
    $('.bxslider1').bxSlider({
        slideWidth: 880,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0
    });

    $(".placeholder").textPlaceholder();

    var day = 9
    var month = 05
    var year = 2014
    var hour = 23
    var min = 59
    var sec = 1


    var m=new Date();
    $('#countdown_dashboard').countDown({
        targetOffset: {
            'day': 		0,
            'month': 	0,
            'year': 	0,
            'hour': 	(23-m.getHours()),
            'min': 		(60-m.getMinutes()),
            'sec': 		(60-m.getSeconds())
        },
        // onComplete function
        onComplete: function() {



            reset();
        }

    });

    function reset() {
        $('#countdown_dashboard').stopCountDown();
        $('#countdown_dashboard').setCountDown({
            targetDate: {
                'day':      day,
                'month':    month,
                'year':     year,
                'hour':     hour,
                'min':      min,
                'sec':      sec
            }
        });
        $('#countdown_dashboard').startCountDown();
    }

    $('#countdown_dashboard1').countDown({
        targetOffset: {
            'day': 		0,
            'month': 	0,
            'year': 	0,
            'hour': 	(23-m.getHours()),
            'min': 		(60-m.getMinutes()),
            'sec': 		(60-m.getSeconds())
        },
        // onComplete function
        onComplete: function() {



            reset();
        }

    });

    function reset() {
        $('#countdown_dashboard1').stopCountDown();
        $('#countdown_dashboard1').setCountDown({
            targetDate: {
                'day':      day,
                'month':    month,
                'year':     year,
                'hour':     hour,
                'min':      min,
                'sec':      sec
            }
        });
        $('#countdown_dashboard1').startCountDown();
    }

})