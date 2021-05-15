export class Enterprise implements IEnterprise {
  constructor(
    public identity: string,
    public name: string,
    public phone: string,
    public responsible: string,
    public email: string
  ){}
  
  }

export interface IEnterprise {
  identity?: string,
  name?: string,
  phone?: string,
  responsible?: string,
  email?:string
}