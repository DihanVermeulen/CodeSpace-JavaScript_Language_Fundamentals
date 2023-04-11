# Using Arrays

## Task

You have been handed a data structure that contains information about two athletes. All information is stored under the variable data. However the variable contains additional information returned from the server, so you will need to traverse into the structure to retrieve information from an embedded property also called data.

The nested data property contains an object of two individuals, each with a unique ID that is used as their key in the object. You are to ensure that the following is displayed for each individual on the page (matching each individual with their specific section element).

Each section should contain the following:

- An h2 title that shows the id property of the athlete
- A description list that matches values (<dd>) with keys (<dt>). These key/values should be as follows:
- Full name (firstName and surname) of athlete
- The total recorded amount of races they ran as a number. For example 3 or 5
- The date of the last race they ran should be formatted as d MM YYYY in accordance with the TR35 standard, For example, 7 Oct 2022.
- The total time it took to complete the last race also formatted with the TR35 standard as HH:MM. For example, 91 minutes will be 01:31

Note that while the total time is not stored directly in the data structure, each individual lap time (as minutes) is saved in an array. Keep in mind that all races always have four laps.

Also, note that all races are currently stored in the order that occurred. This means that you will need to reverse the order if you want to target the first race, or you will need to find a way to target the last race that has been logged for each.

Currently, the code below does not want to run. However please fix it so that it displays the correct information as follows:

- Athlete: Nwabisa Masiko
- Total Races: 2
- Event Date (Latest): 19 Oct 2022
- Total Time (Latest): 00:30
- Athlete: Schalk Venter
- Total Races: 4
- Event Date (Latest): 3 Nov 2022
- Total Time (Latest): 00:30
