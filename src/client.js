import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
  params: {
    api_key: 'al6hW8enSGMDZsMRW83CUYjyhCDhFiPG'
  }
})

instance.search = async function (q, ...rest) {
  try {
    const res = await this.get('search', {
      params: {
        q
      },
      ...rest,
    })
    return res.data
  } catch (e) {
    throw e
  }
}


export default instance
