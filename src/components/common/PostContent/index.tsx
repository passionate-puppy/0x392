import PostCodeBlock from 'components/common/PostCodeBlock'
import ReactMarkdown from 'react-markdown'
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
          code: ({ children, className }) => (
            <PostCodeBlock className={className}>
              {children}
            </PostCodeBlock>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default PostContent
