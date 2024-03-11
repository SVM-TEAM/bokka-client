import { MAIN_FOOTER_ICONS } from 'src/constants/datas';

export interface AxiosResponseData<T> {
  code: number;
  result: T;
}

export interface AxiosErrorResultInterface {
  message: string;
}

export type DictionaryType<
  KeyType extends string | number | symbol,
  ValueType
> = {
  [key in KeyType]: ValueType;
};
export interface LabelValueCommonInterface<ValueType> {
  label: string;
  value: ValueType;
}

export type AuthProviderType = 'GOOGLE' | 'KAKAO' | 'NAVER';
export type AuthErrorCodeType = 3000 | 3001 | 3002 | 5000;
export type MainFooterObjectType =
  (typeof MAIN_FOOTER_ICONS)[keyof typeof MAIN_FOOTER_ICONS];
