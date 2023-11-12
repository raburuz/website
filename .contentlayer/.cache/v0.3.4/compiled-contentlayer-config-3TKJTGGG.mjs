// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import GithubSlugger from "github-slugger";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `**/blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "string",
      required: true
    }
  },
  // @ts-ignore
  computedFields: computedFields()
}));
var computedFields = () => ({
  metadata: {
    type: "{ slug: string, slugAsPath: string }",
    resolve: (doc) => {
      const path = doc._raw.flattenedPath;
      return {
        slug: "/" + path,
        slugAsPath: path.replaceAll("/", "-")
      };
    }
  },
  headings: {
    type: "{ heading: number, text: string, slug: string }[]",
    resolve: async (doc) => {
      const slugger = new GithubSlugger();
      const regXHeader = /(?<flag>#{1,6})\s+(?<content>.+)/g;
      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            heading: flag?.length,
            text: content,
            slug: content ? slugger.slug(content) : ""
          };
        }
      );
      return headings;
    }
  }
});
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [BlogPost],
  //PLUGINS
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  BlogPost,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-3TKJTGGG.mjs.map
