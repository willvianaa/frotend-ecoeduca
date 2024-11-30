import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

interface UsuarioPontuacao {
  nome: string; // Nome do usuário
  pontos: number; // Pontos acumulados
}

@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.component.html',
  styleUrl: './pontuacao.component.css',
  standalone: false
})
export class PontuacaoComponent {
voltar() {
throw new Error('Method not implemented.');
}
  @Input() usuariosPontuacao = [
    { nome: 'Player 2', pontuacao: 38000 },
    { nome: 'Player 3', pontuacao: 32000 },
    { nome: 'Player 4', pontuacao: 27000 },
    { nome: 'Player 5', pontuacao: 20000 },
    { nome: 'Player 6', pontuacao: 15000 },
    { nome: 'Player 7', pontuacao: 8000 },
  ];

  constructor(private router: Router) {}

  voltarParaHome() {
    this.router.navigate(['/home']); // Certifique-se que a rota '/home' está definida no AppRoutingModule
  }

}
  


