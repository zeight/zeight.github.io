import React from "react";

import ReactMarkdown from "react-markdown";
//https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/
//import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//import { vscDarkPlus as codetheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable as codetheme } from 'react-syntax-highlighter/dist/esm/styles/hljs';

//Remark plugins
//? https://github.com/remarkjs/react-markdown
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";

interface PostContentProps {
  post: string;
}

const PostContent: React.FC<PostContentProps> = (props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkFrontmatter, remarkGfm, remarkImages]}
      children={props.post}
      className="single_article"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            //@ts-ignore
            <SyntaxHighlighter
            codeTagProps={{
              className: 'hightlighted'
            }}
            customStyle={{
              marginBottom: '3rem'
            }}
              // showLineNumbers={true}
              children={String(children).replace(/\n$/, "")}
              style={codetheme}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        table({ node, className, children, ...props }){          
          return <div className="table-wrapper"><table>{children}</table></div>;
        }
      }}
    />
  );
};

export default PostContent;
