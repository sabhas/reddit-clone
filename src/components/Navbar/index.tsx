import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/clientApp'
import RightContent from './RightContent'
import SearchInput from './searchInput'

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth)

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
      <RightContent user={user} />
    </Flex>
  )
}
export default Navbar
