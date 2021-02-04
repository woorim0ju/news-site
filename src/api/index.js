import axios from 'axios';

//1.HTTP request & response
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

//2. API 함수들을 정리
function fetchNewsList() {
   return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
 }

 function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
 }

function fetchUserInfo(username) { //인자로 user 넘겨받음
   return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export { //export default 아님
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
}