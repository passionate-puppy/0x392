import { useIsMobileScreen } from 'modules/hooks'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'
import type { CSSProperties, ReactNode } from 'react'

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

export type PostCodeBlockProps = {
  children: ReactNode
  className?: string
}

function PostCodeBlock({ children, className }: PostCodeBlockProps) {
  const match = /language-(\w+)({([,\-\d]+)})?$/.exec(className || '')
  const [isMobileScreen] = useIsMobileScreen({ enabled: !!match })

  if (!match) {
    return <code className={className}>{children}</code>
  }

  const matchLanguage = match[1]
  const matchLines = match[3]
  const targetLines = parseMatchLines(matchLines)

  return (
    // It seems a bug that to use `lineProps`, we have to add both `showLineNumbers`
    // and `wrapLines` props to the `<SyntaxHighlighter>` component.
    // @see https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/368
    //
    // We add `float: 'left'` to `customStyle` prop for highlighting code lines
    // correctly in a smaller screen.
    // @see https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/#line-highlighting-1
    <div
      style={{
        borderRadius: isMobileScreen ? 0 : 8,
        // `12px` is the value of `$container-xs-horizontal-padding`
        margin: isMobileScreen ? '0 -12px' : undefined,
        overflow: 'auto',
      }}
    >
      <SyntaxHighlighter
        customStyle={{
          borderRadius: 0,
          float: 'left',
          fontSize: 14,
          margin: 0,
          padding: '1em 0',
          minWidth: '100%',
        }}
        language={matchLanguage}
        lineNumberStyle={{ display: 'none' }}
        lineProps={(line) => {
          const style: CSSProperties = {
            display: 'block',
            padding: '0 1em',
          }

          if (targetLines && targetLines.includes(line)) {
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
    </div>
  )
}

export default PostCodeBlock
