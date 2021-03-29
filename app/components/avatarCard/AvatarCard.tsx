import React, { Fragment } from "react"
import { View, Text } from "react-native"
import { observer } from "mobx-react-lite"
import { useTheme } from "@react-navigation/native"
import { Avatar } from "react-native-elements"

interface Props {
  avatarUri: string;
  avatarDetails: Map<string, string>;
}

export const AvatarCard = observer(({ avatarDetails, avatarUri }: Props) => {
  const { colors } = useTheme()

  const getAvatarDetails = (): React.ReactElement[] | React.ReactElement => {
    if (avatarDetails instanceof Map) {
      const details = []
      avatarDetails.forEach((value, key, map) => {
        details.push(
          <Text
            key={key}
            style={{ color: colors.text }}
          >
            {`${key} ${value}`}
          </Text>
        )
      })
      return details
    }
    return <Fragment/>
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Avatar size={'xlarge'} source={{ uri: avatarUri }}/>
      <View style={{ justifyContent: 'space-around', marginLeft: 10 }}>
        {getAvatarDetails()}
      </View>
    </View>
  )
})
