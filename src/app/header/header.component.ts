import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public titre: string = "Hacker's Cord";

  public tab: number[] = [0, 0, 1, 2]
  public objet: any = {
    nom: 'bruce',
  prenom: 'wayne',
};
  public varia : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
