export class Enterprise implements IEnterprise {
  constructor(
    public name: string,
    public phone?: string,
    public whatsapp?: string
  ){}
  }

  interface IEnterprise {
    name: string,
    phone?: string,
    whatsapp?: string
  }