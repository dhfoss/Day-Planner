# Day-Planner

https://dhfoss.github.io/Day-Planner/

### Overview
This planner app allows the user to schedule their day in hourlong blocks.  It displays the date and time on the top. and it updates in updates in real time, using moment.js.  The past hours are colored white, the present hour is colored red, and the future hours are colored green. When the user types in a note in one of the inputs, the icon to the right unlocks, notifying the user that their changes must be saved.  By clicking the lock, the lock closes, and the user's note is stored in local storage, so that if the page is refreshed, the note will stay where they put it.

### APIs Used
Moment.js

### Framework
Bootstrap

### Functionality
The first function gets the time from moment js and displays the date and time at the top of the page.  It then updates the colors of the hours as mentioned above, by comparing the data value of the hour block to the current hour (using a moment.js method).  
![Set Time Function](/assets/screen-shots/setTimeFunction.png?raw=true "Optional Title")

The next block of code is a for loop that cycles through the local storage.  If there is a data that matches the hour, it is displayed in the input. Since the notes are stored with a key named after their data value, there is a possible local storage item for every hour.  
![Local Storage Check](/assets/screen-shots/localStorageCheck.png?raw=true "Optional Title")

The next code block is an event listener for the input space.  If the user types a note into the input, the save button will show an image of an open lock.  This will only fire if a letter, number, punctuation, or space is typed by the user, since every other button will not change the input value. The class of the 'i' tag is then switched to a font awesome icon of an open lock.  
![Unlock Icon](/assets/screen-shots/unlockIcon.png?raw=true "Optional Title")

Next is a listener that closes the lock when the save button is closed. This is done by switching the class of the 'i' tag back to the font awesome icon of a closed lock.  
![Lock Icon](/assets/screen-shots/lockIcon.png?raw=true "Optional Title")

The next listener is fired when the save butto is clicked, and it stores the note in local storage.  First it determines if the taget is either the button or the font awesome icon (since the listener is set to the whole input group to more easily traverse the DOM). First it checks if the input is empty, inplying that the user deleted their note. If it is, it removes the item from local storage.  If there is data in the input box (i.e. if the user entered in something new), the note and the hour are saved as properties of an object. This object is than stringified, and saved with a key that includes the hour in the name, so it can be referenced and matched to the hour when the page is refreshed.  
![Save Note](/assets/screen-shots/saveNote.png?raw=true "Optional Title")

Finally, the setTime function (explained above) is run when the page loads, and once every second. It is called imediately so that the page does not take a second to update, but rather as soon as the page loads.  It is called every second so that it can update in real time.  
![Run Application](/assets/screen-shots/runApp.png?raw=true "Optional Title")

Thank you for checking out my app!  
-DHF  
dhfoss89@gmail.com
# Day-Planner

https://dhfoss.github.io/Day-Planner/

### Overview
This planner app allows the user to schedule their day in hourlong blocks.  It displays the date and time on the top. and it updates in updates in real time, using moment.js.  The past hours are colored white, the present hour is colored red, and the future hours are colored green. When the user types in a note in one of the inputs, the icon to the right unlocks, notifying the user that their changes must be saved.  By clicking the lock, the lock closes, and the user's note is stored in local storage, so that if the page is refreshed, the note will stay where they put it.

### APIs Used
Moment.js

### Framework
Bootstrap

### Functionality
The first function gets the time from moment.js and displays the date and time at the top of the page.  It then updates the colors of the hours as mentioned above, by comparing the data value of the hour block to the current hour (using a moment.js method).  
![Set Time Function](/assets/screen-shots/setTimeFunction.png?raw=true "Optional Title")

The next block of code is a for loop that cycles through the local storage.  If there is a data that matches the hour, it is displayed in the input. Since the notes are stored with a key named after their data value, there is a possible local storage item for every hour.  
![Local Storage Check](/assets/screen-shots/localStorageCheck.png?raw=true "Optional Title")

The next code block is an event listener for the input space.  If the user types a note into the input, the save button will show an image of an open lock.  This will only fire if a letter, number, punctuation, or space is typed by the user, since every other button will not change the input value. The class of the 'i' tag is then switched to a font awesome icon of an open lock.  
![Unlock Icon](/assets/screen-shots/unlockIcon.png?raw=true "Optional Title")

Next is a listener that closes the lock when the save button is closed. This is done by switching the class of the 'i' tag back to the font awesome icon of a closed lock.  
![Lock Icon](/assets/screen-shots/lockIcon.png?raw=true "Optional Title")

The next listener is fired when the save button is clicked, and it stores the note in local storage.  First it determines if the target is either the button or the font awesome icon (since the listener is set to the whole input group to more easily traverse the DOM). First it checks if the input is empty, implying that the user deleted their note. If it is, it removes the item from local storage.  If there is data in the input box (i.e. if the user entered in something new), the note and the hour are saved as properties of an object. This object is then stringified, and saved with a key that includes the hour in the name, so it can be referenced and matched to the hour when the page is refreshed.  
![Save Note](/assets/screen-shots/saveNote.png?raw=true "Optional Title")

Finally, the setTime function (explained above) is run when the page loads, and once every second. It is called immediately so that the page does not take a second to update, but rather as soon as the page loads.  It is called every second so that it can update in real time.  
![Run Application](/assets/screen-shots/runApp.png?raw=true "Optional Title")

Thank you for checking out my app!  
-DHF  
dhfoss89@gmail.com