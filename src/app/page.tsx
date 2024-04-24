import "../../polyfills";
import { Page } from "@/core/components/page/page.component";
import { Header } from "@/core/components/header/header.component";
import { Notes } from "@/features/notes/delivery/client/notes/notes.component";

const Home = () => {
  return (
    <Page>
      <Header />
      <Notes />
    </Page>
  );
};

export default Home;
