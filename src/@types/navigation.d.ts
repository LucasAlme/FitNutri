export {};
export type RootStackParamList = {
  Home: undefined;
  CreateMacros: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
