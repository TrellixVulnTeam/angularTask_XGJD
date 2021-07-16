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

export class Action {
  ID: number = 0;
  AccountID: number = 0;
  ActionType: number = 0;
  Amount: number = 0;
  Credit: number = 0;
  payQnt: number = 0;
  createdAt: string = '';

  constructor(
    ID?: number,
    AccountID?: number,
    ActionType?: number,
    Amount?: number,
    Credit?: number,
    payQnt?: number,
    createdAt?: string
  ) {
    this.ID = ID || 0;
    this.AccountID = AccountID || 0;
    this.ActionType = ActionType || 0;
    this.Amount = Amount || 0;
    this.Credit = Credit || 0;
    this.payQnt = payQnt || 0;
    this.createdAt = createdAt || '';
  }
}
