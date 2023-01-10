class EmployeePayrollData {
   
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }
    get name() { return this._name; }
    set name(name) {
        let RegexExpofName = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if (RegexExpofName.test(name))
            this._name = name;
        else throw 'Name is incorrect'

    }
    get Profilepic() { return this._Profilepic; }
    set Profilepic(Profilepic) {
        this.Profilepic = Profilepic;
    }
    get gender() { return this._gender; }
    set gender(gender) { this._gender = gender; }
    get department() { return this._department; }
    set department(department) { this._department = department; }
    get salary() { return this._salary; }
    set salary(salary) { this._salary = salary; }
    get note() { return this._note; }
    set note(note) { this._note = note; }  
    get startDate() { return this._startDate; }
    set startDate(startDate) { this._startDate = startDate; }
    toString() {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const empjoineddate = !this.startDate ? undefined :
            this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", gender=" + this.gender + + ", Profilepic" + Profilepic+", department=" + this.department + ", salary=" + this.salary + ", startDate=" + empjoineddate ;
    }
}

