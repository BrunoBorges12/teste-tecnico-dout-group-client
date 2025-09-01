import { useState } from "react";
import { Layout } from "./components/Layout";
import { NavBar, Navigation, Siderbar } from "./components/Navigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout.Main>
      <Siderbar />

      <Layout.Site>
        <NavBar />
        <Layout.Content>
          <h1>Dot Group - Teste Técnico Frontend</h1>
        </Layout.Content>
      </Layout.Site>
    </Layout.Main>
  );
}

export default App;
