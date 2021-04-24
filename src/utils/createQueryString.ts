type TParams = {
  [key: string]: number | string
}
export const createQueryString = (params: TParams) =>
  Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&')
