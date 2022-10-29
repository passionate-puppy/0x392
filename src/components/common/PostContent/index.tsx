import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'
import styles from './PostContent.module.scss'
import type { CSSProperties } from 'react'
import type { Post } from 'types/Post'

function parseMatchLines(matchLines: string | undefined) {
  if (!matchLines) {
    return null
  }

  const lines = []
  const tokens = matchLines.split(',')

  for (const token of tokens) {
    if (token.includes('-')) {
      const [start, end] = token.split('-')
      for (let i = Number(start); i <= Number(end); i++) {
        lines.push(i)
      }
    } else {
      lines.push(Number(token))
    }
  }

  return lines
}

export type PostContentProps = {
  content: Post['content']
}

function PostContent({ content }: PostContentProps) {
  return (
    <div className={styles.container}>
      <ReactMarkdown
        components={{
          code: ({ children, className }) => {
            const match = /language-(\w+)({([,\-\d]+)})?$/.exec(className || '')

            if (!match) {
              return <code className={className}>{children}</code>
            }

            const matchLanguage = match[1]
            const matchLines = match[3]
            const lines = parseMatchLines(matchLines)

            return (
              // It seems a bug that to use `lineProps`, we have to enable both `showLineNumbers`
              // and `wrapLines` props
              // @see https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/368
              <SyntaxHighlighter
                customStyle={{
                  borderRadius: 8,
                  fontSize: 14,
                  margin: 0,
                  padding: '1em 0',
                }}
                language={matchLanguage}
                lineNumberStyle={{ display: 'none' }}
                lineProps={(line) => {
                  const style: CSSProperties = {
                    display: 'block',
                    padding: '0 1em',
                  }

                  if (lines && lines.includes(line)) {
                    style.backgroundColor = '#44475a'
                  }

                  return { style }
                }}
                showLineNumbers
                style={dracula}
                wrapLines
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
