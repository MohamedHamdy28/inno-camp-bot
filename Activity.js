class Activity{
    //save date in form of string - dd.mm.yyyy, time - hh:mm, act and place are just strings
    constructor(date,time,act,place){
        this.date = date;
        this.time = time;
        this.act = act;
        this.place = place;
    }

    get date(){
        return this.date;
    }

    get time(){
        return this.time;
    }

    get act(){
        return this.act;
    }

    get place(){
        return this.place;
    }
    //return true if 2 Activities are equal
    equal(activ){
        if((this.date == activ.date)&&(this.time == activ.time)&&(this.act == activ.act)&&(this.place == activ.place))
            return true;
        else return false;
    }
}