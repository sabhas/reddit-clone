import React, { useState } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { authModalState, ModalView } from '../../../atoms/authModalAtom'
import InputItem from '../../Layout/inputItem'

const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState)

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
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
        mb={2}
        onChange={onChange}
      />
      <InputItem
        name='confirmPassword'
        placeholder='confirm password'
        type='password'
        onChange={onChange}
      />

      <Button width='100%' height='36px' mb={2} mt={2} type='submit'>
        Sign Up
      </Button>
      <Flex fontSize='9pt' justifyContent='center'>
        <Text mr={1}>Have an account?</Text>
        <Text
          color='blue.500'
          fontWeight={700}
          cursor='pointer'
          onClick={() => toggleView('login')}
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  )
}
export default SignUp
