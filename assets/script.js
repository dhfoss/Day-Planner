$(document).ready(function() {

    $(function() {
        // Sets the date, time, and hour block.  This way the user does not have to wait a second for everything to load
        m = moment();
        var currentHour = m.hour();
        $('#currentDay').text(m.format('dddd[, ]' + 'Do[ of ]' + 'MMMM'));
        $('#currentTime').text(m.format('LT'));
        $('textarea').each(function() {
            var hour = $(this).attr('value');
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

        // Same as above, but it updates itself every second
        setInterval(function() {
            var m = moment();
            var currentHour = m.hour();
            $('#currentDay').text(m.format('dddd[, ]' + 'Do[ of ]' + 'MMMM'));
            $('#currentTime').text(m.format('LT'));
            $(function() {
                $('textarea').each(function() {
                    var hour = $(this).attr('value');
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

    // Set click listener to class .input-group
    $(".input-group").on('click', function(e) {
        if ($(e.target).is('button')) {
            var entryObject =  {
                note: $(this).children('textarea').val().trim(),
                hour: $(this).children('textarea').attr('value')
            }
            entryObjectString = JSON.stringify(entryObject);
            localStorage.setItem(entryObject.hour + ' Saved Entry', entryObjectString);
        }
    })

    $(function() {
        for (i = 6; i < 19; i++) {
            var entryObjectString = localStorage.getItem(i + ' Saved Entry')
            if (!entryObjectString) {            
            } else {
                var entryObject = JSON.parse(entryObjectString);
                $("textarea[value~=" + i + "]").val(entryObject.note);
            }
        }
    })    
});