import { post } from '@/utils/request'

export const getMockData = () => {
  const url = 'mock.json'
  return post(url)
}
