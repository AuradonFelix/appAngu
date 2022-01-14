import {Component, Inject, OnInit} from '@angular/core';
import {Personnes} from "../modeles/Personnes";
import {MessagesService} from "../services/messages.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public tabPers: Personnes[];

  constructor(  @Inject(MessagesService) private serv: MessagesService) {
    this.tabPers = this.serv.recupTabPers();
  }

  ngOnInit(): void {
  }

}
