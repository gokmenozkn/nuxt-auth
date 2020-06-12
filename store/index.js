export const state = () => ({
  counter: 0,
  products: [
    { name: 'Cool T-shirt', img: 't-shirt.jpg', price: '30', id: 1 },
    { name: 'Skull T-shirt', img: 'skull-tshirt.jpg', price: '20', id: 2 },
    { name: 'Nike T-shirt', img: 'nike-tshirt.jpg', price: '35', id: 3 },
  ],
  authUser: null
});

export const mutations = {
  // RESET_STORE: (state) => {
  //   Object.assign(state, initialState())
  // },

  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email
    }
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }, { res }) {
    if (res) {
      await dispatch('onAuthStateChanged', {
        // New
        authUser: (res.locals && res.locals.user),
      })
    }
  },

  onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      return authUser = null;
    } 
    commit('SET_AUTH_USER', { authUser })
  },

  /**
   * 
   * I don't use it yet.
   */
  checkVuexStore(ctx) {
    if (this.$fireAuth === null) {
      throw 'Vuex Store example not working - this.$fireAuth cannot be accessed.'
    }

    alert(
      'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
    )
    return
  }
}

export const getters = {
  isLoggedIn: (state) => {
    try {
      return state.authUser.id !== null;
    } catch {
      return false;
    }
  }
}