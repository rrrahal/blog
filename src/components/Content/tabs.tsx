import * as Tabs from '@radix-ui/react-tabs';

import { postsType } from '@/types';
import { styled } from '../../../stitches.config'
import { PostsList } from './postsList';

type ContentTabsProps = {
  posts: postsType
}

const Text = styled('p', {
  fontFamily: '$system',
  color: '$secondary',
})

const Root = styled(Tabs.Root, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '$bigContentSize',
  '@bp1': {
    maxWidth: '$smallContentSize'
  }
})

const List = styled(Tabs.List, {
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'space-around',
  width: '200px'
})

const Trigger = styled(Tabs.Trigger, {
  backgroundColor: '$primary',
  color: '$hiContrast',
  height: '30px',
  display: 'flex',
  alignItems: 'Center',
  fontSize: '$5',

  '&:hover': {
    backgroundColor: '$secondary'
  },
  '&[data-state=active]': {
    borderBottom: '1px solid red',
  },
})

const Content = styled(Tabs.Content, {
  alignSelf: 'flex-start',
  maxWidth: '$bigContentSize',
  '@bp1': {
    maxWidth: '$smallContentSize'
  },
  color: '$secondary'
})


export const ContentTabs = ({ posts }: ContentTabsProps) => (
  <Root defaultValue="posts">
  <List aria-label="Posts">
    <Trigger value="posts">
      Posts
    </Trigger>
    <Trigger value="about">
      About
    </Trigger>
  </List>
  <Content value='posts' >
    <PostsList posts={posts} />
  </Content>
  <Content value='about' >
    <Text>Here is the about</Text>
  </Content>
</Root>
)
