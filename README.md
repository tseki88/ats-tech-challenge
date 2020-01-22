## Self Notes

 - react-csv-reader used to upload and import csv file


## Questions Requiring Clarification
 - Date file format MM/DD/(this part has 4~6 digits)
    - First thought it could possibly be : 15346 => 2015 - 03:46 ; 3618 => 2003 - 06:18
    - However 17871 wouldn't make sense 2017 - 08:71 (71 min...) 


## Data Visualization Ideas
Database:
 - Gender / Age : Stacked Bars with Central Axis

Filter:
 - Count value, average

Misc:
 - Basic SunBurst : Car Make => Model

## test-4

Given the test_data1.csv file

create an interface to upload the csv file, and display the data in a clever way.

What we are looking for:
1) Sorting, graphs, analytics ar all allowed. We want to see a useful way to view this data.
2) we are looking for a single page application

Bonus points:
- we use React in house so Bonus for using it, but not a requirement
- ES6
- flux pattern
- immutable data structures
- functional programming
- scalable charts (test_data1 and test_data2 have debits between 1 and 100, test_data3 has debits between 1 and 10)
- works

Challenge mode:
- test_data2b contains "dirty" data, clean it up before displaying it! (test_data2a is the original data)