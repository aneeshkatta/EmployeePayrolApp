class EmployeePayrollData{
    id;
    name;
    salary;
    gender;
    startDate;
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }
    get id()  {return this.id;}
    set id(id)  {
        this._id=id;       
    }
    get Profilepic()  {return this.Profilepic;}
    set Profilepic(Profilepic)  {
        this.Profilepic=Profilepic;       
    }
    get name()  {return this._name;}
    set name(name)  {
        let RegexExpofName= RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(RegexExpofName.test(name))
        this._name=name;
        else throw 'Name is incorrect'
        
    }
    get salary()  {return this._salary;}
    set salary(salary)  {this._salary=salary;}
    get gender()  {return this._gender;}
    set gender(gender)  {this._gender=gender;}
    get startDate()  {return this._startDate;}
    set startDate(startDate)  {this._startDate=startDate;}
    toString()
    {
        const options = { day:'numeric', month:'long', year: 'numeric'};
        const empjoineddate=this.startDate ===undefined ?"undefined": 
        this.startDate.toLocaleDateString("en-US",options);
        return "id="+this.id+", name="+this.name+", salary="+this.salary+", gender="+this.gender+", startDate="+empjoineddate ;
    }
}
