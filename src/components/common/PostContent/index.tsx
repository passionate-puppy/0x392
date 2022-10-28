import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from './PostContent.module.scss'
import type { Post } from 'types/Post'

export type PostContentProps = {
  content: Post['content']
}

function PostContent({ content }: PostContentProps) {
  return (
    <div className={styles.container}>
      <ReactMarkdown
        components={{
          code: ({ children, className }) => {
            const match = /language-(\w+)/.exec(className || '')

            if (!match) {
              return <code className={className}>{children}</code>
            }

            return (
              <SyntaxHighlighter
                customStyle={{
                  borderRadius: 8,
                  fontSize: 14,
                  margin: 0,
                }}
                language={match[1]}
                style={dracula}
              >
                {String(children)}
              </SyntaxHighlighter>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default PostContent
