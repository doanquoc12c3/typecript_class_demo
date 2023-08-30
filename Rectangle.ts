import { Shape } from "./inheritance";

export class Rectangle extends Shape{
    _height: number;
    _width: number;
    _radius: number;
    constructor(width:number, height:number, radius:number){
        super(width,height);
        this._radius = radius; 
    }

    getInfor():string{
        return `chieu dai: ${this._height}, chieu rong: ${this._width}, ban kinh: ${this._radius}` 
    }


}



