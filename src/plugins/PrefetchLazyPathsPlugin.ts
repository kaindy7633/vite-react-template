// PrefetchLazyPathsPlugin.ts
export const PrefetchLazyPathsPlugin = (
  paths: string[] = [],
  timeout: number = 1000
) => {
  return {
    name: 'prefetch-lazy-paths-plugin',
    async transform(code: any, id: string | string[]) {
      if (paths.length) {
        for (let path of paths) {
          if (id.includes(path)) {
            return `
                          ${code};
                          const lazyPages = ${JSON.stringify(paths)};
                          setTimeout(() => {
                            lazyPages.forEach(item => fetch(item));
                          }, timeout);
                      `;
          }
        }
      }
      return code;
    },
  };
};
