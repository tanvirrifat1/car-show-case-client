export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export type IResponseSuccess = {
  data?: any;
  meta?: IMeta;
};

export type IResponseError = {
  status: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IChildrenProps = React.ReactNode | React.ReactElement;
