//  `customers`(`ID`, `CustomerName`, `Occupation`, `Phone`, `Email`)
//  `tasks`(`ID`, `Description`, `IsCompleted`,`createdAt`, `CustomerID`,'CustomerName' )
export class Task {
  ID: number = 0;
  Description: string = '';
  IsCompleted: number = 0;
  createdAt: string = '';
  CustomerID: number = 0;
  CustomerName: string = '';

  constructor(
    ID?: number,
    Description?: string,
    IsCompleted?: number,
    createdAt?: string,
    CustomerID?: number,
    CustomerName?: string
  ) {
    this.ID = ID || 0;
    this.Description = Description || '';
    this.IsCompleted = IsCompleted || 0;
    this.createdAt = createdAt || '';
    this.CustomerID = CustomerID || 0;
    this.CustomerName = CustomerName || '';
  }
}
//  `customers`(`ID`, `CustomerName`, `Occupation`, `Phone`, `Email`)

export class Customer {
  ID: number = 0;
  CustomerName: string = '';
  Occupation: string = '';
  Phone: string = '';
  Email: string = '';

  constructor(
    ID?: number,
    CustomerName?: string,
    Occupation?: string,
    Phone?: string,
    Email?: string
  ) {
    this.ID = ID || 0;
    this.CustomerName = CustomerName || '';
    this.Occupation = Occupation || '';
    this.Phone = Phone || '';
    this.Email = Email || '';
  }
}
