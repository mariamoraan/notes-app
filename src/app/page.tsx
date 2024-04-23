import { NotesList } from "@/features/notes/delivery/client/notes-list/notes-list.component";
import "../../polyfills";
import { Page } from "@/core/components/page/page.component";
import { Header } from "@/core/components/header/header.component";

const Home = () => {
  return (
    <Page>
      <Header />
      <NotesList />
    </Page>
  );
};

export default Home;
