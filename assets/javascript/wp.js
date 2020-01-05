import axios from 'axios' //axiosの読み込み
 
class WpApi {
  // コンストラクタ
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json`
  }
 
  // 投稿一覧を取得するメソッド。
  posts () {
    return axios.get(`${this.apiBase}/wp/v2/posts`, {
      params: {
        page: 1,
        per_page: 5
      }
    }).then(json => {
      return { posts: json.data }
    }).catch(e => {
      return { error: e }
    })
  }
}
 
const wp = new WpApi('https://www.acall.jp/info/')
 
export default wp