import React from 'react'
import { Flex } from '@chakra-ui/react'
import AuthButtons from './authButtons'
import AuthModal from '@/components/Modal/Auth'

const RightContent: React.FC = () => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <AuthModal />
        <AuthButtons />
      </Flex>
    </>
  )
}
export default RightContent
