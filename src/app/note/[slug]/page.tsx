import { Page } from "@/core/components/page/page.component";
import "../../../../polyfills";
import { EditableNote } from "@/features/notes/delivery/client/editable-note/editable-note.component";

interface Props {
  params: { slug: string };
}

const NotePage = (props: Props) => {
  const { slug } = props.params;
  return (
    <Page>
      <EditableNote id={slug} />
    </Page>
  );
};

export default NotePage;
