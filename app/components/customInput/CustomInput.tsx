import React, { createRef, RefObject } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../../components"
import { useTheme } from "@react-navigation/native"
import { Input } from "react-native-elements"

interface Props{
  placeHolder: string,
  onSubmit: (text: string) => void
}

export const CustomInput = observer((props: Props) => {
  const { colors } = useTheme()
  const inputRef: RefObject<TouchableOpacity> = createRef()

  const getRightIcon = (): React.ReactElement => {
    return (
    <TouchableOpacity
      onPress={() => inputRef.current?.clear()}
      style={[style.rightIcon, { backgroundColor: colors.card }]}
    >
      <Text style={{ color: colors.text }}>
        {'X'}
      </Text>
    </TouchableOpacity>
    )
  }

  return (
    <Input
      ref={inputRef} // TS - problem with library interface
      onSubmitEditing={(e) => props.onSubmit(e.nativeEvent.text)}
      rightIcon={getRightIcon()}
      style={{ color: colors.text }}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      placeholder={props.placeHolder}
    />
  )
})

const style = StyleSheet.create({
  rightIcon: {
    alignItems: 'center',
    borderRadius: 15,
    height: 25,
    justifyContent: 'center',
    width: 25
  }
})
