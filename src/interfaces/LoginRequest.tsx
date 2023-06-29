

// export interface AuthRequest {
//   user: User
//   token: string
// }


// export interface User {
//   firstName: string | null
//   lastName: string | null
//   role: Role
//   idCard: number
//   id?: string
// }


// export interface Role {
//   id?:string,
//   name:string
// }





export interface Prueba {
  id?:        string|null;
  firstname?: string|null;
  email?:     string|null;
  password?:  string|null;
  profile?:   Profile|null;
  role?:      Role|null;
  token?:     string|null;
}

export interface Profile {
  createdAt: string;
  updatedAt: string;
  id:        number;
  lastname:  null;
  idCard:    null;
  phone:     null;
}

export interface Role {
  id:   number;
  name: string;
}
