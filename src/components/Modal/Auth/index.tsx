import { authModalState } from '@/atoms/authModalAtom'
import {
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalHeader
} from '@chakra-ui/react'
import React from 'react'
import { useRecoilState } from 'recoil'
import ModalWrapper from '../modalWrapper'
import AuthInputs from './inputs'
import OAuthButtons from './oAuthButtons'
import ResetPassword from './resetPassword'

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState)
  const handleClose = () =>
    setModalState((prev) => ({
      ...prev,
      open: false
    }))

  return (
    <ModalWrapper isOpen={modalState.open} onClose={handleClose}>
      <ModalHeader display='flex' flexDirection='column' alignItems='center'>
        {modalState.view === 'login' && 'Login'}
        {modalState.view === 'signup' && 'Sign Up'}
        {modalState.view === 'resetPassword' && 'Reset Password'}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        pb={6}
      >
        <Flex
          direction='column'
          alignItems='center'
          justifyContent='center'
          width='70%'
        >
          {modalState.view === 'login' || modalState.view === 'signup' ? (
            <>
              <OAuthButtons />
              OR
              <AuthInputs />
            </>
          ) : (
            <ResetPassword />
          )}
        </Flex>
      </ModalBody>
    </ModalWrapper>
  )
}
export default AuthModal
