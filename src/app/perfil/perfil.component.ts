import { Component, OnInit } from '@angular/core';
import { PerfilServiceService  } from '../perfil-service.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit {
  dados: any;

  constructor(private perfilServiceService: PerfilServiceService) { }

  ngOnInit(): void {
    console.log('PerfilComponent.ngOnInit');
    this.perfilServiceService.getDados().subscribe(dados => {
      console.log(dados);
      this.dados = dados;
    });
  }
}
