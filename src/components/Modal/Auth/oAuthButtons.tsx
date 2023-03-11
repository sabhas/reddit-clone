import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, _, loading, authError] = useSignInWithGoogle(auth)

  return (
    <Flex direction='column' mb={4} width='100%'>
      <Button
        variant='oauth'
        mb={2}
        onClick={() => signInWithGoogle()}
        isLoading={loading}
      >
        <Image
          src='/images/googlelogo.png'
          alt='login with google'
          height='20px'
          mr={4}
        />
        Continue with Google
      </Button>
      <Button variant='oauth'>Some Other Provider</Button>
      <Text textAlign='center' fontSize='10pt' color='red' mt={2}>
        {authError && authError.message}
      </Text>
    </Flex>
  )
}
export default OAuthButtons
