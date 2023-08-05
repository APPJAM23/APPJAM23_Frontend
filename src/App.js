import { QueryClientProvider, QueryClient } from "react-query";
import MainRouter from "./router";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import { theme } from "./style/Theme";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000,
      refetchInterval: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
