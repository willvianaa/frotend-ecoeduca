import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobreaconta',
  templateUrl: './sobreaconta.component.html',
  styleUrl: './sobreaconta.component.css'
})
export class SobreacontaComponent {
  nomeUsuario: string = 'João Silva';
  emailUsuario: string = 'joao.silva@gmail.com';
  dataCadastro: string = '15/11/2024';

  constructor(private router: Router) {}

  voltarParaHome() {
    this.router.navigate(['/home']);
  }

}
