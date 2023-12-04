import { Component } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../models/aluno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private readonly _ALUNO_SERVICE: AlunoService
  ) { }

  protected matricula: string = '';
  protected isLoadingAluno: boolean = false;
  protected aluno: Aluno = new Aluno;

  protected isFirstVerification: boolean = true;
  protected isError: boolean = false;

  protected getAlunoByMatricula() {
    this.isFirstVerification = false;
    this.isLoadingAluno = true;
    this._ALUNO_SERVICE.getAlunoByMatricula(this.matricula).subscribe(
      (aluno: Aluno) => { this.aluno = aluno; this.isError = false; setTimeout(() => this.isLoadingAluno = false, 1000); },
      (error) => { this.isError = true; setTimeout(() => this.isLoadingAluno = false, 1000); },
    );
  }

}
