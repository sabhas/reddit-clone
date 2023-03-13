import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilValue } from 'recoil'
import { communityState } from '../../../atoms/communitiesAtom'
import { auth } from '../../../firebase/clientApp'
import CreateCommunityModal from '../../Modal/createCommunity'
import Moderating from './moderating'
import MyCommunities from './myCommunities'

type CommunitiesProps = {
  menuOpen: boolean
}

const Communities: React.FC<CommunitiesProps> = ({ menuOpen }) => {
  const [user] = useAuthState(auth)
  const [open, setOpen] = useState(false)
  const mySnippets = useRecoilValue(communityState).mySnippets

  return (
    <>
      <CreateCommunityModal
        isOpen={open}
        handleClose={() => setOpen(false)}
        userId={user?.uid!}
      />
      <Moderating snippets={mySnippets.filter((item) => item.isModerator)} />
      <MyCommunities snippets={mySnippets} setOpen={setOpen} />
    </>
  )
}

export default Communities
