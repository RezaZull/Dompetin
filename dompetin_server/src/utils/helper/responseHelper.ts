export enum responseStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOTFOUND = 404,
}

export const responseHelper = {
  response: (
    status: responseStatus,
    success: boolean,
    message: string,
    data: any,
  ) => {
    return {
      status,
      success,
      message,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data,
    };
  },
  responseJWT: (
    status: responseStatus,
    success: boolean,
    message: string,
    data: any,
    access_token: string,
  ) => {
    return {
      status,
      success,
      message,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data,
      access_token,
    };
  },
};
