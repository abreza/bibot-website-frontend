export interface Account {
  username: string;
}

export interface AuthRo {
  user: Account;
  token: string;
}

export interface LoginDto {
  username: string;
  password: string;
}
