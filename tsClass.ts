class MyClass{
     name:string;
     age:number;
    constructor(name: string,age:number){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name
    }

    setName(name:string){
        this.name = name
    }
}

let myClass = new MyClass("doan quoc",25);
let myName:string = myClass.getName()
console.log(myClass.getName())
console.log(myClass.getName())
