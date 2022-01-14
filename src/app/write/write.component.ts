import {Component, Inject, OnInit} from '@angular/core';
import {Personnes} from "../modeles/Personnes";
import {MessagesService} from "../services/messages.service";
import {Message} from "../modeles/Message";


@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  ngOnInit(): void {
  }
constructor(@Inject(MessagesService) private monService: MessagesService) {

}
  soumissionDuForm(valeurs: any): void {

    console.log(valeurs.auteur);
    console.log(valeurs.message);
    let msg = new Message(valeurs.message,new Personnes(valeurs.auteur,"") );
    this.monService.addMess(msg);
  }
}
