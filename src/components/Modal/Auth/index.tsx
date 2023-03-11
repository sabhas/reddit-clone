import { authModalState } from '@/atoms/authModalAtom'
import { auth } from '@/firebase/clientApp'
import {
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalHeader
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState } from 'recoil'
import ModalWrapper from '../modalWrapper'
import AuthInputs from './inputs'
import OAuthButtons from './oAuthButtons'
import ResetPassword from './resetPassword'

const AuthModal: React.FC = () => {
  const [user] = useAuthState(auth)
  const [modalState, setModalState] = useRecoilState(authModalState)

  const handleClose = () =>
    setModalState((prev) => ({
      ...prev,
      open: false
    }))

  useEffect(() => {
    if (user) handleClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

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
