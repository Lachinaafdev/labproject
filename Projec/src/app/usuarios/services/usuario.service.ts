import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseAPI } from 'src/app/auth/interfaces/IResponseAPI';
import { environment } from 'src/environments/environment.prod';
import { IProfesor } from '../interfaces/IProfesor.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public crear(usuario: any): Observable<IResponseAPI> {
    usuario.genero = Number(usuario.genero);
    const bodyData = JSON.stringify(usuario);
    return this.http.post<IResponseAPI>(
      `${this.baseUrl}/profesores/crear`,
      bodyData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  public obtenerLista(): Observable<IProfesor[]> {
    return this.http.get<IProfesor[]>(
      `${this.baseUrl}/profesores/obtenerLista`
    );
  }

  public editar(profesor: IProfesor): Observable<IResponseAPI> {
    const bodyData = JSON.stringify(profesor);
    return this.http.put<IResponseAPI>(
      `${this.baseUrl}/profesores/editar`,
      bodyData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  public eliminar(profesorMatricula: string): Observable<IResponseAPI> {
    return this.http.delete<IResponseAPI>(
      `${this.baseUrl}/profesores/eliminar/`,
      {
        params: {
          profesorMatricula: profesorMatricula,
        },
      }
    );
  }
}
