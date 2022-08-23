import { createSSRApp } from 'vue';
import App from './App.vue';
import '@/uni_modules/queen-ui/theme-chalk/src/index.scss';

export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
