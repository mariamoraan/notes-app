import { Page } from "@/core/components/page/page.component";
import "../../../../polyfills";
import { EditeNote } from "@/features/notes/delivery/client/edite-note/edite-note.component";

interface Props {
  params: { slug: string };
}

const NotePage = (props: Props) => {
  const { slug } = props.params;
  return (
    <Page>
      <EditeNote id={slug} />
    </Page>
  );
};

export default NotePage;
