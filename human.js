class Human{
    _name;
    _gender;
    _weight;
    constructor(name, gender, weight) {
        this._name = name;
        this._gender = gender;
        this._weight = weight;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
    isMale(){
        if(this.gender === 'Male'){
            return true;
        } else {
            return false;
        }
    }
    setGender(){
        if(this.isMale()){
        alert('Gender is Male!');
        } else {
            alert('Gender is Female!');
        }
    }
    say(){
        alert('My name is '+this.name);
    }
    checkApple(apple){
        if(apple.isEmpty){
            alert('Apple is not empty');
        } else {
            alert('Apple is empty');
        }
    }
    eatApple(apple){
        apple.decrease();
        this.weight++;
    }
}