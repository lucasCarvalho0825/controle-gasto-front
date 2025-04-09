import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-controle',
  templateUrl: './card-controle.component.html',
  styleUrls: ['./card-controle.component.css'],
})
export class CardControleComponent {



 valor: number | null = null;
  parcelas: number | null = null;

  constructor(private http: HttpClient) {}

  salvar() {
    const dados = {
      valor: this.valor,
      parcelas: this.parcelas
    };

    console.log('Dados enviados com sucesso:', dados);

    this.http.post('http://localhost:8080/novo-gasto', dados).subscribe(
      response => {
        console.log('Dados enviados com sucesso:', response);

        //console.log('Dados enviados com sucesso:', response);
      },
      error => {
        console.error('Erro ao enviar dados:', error);
        // Adicione lógica adicional para tratar erros
      }
    );
  }

  cancelar() {
    console.log('Operação cancelada.');
  }
}
