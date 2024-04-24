import { Page } from "@/core/components/page/page.component";
import "../../../polyfills";
import { CreateNote } from "@/features/notes/delivery/client/create-note/create-note.component";

const Home = () => {
  return (
    <Page>
      <CreateNote />
    </Page>
  );
};

export default Home;
