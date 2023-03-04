type ErrorResponse = {
  errorCode: string;
  errorMessage: string;
};

type Pagination = {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
};
