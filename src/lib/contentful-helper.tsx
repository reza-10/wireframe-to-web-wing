/* eslint-disable @typescript-eslint/no-explicit-any */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

export function RenderContentfulRichText({
  doc,
  leading = "relaxed",
}: {
  doc: any;
  leading?: string;
}) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const url = `https:${node.data.target.fields.file.url}`;
        const alt = node.data.target.fields.title;
        return <img src={url} alt={alt} className="w-full rounded-lg" />;
      },

      [BLOCKS.PARAGRAPH]: (_node: any, children: any) => (
        <p className={`leading-${leading}`}>{children}</p>
      ),

      [BLOCKS.TABLE]: (_node: any, children: any) => (
        <table className="w-full border-collapse my-4">{children}</table>
      ),
      [BLOCKS.TABLE_ROW]: (_node: any, children: any) => <tr>{children}</tr>,
      [BLOCKS.TABLE_HEADER_CELL]: (_node: any, children: any) => (
        <th className="border p-2 font-semibold">{children}</th>
      ),
      [BLOCKS.TABLE_CELL]: (_node: any, children: any) => (
        <td className="border p-2">{children}</td>
      ),
    },
  };

  return (
    <div className="prose max-w-none space-y-3">
      {documentToReactComponents(doc, options)}
    </div>
  );
}
