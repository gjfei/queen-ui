import 'vue';

declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    QnButton: typeof import('@queen-ui/components')['QnButton'];
  }
}

export {};
