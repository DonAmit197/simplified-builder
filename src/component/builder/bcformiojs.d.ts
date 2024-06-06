declare module 'bcformiojs' {
  export const Formio: {
    Components: {
      components: {
        htmlelement: any;
        textfield: any;
        textarea: any;
        select: any;
        checkbox: any;
        [key: string]: any;
      };
      addComponent(name: string, component: any): void;
    };
    Utils: {
      getComponent(components: any, key: string): any;
    };
  };
}
