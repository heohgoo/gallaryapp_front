import { createStore } from 'vuex';


const store = createStore({
    state() {
        return {
            account: {
                id: 0
            },

            page: true
        }
    },

    mutations: {
        setAccount(state, payload) {
            state.account.id = payload;
        },

        setPage(state) {
            state.page = false;
        },
    }
})

export default store;