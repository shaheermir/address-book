import { createQueryString } from '../../utils/createQueryString'
import { TContact } from '../types'
import { TRequestParams } from './actions'

export type TResponse = {
  results: TContact[]
}

export async function fetchAddressBookAPI(params: TRequestParams): Promise<TResponse> {
  const queryParams = createQueryString(params)
  const url = `https://randomuser.me/api?${queryParams}`
  return fetch(url).then((res) => res.json())
}
