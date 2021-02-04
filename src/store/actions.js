import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchItemInfo, fetchList } from "../api/index";

export default { //대문자로 쓰는 이유(store 내 이름)
    // FETCH_NEWS(context) { //매개변수 전달
    //     return fetchNewsList()
    //         .then(response => {
    //             //console.log(response.data);
    //             //mutation, SET_NEWS에 response.data(인자)를 넘김
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //     },

    async FETCH_NEWS(context) { //매개변수 전달
       const response = await fetchNewsList();
       context.commit('SET_NEWS', response.data);
       return response;
        },
    


    // FETCH_ASK(context) {
    //     return fetchAskList()
    //         .then(response => {
    //             context.commit('SET_ASK', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    //     },

     async FETCH_ASK(context) {
        const response = await fetchAskList();
        context.commit('SET_ASK', response.data);
        return response;
     },
        
    // FETCH_JOBS(context) {
    //     return fetchJobsList()
    //         .then(response => {
    //             context.commit('SET_JOBS', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    //     },

        async FETCH_JOBS(context) {
            const response = await fetchJobsList();
            context.commit('SET_JOBS', response.data);
            return response;
         },


    // FETCH_USER(context, name) {
    //     return fetchUserInfo(name)
    //         .then(response => {context.commit('SET_USER', response.data);
    //         return response;
    //         })
    //         .catch(error => console.log(error))
    // },

    async FETCH_USER(context, name) {
        const response = await fetchUserInfo(name);
        context.commit('SET_USER', response.data);
        return response;
     },


    // FETCH_ITEM(context, item) {
    //     return fetchItemInfo(item)
    //         .then(response => {context.commit('SET_ITEM', response.data);
    //         return response;
    //         })
    //         .catch(error => console.log(error))
    // },

    async FETCH_ITEM(context, item) {
        const response = await fetchItemInfo(item);
        context.commit('SET_ITEM', response.data);
        return response;
     },


    // FETCH_LIST({commit}, pageName) {
    //     return fetchList(pageName)
    //     .then(({data}) => commit('SET_LIST', data))
    //     .catch(error => console.log(error));
    // },
    FETCH_LIST(context, pageName) {
        return fetchList(pageName)
        .then(response => {context.commit('SET_LIST', response.data)
        return response;
        })    
        .catch(error => console.log(error));
    },
    
    }