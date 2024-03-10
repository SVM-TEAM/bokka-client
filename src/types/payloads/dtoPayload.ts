import { AuthProviderType } from 'src/types';

export interface SocialLoginDto {
  authProvider: AuthProviderType;
}

export interface LocalLoginDto {
  userId: string;
  password: string;
  authProvider: 'LOCAL';
}
