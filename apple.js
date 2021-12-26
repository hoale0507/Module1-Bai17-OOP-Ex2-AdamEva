class Apple{
    _weight;
    _color;
    constructor(weight) {
        this._weight = weight;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
    decrease(){
        this._weight--;
    }
    isEmpty(){
        if(this._weight === 0){
            return true;
        } else {
            return false;
        }
    }
}