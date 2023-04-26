import axios from 'axios'

const api = axios.create({
  baseURL:
    'https://gist.githubusercontent.com/steephanie/b048e05aca51a11d0d2714add0c697b5/raw/85a4fb74fd283e63b96c22a3019e3c985a45c35d'
})

export default api
