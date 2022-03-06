import { Component, OnInit } from '@angular/core';
import { InfoPaginasService } from '../../services/info-paginas.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public infoService: InfoPaginasService ) { }

  ngOnInit() {
  }

}
