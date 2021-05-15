export class Product implements IProduct {
  constructor(
    public id:number,
    public name:string,
    public value:number,
    public description?:string,
  ){}
}

interface IProduct {
  id:number,
  name:string,
  description?:string,
  value?:number
}