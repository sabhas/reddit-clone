import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { authModalState, ModalView } from '../../../atoms/authModalAtom'
import InputItem from '../../Layout/inputItem'

const Login: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState)

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {}

  const onChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const toggleView = (view: ModalView) => {
    setAuthModalState((prev) => ({
      ...prev,
      view
    }))
  }

  return (
    <form onSubmit={onSubmit}>
      <InputItem
        name='email'
        placeholder='email'
        type='text'
        mb={2}
        onChange={onChange}
      />
      <InputItem
        name='password'
        placeholder='password'
        type='password'
        onChange={onChange}
      />
      <Button width='100%' height='36px' mb={2} mt={2} type='submit'>
        Log In
      </Button>
      <Flex justifyContent='center' mb={2}>
        <Text fontSize='9pt' mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize='9pt'
          color='blue.500'
          cursor='pointer'
          onClick={() => toggleView('resetPassword')}
        >
          Reset
        </Text>
      </Flex>
      <Flex fontSize='9pt' justifyContent='center'>
        <Text mr={1}>New here?</Text>
        <Text
          color='blue.500'
          fontWeight={700}
          cursor='pointer'
          onClick={() => toggleView('signup')}
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  )
}
export default Login
