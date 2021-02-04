import Vue from 'vue'; //1. vue import
import VueRouter from 'vue-router'; //2. vue-router import
import NewsView from '../views/NewsView.vue'; //3. 각 컴포넌트 import
import AskView from '../views/AskView.vue'; 
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
//import createListView from '../views/CreateListView';

Vue.use(VueRouter); //3. vue.use 선언

export const router = new VueRouter({ //4. vue router 인스턴스 생성, routes 연결
    base: '/',
    mode: 'history',
    routes: [
        //path: url 주소, component: url 주소에서 표시되는 컴포넌트
        {
            path: '/',
            redirect: '/news'
        }, { //페이지 접속하자마자 첫 페이지 지정 router에서 기본적으로 제공하는 속성
            path: '/news',
            name: 'news',
            component: NewsView,
            //component: createListView('NewsView'),
        }, {
            path: '/ask',
            name: 'ask',
            component: AskView,
            //component: createListView('AskView')
        }, {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            //component: createListView('JobsView')
        }, {
            path: '/user/:id',
            component: UserView,
        }, { //user ID를  param으로 넘김
            path: '/item/:id',
            component: ItemView,
        }, //user ID를  param으로 넘김
    ]
}); //5. export router(router가 router라는 변수에 담김)
//export하여 main.js에서 import함