
import { Layout } from "./components/Layout";
import { NavBar, Siderbar } from "./components/Navigation";
import User from "./pages/user";

function App() {

  return (
    <Layout.Main>
      <Siderbar />

      <Layout.Site>
        <NavBar />
        <Layout.Content>
          <User />
        </Layout.Content>
      </Layout.Site>
    </Layout.Main>
  );
}

export default App;
