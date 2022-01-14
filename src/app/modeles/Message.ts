import {Personnes} from "./Personnes";

export class Message {

  private _message: string;
  private _user :Personnes;
  private _date: Date;


  get message(): string {
    return this._message;
  }

  get user(): Personnes {
    return this._user;
  }

  get date(): Date {
    return this._date;
  }

  constructor(message: string, user: Personnes) {
    this._message = message;
    this._user = user;
    this._date = new Date();
  }
}
