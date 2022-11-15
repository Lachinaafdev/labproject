export interface IUser {
  email: string;
  token: string;
  rol: string;
  personaAPI: PersonaAPI;
}

interface PersonaAPI {
  id: string;
  nombre: string;
  apellidos: string;
  urlFotoPerfil: string;
}
