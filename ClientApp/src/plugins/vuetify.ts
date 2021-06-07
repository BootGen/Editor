import Vue from 'vue'
import Vuetify from 'vuetify'
import '@/sass/overrides.sass'

Vue.use(Vuetify)

const lightTheme = {
  primary: '#006FC5',
  secondary: '#209EF0',
  accent: '#209EF0',
  info: '#00CAE3',
  textOrange: '#fc825d',
  textGreen: '#29af56',
}

const darkTheme = {
  primary: '#006FC5',
  secondary: '#209EF0',
  accent: '#209EF0',
  info: '#00CAE3',
  white: '#eee',
  textOrange: '#F78C6C',
  textGreen: '#C3E88D',
}

export default new Vuetify({
  theme: {
    themes: {
      dark: darkTheme,
      light: lightTheme,
    },
  },
})
