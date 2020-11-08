import { axios } from '@/utils/request'

export const getTodos = async (params = {}) => {
  const endpoint = 'https://jsonplaceholder.typicode.com/todos/1'
  try {
    return await axios.get(endpoint, { params })
  } catch (error) {
    return console.error(error)
  }
}
