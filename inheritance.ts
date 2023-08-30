export class Shape{
    _width:number;
    _height:number;
    constructor(width:number, height:number){
        this._width = width;
        this._height = height;
    }
    getheight():number {
        return this._height
    }

    setheight(value:number){
        this._height = value;
    }

    getwidth():number {
        return this._width
    }

    setwidth(value:number){
        this._width = value;
    }
}