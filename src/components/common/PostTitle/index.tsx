import { ReactNode } from 'react'

export type PostTitleProps = {
  children: ReactNode
}
function PostTitle({ children }: PostTitleProps) {
  return <h1>{children}</h1>
}

export default PostTitle
