import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import type { Post } from 'types/Post'

export type PostContentProps = {
  content: Post['content']
}

function PostContent({ content }: PostContentProps) {
  return (
    <ReactMarkdown
      components={{
        code: ({ children, className }) => {
          const match = /language-(\w+)/.exec(className || '')

          if (!match) {
            return <code className={className} />
          }

          return (
            <SyntaxHighlighter language={match[1]}>
              {String(children)}
            </SyntaxHighlighter>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default PostContent
