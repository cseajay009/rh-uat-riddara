import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Card from '~/components/Card'
import Container from '~/components/Container'
import ComingSoon from '~/components/ComingSoon'
import dynamic from 'next/dynamic'


const RiddaraHome = dynamic(() => import('~/components/RiddaraHome'), { ssr: false })

import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
 
  return (
   
       
       <RiddaraHome/>
    
  )
}
