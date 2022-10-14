export interface ComponentModule {
  default: React.ComponentType;
}

export interface LazyOptions {
  loader: () => Promise<ComponentModule>;
  loading: React.ComponentType;
}
