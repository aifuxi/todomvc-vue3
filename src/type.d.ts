type Todo = {
  Content: string;
  Done: boolean;
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
};

type MyResponse<T> = {
  code: number;
  msg: string;
  data: T;
};
