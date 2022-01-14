export class Personnes {
    private _nom: string;
    private _prenom: string;


  get nom(): string {
    return this._nom;
  }

  get prenom(): string {
    return this._prenom;
  }

  constructor(nom: string, prenom: string) {
    this._nom = nom;
    this._prenom = prenom;
  }
}
