import { RendererObject, marked } from "marked";
import type { Tokens } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

export const parameterize = (text: string) =>
  text.toLowerCase().replace(/[^\w]+/g, "-");

// adds anchor links to headings
const renderer = {
  heading(text: string, depth: any) {
    const escapedText = parameterize(text);

    return `
      <h${depth} id="${escapedText}">
        ${text}
        <a name="${escapedText}" class="anchor" href="#${escapedText}">
          <span class="header-link">
            <svg
              viewBox="0 0 13 13"
              xmlns="http://www.w3.org/2000/svg"
              class="text-gray-70 ms-2 h-5 w-5"
            >
              <g fill="currentColor" fill-rule="evenodd">
                <path
                  d="M7.778 7.975a2.5 2.5 0 0 0 .347-3.837L6.017 2.03a2.498 2.498 0 0 0-3.542-.007 2.5 2.5 0 0 0 .006 3.543l1.153 1.15c.07-.29.154-.563.25-.773.036-.077.084-.16.14-.25L3.18 4.85a1.496 1.496 0 0 1 .002-2.12 1.496 1.496 0 0 1 2.12 0l2.124 2.123a1.496 1.496 0 0 1-.333 2.37c.16.246.42.504.685.752z"
                ></path>
                <path
                  d="M5.657 4.557a2.5 2.5 0 0 0-.347 3.837l2.108 2.108a2.498 2.498 0 0 0 3.542.007 2.5 2.5 0 0 0-.006-3.543L9.802 5.815c-.07.29-.154.565-.25.774-.036.076-.084.16-.14.25l.842.84c.585.587.59 1.532 0 2.122-.587.585-1.532.59-2.12 0L6.008 7.68a1.496 1.496 0 0 1 .332-2.372c-.16-.245-.42-.503-.685-.75z"
                ></path>
              </g>
            </svg>
          </span>
        </a>
      </h${depth}>
    `;
  },
} as unknown as RendererObject;

export const markdownParser = (markdown: string) => {
  marked.setOptions(marked.getDefaults());
  marked.use(
    { renderer },
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );
  return marked(markdown);
};

// generates a table of contents from markdown headings
export const generateToc = (
  markdown: string
): Array<{ depth: number; text: string; anchor: string }> => {
  const tokens = marked
    .lexer(markdown)
    .filter((token) => token.type === "heading") as Tokens.Heading[];

  const toc = tokens.map(({ depth, text }) => ({
    depth,
    text,
    anchor: `#${parameterize(text)}`,
  }));

  return toc;
};
