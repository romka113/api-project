interface Rates{
  USD:string
}

export interface Money{
  amount:number;
  base:string;
  rates:Rates;
}
