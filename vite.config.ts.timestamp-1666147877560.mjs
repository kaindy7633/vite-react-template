// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/kaind/works/xinrui-frontend-template/node_modules/.pnpm/vite@3.1.7_less@4.1.3/node_modules/vite/dist/node/index.js";
import vitePluginImp from "file:///C:/Users/kaind/works/xinrui-frontend-template/node_modules/.pnpm/vite-plugin-imp@2.3.0_vite@3.1.7/node_modules/vite-plugin-imp/dist/index.mjs";
import { viteMockServe } from "file:///C:/Users/kaind/works/xinrui-frontend-template/node_modules/.pnpm/vite-plugin-mock@2.9.6_ki4ybbw32jmo7jdtyceun7qqdm/node_modules/vite-plugin-mock/dist/index.js";
import react from "file:///C:/Users/kaind/works/xinrui-frontend-template/node_modules/.pnpm/@vitejs+plugin-react@2.1.0_vite@3.1.7/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "C:\\Users\\kaind\\works\\xinrui-frontend-template";
var PrefetchLazyPathsPlugin = (paths = [], timeout = 1e3) => {
  return {
    name: "prefetch-lazy-paths-plugin",
    async transform(code, id) {
      if (paths.length) {
        for (let path of paths) {
          if (id.includes(path)) {
            return `
                          ${code};
                          const lazyPages = ${JSON.stringify(paths)};
                          setTimeout(() => {
                            lazyPages.forEach(item => fetch(item));
                          }, ${timeout});
                      `;
          }
        }
      }
      return code;
    }
  };
};
var lazyPaths = [
  "/src/pages/Home/index.tsx",
  "/src/pages/Warehouse/index.tsx",
  "/src/pages/404.tsx",
  "/src/pages/Loading.tsx"
];
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "./src")
      }
    },
    server: {
      port: ~~env.VITE_PORT
    },
    plugins: [
      react(),
      vitePluginImp({
        optimize: true,
        libList: [
          {
            libName: "antd",
            style: (name) => `antd/es/${name}/style`
          }
        ]
      }),
      viteMockServe({ mockPath: "./mock" }),
      PrefetchLazyPathsPlugin(lazyPaths, 1e3)
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  };
});
export {
  PrefetchLazyPathsPlugin,
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxrYWluZFxcXFx3b3Jrc1xcXFx4aW5ydWktZnJvbnRlbmQtdGVtcGxhdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGthaW5kXFxcXHdvcmtzXFxcXHhpbnJ1aS1mcm9udGVuZC10ZW1wbGF0ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMva2FpbmQvd29ya3MveGlucnVpLWZyb250ZW5kLXRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdml0ZVBsdWdpbkltcCBmcm9tICd2aXRlLXBsdWdpbi1pbXAnO1xuaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0Jztcbi8vIFx1NTJBOFx1NjAwMVx1NEUzQlx1OTg5OFx1NTIwN1x1NjM2Mlx1NURFNVx1NTE3N1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY29uc3QgUHJlZmV0Y2hMYXp5UGF0aHNQbHVnaW4gPSAoXG4gIHBhdGhzOiBzdHJpbmdbXSA9IFtdLFxuICB0aW1lb3V0OiBudW1iZXIgPSAxMDAwXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAncHJlZmV0Y2gtbGF6eS1wYXRocy1wbHVnaW4nLFxuICAgIGFzeW5jIHRyYW5zZm9ybShjb2RlOiBhbnksIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgICAgaWYgKHBhdGhzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBwYXRoIG9mIHBhdGhzKSB7XG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKHBhdGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2NvZGV9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXp5UGFnZXMgPSAke0pTT04uc3RyaW5naWZ5KHBhdGhzKX07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenlQYWdlcy5mb3JFYWNoKGl0ZW0gPT4gZmV0Y2goaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAke3RpbWVvdXR9KTtcbiAgICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IGxhenlQYXRocyA9IFtcbiAgJy9zcmMvcGFnZXMvSG9tZS9pbmRleC50c3gnLFxuICAnL3NyYy9wYWdlcy9XYXJlaG91c2UvaW5kZXgudHN4JyxcbiAgJy9zcmMvcGFnZXMvNDA0LnRzeCcsXG4gICcvc3JjL3BhZ2VzL0xvYWRpbmcudHN4Jyxcbl07XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KSA9PiB7XG4gIC8vIFx1NjgzOVx1NjM2RVx1NUY1M1x1NTI0RFx1NURFNVx1NEY1Q1x1NzZFRVx1NUY1NVx1NEUyRFx1NzY4NCBgbW9kZWAgXHU1MkEwXHU4RjdEIC5lbnYgXHU2NTg3XHU0RUY2XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xuICByZXR1cm4ge1xuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgcG9ydDogfn5lbnYuVklURV9QT1JULCAvLyB+fiBcdTc1MjhcdTRFOEVcdTVDMDYgc3RyaW5nIFx1OEY2Q1x1NEUzQSBudW1iZXJcdUZGMENwYXJzZUludFx1NEU1Rlx1NTNFRlx1NEVFNVxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgcmVhY3QoKSxcbiAgICAgIHZpdGVQbHVnaW5JbXAoe1xuICAgICAgICBvcHRpbWl6ZTogdHJ1ZSxcbiAgICAgICAgbGliTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpYk5hbWU6ICdhbnRkJyxcbiAgICAgICAgICAgIHN0eWxlOiAobmFtZSkgPT4gYGFudGQvZXMvJHtuYW1lfS9zdHlsZWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgdml0ZU1vY2tTZXJ2ZSh7IG1vY2tQYXRoOiAnLi9tb2NrJyB9KSxcbiAgICAgIFByZWZldGNoTGF6eVBhdGhzUGx1Z2luKGxhenlQYXRocywgMTAwMCksXG4gICAgXSxcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgbGVzczoge1xuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICAgIC8vIFx1NTk4Mlx1OTcwMFx1NUI5QVx1NTIzNiBhbnRkIFx1NEUzQlx1OTg5OFx1RkYwQ1x1OEJGN1x1NTNENlx1NkQ4OFx1NEVFNVx1NEUwQlx1NTE4NVx1NUJCOVx1NkNFOFx1OTFDQSBodHRwczovL2FudC5kZXNpZ24vZG9jcy9yZWFjdC9jdXN0b21pemUtdGhlbWVcbiAgICAgICAgICAvLyBtb2RpZnlWYXJzOiB7XG4gICAgICAgICAgLy8gICAnYm9yZGVyLXJhZGl1cy1iYXNlJzogJzRweCcsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVSxTQUFTLGNBQWMsZUFBZTtBQUN6VyxPQUFPLG1CQUFtQjtBQUMxQixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFdBQVc7QUFFbEIsU0FBUyxlQUFlO0FBTHhCLElBQU0sbUNBQW1DO0FBT2xDLElBQU0sMEJBQTBCLENBQ3JDLFFBQWtCLENBQUMsR0FDbkIsVUFBa0IsUUFDZjtBQUNILFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE1BQU0sVUFBVSxNQUFXLElBQXVCO0FBQ2hELFVBQUksTUFBTSxRQUFRO0FBQ2hCLGlCQUFTLFFBQVEsT0FBTztBQUN0QixjQUFJLEdBQUcsU0FBUyxJQUFJLEdBQUc7QUFDckIsbUJBQU87QUFBQSw0QkFDUztBQUFBLDhDQUNrQixLQUFLLFVBQVUsS0FBSztBQUFBO0FBQUE7QUFBQSwrQkFHbkM7QUFBQTtBQUFBLFVBRXJCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU0sWUFBWTtBQUFBLEVBQ2hCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUFNO0FBRWpELFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUMzQyxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ2pDO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTSxDQUFDLENBQUMsSUFBSTtBQUFBLElBQ2Q7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxRQUNaLFVBQVU7QUFBQSxRQUNWLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxTQUFTO0FBQUEsWUFDVCxPQUFPLENBQUMsU0FBUyxXQUFXO0FBQUEsVUFDOUI7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxjQUFjLEVBQUUsVUFBVSxTQUFTLENBQUM7QUFBQSxNQUNwQyx3QkFBd0IsV0FBVyxHQUFJO0FBQUEsSUFDekM7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxVQUNKLG1CQUFtQjtBQUFBLFFBS3JCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
