import { Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";

import Header from "./components/Header";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "rgb(170, 170, 170)",
          colorBgContainer: "rgb(39, 43, 48)",
          colorTextQuaternary: 'rgb(122, 130, 136)'
        },
      }}
    >
      <Header />
      <Outlet />
    </ConfigProvider>
  );
}

export default App;
