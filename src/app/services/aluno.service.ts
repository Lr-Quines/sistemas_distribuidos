import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(
    private readonly _HTTP_CLIENT: HttpClient
  ) { }

  public getAlunoByMatricula(matricula: string): Observable<Aluno> {
    const URL: string = 'https://localhost:44333/api/Aluno/GetAlunoByMatricula';
    const HTTP_PARAMS: HttpParams = new HttpParams().set('matricula', matricula);

    return this._HTTP_CLIENT.get<Aluno>(URL, { params: HTTP_PARAMS });
  }

}
