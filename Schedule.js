//Schedule class, it has array to store all strings with activities
class Schedule {
    constructor(){
        this.array = [];
    }
    //sort
    sort(){
        var n = this.array.length;
        for (var i = 0; i < n-1; i++)
            for (var j = 0; j < n-i-1; j++)
            {
                var dd =  Number(this.array[j].date.charAt(0) + this.array[j].date.charAt(1));
                var mm = Number(this.array[j].date.charAt(3) + this.array[j].date.charAt(4));
                var yy = Number(this.array[j].date.charAt(6) + this.array[j].date.charAt(7) + this.array[j].date.charAt(8) + this.array[j].date.charAt(9));
                var min = Number(this.array[j].time.charAt(0) + this.array[j].time.charAt(1));
                var h = Number(this.array[j].time.charAt(3) + this.array[j].time.charAt(4));
                var extra1 = new Date(yy,mm,dd,h,min);

                var dd1 =  Number(this.array[j+1].date.charAt(0) + this.array[j+1].date.charAt(1));
                var mm1 = Number(this.array[j+1].date.charAt(3) + this.array[j+1].date.charAt(4));
                var yy1 = Number(this.array[j+1].date.charAt(6) + this.array[j+1].date.charAt(7) + this.array[j+1].date.charAt(8) + this.array[j+1].date.charAt(9));
                var min1 = Number(this.array[j+1].time.charAt(0) + this.array[j+1].time.charAt(1));
                var h1 = Number(this.array[j+1].time.charAt(3) + this.array[j+1].time.charAt(4));
                var extra2 = new Date(yy1,mm1,dd1,h1,min1); 

                if(extra1.getTime() > extra2.getTime()){
                    var temp = this.array[j];
                    this.array[j] = this.array[j+1];
                    this.array[j+1] = temp;
                }
            }
    }
    //method to chech if format of one activity string is correct
    valid(input){
        var stringArray = input.split(" | ");
        if(stringArray.length == 4)
            return true;
        else
            return false;
    }
    //transform activity string to object of ACtivity class
    parse(input){
        var stringArray = input.split(" | ");
        var Activ = new Activity(stringArray[0],stringArray[1],stringArray[2],stringArray[3]); 
        return Activ;
    }
    //add new schedule
    addActivity(input){
        var stringArray = input.split("\n");
        this.array = [];
        for(var i=0; i < stringArray.length;i++){
            if(this.valid(stringArray[i])){
                var actNew = parse(stringArray[i]);
                var has = false;
                for(var j=0;j < this.array.length;i++){
                    if(actNew.equal(this.array[j])){
                        has = true;
                        break;
                    }
                }
                if(has == false){
                    this.array[this.array.length] = actNew;
                    this.sort();
                }
            }
        }
    }
    //return next activity according to date and time now. goes through array and find string. return "" if founds nothing.
    activity_next(){
        var str = "";
        if(this.array.length != 0){
            for(var i = 0;i <this.array.length;i++){
                var nowDate = new Date(); //date now
                var dd =  Number(this.array[i].date.charAt(0) + this.array[i].date.charAt(1));
                var mm = Number(this.array[i].date.charAt(3) + this.array[i].date.charAt(4));
                var yy = Number(this.array[i].date.charAt(6) + this.array[i].date.charAt(7) + this.array[i].date.charAt(8) + this.array[i].date.charAt(9));
                var min = Number(this.array[i].time.charAt(0) + this.array[i].time.charAt(1));
                var h = Number(this.array[i].time.charAt(3) + this.array[i].time.charAt(4));
                var extra = new Date(yy,mm,dd,h,min);
                if(nowDate.getTime() <= extra.getTime()){
                    str = str + this.array[i].date + '\n';
                    str = str + this.array[i].time + " | " + this.array[i].act + " | " + this.array[i].place;
                    break;
                }
            }
        }
        return str;
    }
    //return string with all activities for this day. return "" if founds nothing.
    activity_day(day){
        var str = "";
        var c = 1;
        if(this.array.length != 0){
        for(var i = 0;i <this.array.length;i++){
            if((this.array[i].date == day)&&(c != 1)){
                str = str + this.array[i].time + " | " + this.array[i].act + " | " + this.array[i].place + '\n';
            } else {
                if((this.array[i].date == day)&&(c == 1)){
                    str = str + this.array[i].date + '\n';
                    str = str + this.array[i].time + " | " + this.array[i].act + " | " + this.array[i].place + '\n';
                    c == 0;
                }
            }
            
    }
}   
    return str;
 }
 //return string with all activities in array. return "" if founds nothing. 
    activity_all(){
       var str = "";
       if(this.array.length != 0){
       str = str + this.array[0].date + '\n';
       str = str + this.array[0].time + " | " + this.array[0].act + " | " + this.array[0].place + '\n';
       var same = false;    
       for(var i = 1;i <this.array.length;i++){

        if(this.array[i].date == this.array[i-1].date)
            same = true;
        else 
            same = false;

        if(same)
            str = str + this.array[i].time + " | " + this.array[i].act + " | " + this.array[i].place + '\n';
        else 
            {
                str = str + this.array[i].date + '\n';
                str = str + this.array[i].time + " | " + this.array[i].act + " | " + this.array[i].place + '\n'; 
            }
       }
    }
       return str;
    }
    //return first day of the shedule 
    firstDay(){
        return this.array[0].date;
    }
    //return last day of the shedule 
    LastDay(){
        return this.array[this.array.length-1].date;
    }
}
