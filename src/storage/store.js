import { createStore } from 'vuex';
import app from './modules/app'
import attributes from './modules/attributes'
import projects from './modules/projects'
import basic from './modules/basic'
import options from './modules/options'
import template from './modules/template'

const store = createStore({
  modules: {
    app,
    attributes,
    projects,
    basic,
    options,
    template,
  }
});

export default store;