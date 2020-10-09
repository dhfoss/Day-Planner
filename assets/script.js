$(document).ready(function() {


    
    // $('#currentDay').text(currentTimeString);


    // setInterval(function() {
    //     var m = moment();
    //     var currentHour = m.hour();
    //     console.log(currentHour);
    //     $('#currentDay').text(m.format('dddd[, ]' + 'Do[ of ]' + 'MMMM'));
    //     $('#currentTime').text(m.format('LT'));
    //     $(function() {
    //         $('textarea').each(function() {
    //             var hour = $(this).attr('value');
    //             console.log(hour);
    //             if (hour < currentHour) {
    //                 $(this).removeClass('bg-danger');
    //                 $(this).removeClass('bg-success');
    //             }
    //             if (hour == currentHour) {
    //                 $(this).addClass('bg-danger');
    //                 $(this).removeClass('bg-success');
    //             }
    //             if (hour > currentHour) {
    //                 $(this).removeClass('bg-danger');
    //                 $(this).addClass('bg-success');
    //             }
    //         });
    //     });
    
        
        
    // }, 1000);


    $(function() {

        m = moment();
        var currentHour = m.hour();
        $('#currentDay').text(m.format('dddd[, ]' + 'Do[ of ]' + 'MMMM'));
        $('#currentTime').text(m.format('LT'));
        $('textarea').each(function() {
            var hour = $(this).attr('value');
            console.log(hour);
            if (hour < currentHour) {
                $(this).removeClass('bg-danger');
                $(this).removeClass('bg-success');
            }
            if (hour == currentHour) {
                $(this).addClass('bg-danger');
                $(this).removeClass('bg-success');
            }
            if (hour > currentHour) {
                $(this).removeClass('bg-danger');
                $(this).addClass('bg-success');
            }
        });

        
        setInterval(function() {
            var m = moment();
            var currentHour = m.hour();
            $('#currentDay').text(m.format('dddd[, ]' + 'Do[ of ]' + 'MMMM'));
            $('#currentTime').text(m.format('LT'));
            $(function() {
                $('textarea').each(function() {
                    var hour = $(this).attr('value');
                    console.log(hour);
                    if (hour < currentHour) {
                        $(this).removeClass('bg-danger');
                        $(this).removeClass('bg-success');
                    }
                    if (hour == currentHour) {
                        $(this).addClass('bg-danger');
                        $(this).removeClass('bg-success');
                    }
                    if (hour > currentHour) {
                        $(this).removeClass('bg-danger');
                        $(this).addClass('bg-success');
                    }
                });
            });
        
            
            
        }, 1000);
    
    });








    // console.log($('#test').attr('value'));

    // m = moment();

    // console.log(m.hour());

//     setInterval (
//         m = moment(),
//         currentTimeString = m.toString();
//         $('#currentDay').text(currentTimeString),
//         1000)
    


// updateCurrentTime();








    
});





