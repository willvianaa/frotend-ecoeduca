import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecoeduca-config',
  templateUrl: './ecoeduca-config.component.html',
  styleUrl: './ecoeduca-config.component.css'
})
export class EcoeducaConfigComponent {
  novoNome: string = '';
  novaSenha: string = '';

  constructor(private router: Router) {}

  voltarParaHome() {
    this.router.navigate(['/home']);
  }

  alterarNome() {
    if (this.novoNome.trim()) {
      alert(`Nome de usuário alterado para: ${this.novoNome}`);
      this.novoNome = '';
    } else {
      alert('Por favor, insira um nome válido.');
    }
  }

  alterarSenha() {
    if (this.novaSenha.trim()) {
      alert('Senha alterada com sucesso!');
      this.novaSenha = '';
    } else {
      alert('Por favor, insira uma senha válida.');
    }
  }

}
