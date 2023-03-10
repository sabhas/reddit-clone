import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

type ModalWrapperProps = {
  isOpen: boolean
  onClose: () => void
}

const ModalWrapper: React.FC<ModalWrapperProps & PropsWithChildren> = ({
  children,
  isOpen,
  onClose
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size='lg'>
        <ModalOverlay />
        <ModalContent width={{ base: 'sm', md: 'xl' }}>{children}</ModalContent>
      </Modal>
    </>
  )
}
export default ModalWrapper
