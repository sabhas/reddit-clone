import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

type OAuthButtonsProps = {}

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  return (
    <Flex direction='column' mb={4} width='100%'>
      <Button
        variant='oauth'
        mb={2}
        // onClick={() => signInWithGoogle()}
        // isLoading={loading}
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
      {/* {error && (
        <Text textAlign='center' fontSize='10pt' color='red' mt={2}>
          {error}
        </Text>
      )} */}
    </Flex>
  )
}
export default OAuthButtons
