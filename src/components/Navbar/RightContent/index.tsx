import AuthModal from '@/components/Modal/Auth'
import { Flex } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import React from 'react'
import AuthButtons from './authButtons'
import Icons from './icons'
import ProfileMenu from './profileMenu'

type RightContentProps = {
  user?: User | null
}

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justifyContent='space-between' alignItems='center'>
        {user ? <Icons /> : <AuthButtons />}
        <ProfileMenu />
      </Flex>
    </>
  )
}
export default RightContent
