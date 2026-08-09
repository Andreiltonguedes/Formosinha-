export function success(data: any, message = "Sucesso") {
  return {
    success: true,
    message,
    data,
  };
}

export function failure(message: string) {
  return {
    success: false,
    message,
  };
}