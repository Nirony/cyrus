import React, { Fragment, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { useStores } from "../../../models"
import { AvatarCard } from "../../../components/avatarCard/AvatarCard"

export const UserAvatarAndDetails = observer((): React.ReactElement => {
  const [avatarDetails, setAvatarDetails] = useState(new Map())
  const { userQuestionsStore } = useStores()
  const { questions } = userQuestionsStore
  const { profile_image, display_name, reputation, accept_rate } = questions?.[0]?.owner || {}

  useEffect(() => {
    const avatarDetails = new Map();
    display_name && avatarDetails.set('Display name: ', display_name)
    reputation && avatarDetails.set('Reputations: ', reputation)
    accept_rate && avatarDetails.set('Accept Rate: ', accept_rate)
    setAvatarDetails(avatarDetails)
  }, [questions])

  if (!questions?.[0]) return <Fragment/>
  return (
        <AvatarCard avatarUri={profile_image} avatarDetails={avatarDetails}/>
  )
})
