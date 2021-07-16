// `women`(`ID`, `WomanName`, `DateOfBirth`, `Country`, `Description`, `UserID`);
//  `users`(`ID`, `UserName`, `Email`, `Password`, `createdAt`);

// "ID": 12,
// "WomanName": " ",
// "DateOfBirth": "1964-01-13T12:24:20.000Z",
// "Country": "",
// "Description": "",
// "UserID": 1,
// "UserName": ""

export class Woman {
  ID: number = 0;
  WomanName: string = '';
  DateOfBirth: string = '';
  Country: string = '';
  Description: string = '';
  UserID: number = 0;
  UserName: string = '';

  constructor(
    ID?: number,
    WomanName?: string,
    DateOfBirth?: string,
    Country?: string,
    Description?: string,
    UserID?: number,
    UserName?: string
  ) {
    this.ID = ID || 0;
    this.WomanName = WomanName || '';
    this.DateOfBirth = DateOfBirth || '';
    this.Country = Country || '';
    this.Description = Description || '';
    this.UserID = UserID || 0;
    this.UserName = UserName || '';
  }
}
//  `users`(`ID`, `UserName`, `Email`, `Password`, `createdAt`);

export class User {
  ID: number = 0;
  UserName: string = '';
  Email: string = '';
  Password: string = '';
  createdAt: string = '';

  constructor(
    ID?: number,
    UserName?: string,
    Email?: string,
    Password?: string,
    createdAt?: string
  ) {
    this.ID = ID || 0;
    this.UserName = UserName || '';
    this.Email = Email || '';
    this.Password = Password || '';
    this.createdAt = createdAt || '';
  }
}

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
