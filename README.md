# inno-camp-bot


## TODO:
All time should be GMT+3 \
Create a file for each task

### Schedule

Create a calendar class that contains information about each activity.
Required functions:
**Parse(String input)** - returns a Calendar with all activities

**Activity_next()** - return string, next activity based on current date/time

**Activity_day(String day)** - return string, get all activities in a day

**Activity_all()** - return string, all activities

*Input file format:*
```
Date(MM-DD-YYYY) | Time(HH:mm:ss) | Activity | Place \
```
Example:
```
06-07-2021 | 22:46:00 | Study | room 108
```

*Output example:* (for activity_all())
```
Date (DD month_name) 
HH:mm:ss | First_activity | Place
HH:mm:ss | Second_activity | Place
```

### Homeworks

Home work class that contains entries with date and homework text \
**Functions:** \
**upload()** - appends homework to the list, overwrites the entires for the dates that already exist. \
**get_tomorrow()** - return string with homework for tomorrow \
**get_all()** - return string with all existing homeworks

**Input format:**
```
MM-DD-YYYY | Hw text
```

**Output format:**
```
DD month_name | Hw text
```

### Group
Group class consists of members:
pupils: Array
accompanying: Array
Teachers: Array
Calendar
HomeWork

*Functions:*\
**Parse_members(String input)** - sets pupils etc \
*Format* (separator is space):
```
first line has all pupils (ex: nickname1 second_nick)
second line has all accompanying
third line has all teachers
```

**find_member(String nickname)** - returns member type ("pupil", "accompanying", "teacher", "none")


