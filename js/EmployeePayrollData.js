class EmployeePayrollData {
   
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect'

    }
    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    get gender() { return this._gender; }
    set gender(gender) { this._gender = gender; }
    get department() { return this._department; }
    set department(department) { this._department = department; }
    get salary() { return this._salary; }
    set salary(salary) { this._salary = salary; }
    get note() { return this._note; }
    set note(note) { this._note = note; }  
    get startdate() { return this._startdate; }
    set startdate(startdate) {  
    this._startdate = startdate; }
    toString() {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const empjoineddate = !this.startdate ? undefined :
            this.startdate.toLocaleDateString("en-gb", options);
        return " id=" + this.id +" name=" + this.name + ", gender=" + this.gender + + ", profilePic" + this.profilePic+", department=" + this.department + ", salary=" + this.salary + ", startdate=" + empjoineddate +" Note=" + this.note ;
    }  
}
