import { Note } from "../note";

export class NotesMother {
  static getNotes() {
    return [
      Note.fromPrimitives({
        id: "1",
        title: "Note 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas felis tellus, porttitor aliquam erat auctor et. Praesent fermentum quam risus, sed luctus ipsum lacinia vitae. Suspendisse in auctor nunc. Vivamus congue mattis neque eget aliquet. Pellentesque feugiat in leo ut laoreet. Pellentesque placerat arcu libero, sit amet imperdiet velit sollicitudin eu. Mauris maximus odio gravida lorem ultrices porta. Nunc at metus et ligula bibendum finibus. Curabitur sit amet metus purus. Quisque ornare ultrices justo nec convallis. Ut euismod felis bibendum, porttitor erat nec, congue augue. Etiam sagittis accumsan nisl, sed ornare nunc elementum eu. In et tempor nibh. Suspendisse et sodales est. Praesent hendrerit leo non diam fermentum, sodales placerat neque sagittis. Vestibulum neque lectus, vestibulum eget dui ut, bibendum molestie ante.",
        color: Note.noteColors.PINK.name,
      }),
      Note.fromPrimitives({
        id: "2",
        title: "Note 2",
        content:
          "Nulla rutrum elementum ligula id laoreet. Integer et ante a ex egestas imperdiet venenatis a orci. Fusce non risus non diam consectetur dictum ut sit amet tortor. Nullam vel mi quis dolor eleifend tempor nec in leo. Mauris eu malesuada nisl. Vivamus eget ultrices justo, suscipit eleifend est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat ac libero sit amet mattis.",
        color: Note.noteColors.PURPLE.name,
      }),
      Note.fromPrimitives({
        id: "3",
        title: "Note 3",
        content:
          "In varius, sapien a lacinia laoreet, erat justo volutpat nisl, sed laoreet turpis metus consequat ante. Phasellus sed nisi in tortor euismod tincidunt eleifend eu diam. Nam vitae placerat massa. Pellentesque bibendum augue id eros placerat convallis. In nulla neque, laoreet in ornare et, dignissim quis turpis. Nam lobortis purus at nisl porta, id fermentum ex consequat. Nullam vitae lectus diam. Nunc euismod, tellus vitae tincidunt varius, lorem enim luctus ipsum, ut malesuada lacus lorem id neque. Sed at massa dapibus, rutrum diam quis, semper augue. Morbi ullamcorper arcu a tellus lacinia egestas. Sed dictum lacinia turpis, id mattis nunc interdum quis. Sed placerat blandit luctus. Proin quis pharetra leo. Sed ornare nisi a ipsum gravida fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        color: Note.noteColors.YELLOW.name,
      }),
    ];
  }
}
