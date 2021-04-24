import { TContact } from '../types'
import { TRequestParams } from './actions'

export type TResponse = {
  results: TContact[]
}

export async function fetchAddressBookAPI({
  numberOfResults,
  seed,
  include,
}: TRequestParams): Promise<TResponse> {
  const url = `https://randomuser.me/api?results=${numberOfResults}&seed=${seed}&inc=${include}`
  return fetch(url).then((res) => res.json())
}
