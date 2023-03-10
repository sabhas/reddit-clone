import React from 'react'
import { Flex } from '@chakra-ui/react'
import AuthButtons from './authButtons'

const RightContent: React.FC = () => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <AuthButtons />
      </Flex>
    </>
  )
}
export default RightContent
