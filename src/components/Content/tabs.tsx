import * as Tabs from '@radix-ui/react-tabs';
import * as Separator from '@radix-ui/react-separator';

import { postsType } from '@/types';
import { styled } from '../../../stitches.config'
import { PostsList } from './postsList';
import { About } from './about'

type ContentTabsProps = {
  posts: postsType
}

// TODO REMOVE THIS PX FROM THIS FILE

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
  color: '$hiContrast',
  height: '30px',
  display: 'flex',
  alignItems: 'Center',
  fontSize: '$5',
  paddingX: "$3",
  paddingY: '$1',

  '&:hover': {
    borderBottom: '1px solid $hover'
  },
  '&[data-state=active]': {
    borderBottom: '1px solid $active',
  },
})

const Content = styled(Tabs.Content, {
  // TODO: REMOVE THIS SIZES
  width: '650px',
  color: '$hiContrast',
})

const VerticalSeparator = styled(Separator.Root, {
  width: '1px',
  backgroundColor: '$borders'
})


export const ContentTabs = ({ posts }: ContentTabsProps) => (
  <Root defaultValue="posts">
  <List aria-label="Posts">
    <Trigger value="posts">
      Posts
    </Trigger>
    <VerticalSeparator orientation='vertical' />
    <Trigger value="about">
      About
    </Trigger>
  </List>
  <Content value='posts' >
    <PostsList posts={posts} />
  </Content>
  <Content value='about' >
    <About />
  </Content>
</Root>
)
