import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseAPI } from 'src/app/auth/interfaces/IResponseAPI';
import { environment } from 'src/environments/environment.prod';
import { IRole } from '../interfaces/IRole.interface';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public ObtenerLista(): Observable<IRole[]> {
    return this.http.get<IRole[]>(`${this.baseUrl}/roles/obtenerLista`);
  }

  public Editar(role: IRole): Observable<IResponseAPI> {
    const bodyData = JSON.stringify(role);
    return this.http.put<IResponseAPI>(
      `${this.baseUrl}/roles/editar`,
      bodyData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  public Eliminar(id: string): Observable<IResponseAPI> {
    return this.http.delete<IResponseAPI>(`${this.baseUrl}/roles/eliminar/`, {
      params: {
        id: id,
      },
    });
  }

  public Crear(role: IRole): Observable<IResponseAPI> {
    const bodyData = JSON.stringify(role);
    return this.http.post<IResponseAPI>(
      `${this.baseUrl}/roles/crear`,
      bodyData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
