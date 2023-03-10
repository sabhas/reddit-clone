import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import SearchInput from './searchInput'
import RightContent from './RightContent'

const Navbar: React.FC = () => {
  return (
    <Flex
      bg='white'
      height='44px'
      padding='6px 12px'
      justifyContent={{ md: 'space-between' }}
    >
      <Flex
        align='center'
        width={{ base: '40px', md: 'auto' }}
        mr={{ base: 0, md: 2 }}
        cursor='pointer'
      >
        <Image src='/images/redditFace.svg' alt='reddit-logo' height='30px' />
        <Image
          display={{ base: 'none', md: 'unset' }}
          src='/images/redditText.svg'
          alt='reddit-logo-text'
          height='46px'
        />
      </Flex>
      <SearchInput />
      <RightContent />
    </Flex>
  )
}
export default Navbar
