class EmployeePayrollData {
    id;
    name;
    salary;
    gender;
    startDate;
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }
    get Profilepic() { return this._Profilepic; }
    set Profilepic(Profilepic) {
        this.Profilepic = Profilepic;
    }
    get name() { return this._name; }
    set name(name) {
        let RegexExpofName = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if (RegexExpofName.test(name))
            this._name = name;
        else throw 'Name is incorrect'

    }
    get salary() { return this._salary; }
    set salary(salary) { this._salary = salary; }
    get note() { return this._note; }
    set note(note) { this._note = note; }
    get Department() { return this._Department; }
    set Department(Department) { this._Department = Department; }
    get gender() { return this._gender; }
    set gender(gender) { this._gender = gender; }
    get startDate() { return this._startDate; }
    set startDate(startDate) { this._startDate = startDate; }
    toString() {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const empjoineddate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", Department=" + this.Department + ", salary=" + this.salary + ", gender=" + this.gender + ", startDate=" + empjoineddate + ", Profilepic" + Profilepic;
    }

}
window.addEventlistener('DOMContentloaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.textError');
    name.addEventlistener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";

        } catch (e) {
            textError.textContent = e;

        }

    });
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });

});
