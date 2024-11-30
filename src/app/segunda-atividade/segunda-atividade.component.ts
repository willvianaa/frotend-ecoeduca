import { Component } from '@angular/core';

@Component({
  selector: 'app-segunda-atividade',
  templateUrl: './segunda-atividade.component.html',
  styleUrls: ['./segunda-atividade.component.css']
})
export class SegundaAtividadeComponent {
  correctBin: string | null = null;
  feedback: string | null = null;

  // Inicia o drag do material
  startDrag(material: string) {
    this.correctBin = material;
  }

  // Permite o drop
  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  // Ação ao soltar o material na lixeira
  onDrop(bin: string) {
    if (this.correctBin === bin) {
      this.feedback = 'Parabéns! Você classificou o resíduo corretamente!';
    } else {
      this.feedback = 'Ops! Esse não é o local correto.';
    }
    this.correctBin = null; // Limpa a seleção após o drop
  }
}
