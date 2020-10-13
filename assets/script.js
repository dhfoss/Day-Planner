$(document).ready(function() {
    // Function that gets the current time from moment.js, and updates the Scheduler
    function setTime() {
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
    }

    // This loop will check local storage for any notes, and print them in their respective time blocks
    for (i = 6; i < 19; i++) {
        var entryObjectString = localStorage.getItem(i + ' Saved Entry')
        if (entryObjectString) {            
            var entryObject = JSON.parse(entryObjectString);
            $("textarea[value~=" + i + "]").val(entryObject.note);
        }
    }

    // The save icon unlocks if user types anything into input area.
    // The lock will only unlock if the entry is a number, letter, punctuation, or space.
    $('textarea').on('keydown', function(e) {
        if (e.keyCode == 8 || e.keyCode == 32 || (48 <= e.keyCode && e.keyCode <= 57 ) || (65 <= e.keyCode && e.keyCode <= 90) || (186 <= e.keyCode && e.keyCode <= 192) || (219 <= e.keyCode && e.keyCode <= 222)) {
            ($(this).next().children().children().attr('class', 'fas fa-lock-open fa-lg'));
        }
    });
    
    // The save icon locks if the user clicks the lock
    $('button').on('click', function() {
        $(this).children('i').attr('class', 'fas fa-lock fa-lg');
    });

    // This controls the save buttons.  If there is a note in the block, it will save to local storage.
    // If there is nothing in the block, it will remove the local storage.
    $(".input-group").on('click', function(e) {
        if ($(e.target).is('button') || $(e.target).is('i')) {
            if (!$(this).children('textarea').val().trim()) {
                localStorage.removeItem($(this).children('textarea').attr('value') + ' Saved Entry');
                $(this).children('textarea').val('');
            } else {
                var entryObject =  {
                    note: $(this).children('textarea').val().trim(),
                    hour: $(this).children('textarea').attr('value')
                }
                entryObjectString = JSON.stringify(entryObject);
                localStorage.setItem(entryObject.hour + ' Saved Entry', entryObjectString);
            }
        }
    })

    // This section calls the setTime function, once as the page is loaded, and once every second in order to update the scheduler in real time.
    // setTime is called immediately so there is no 1 second delay in updating the time.
    setTime();
    setInterval(function() {
        setTime();
    }, 1000);
});