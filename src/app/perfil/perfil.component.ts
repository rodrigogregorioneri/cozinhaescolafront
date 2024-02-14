import { Component, OnInit } from '@angular/core';
import { PerfilServiceService  } from '../perfil-service.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
<<<<<<< HEAD
export class PerfilComponent {
  isStyleChanged = true;

=======
export class PerfilComponent implements OnInit {
  dados: any;
>>>>>>> master

  constructor(private perfilServiceService: PerfilServiceService) { }

  ngOnInit(): void {
    console.log('PerfilComponent.ngOnInit');
    this.perfilServiceService.getDados().subscribe(dados => {
      console.log(dados);
      this.dados = dados;
    });
  }
}
