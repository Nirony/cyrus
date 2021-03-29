import React, { useState } from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Switch, Text } from "../../components"
import { useStores } from "../../models"
import { themeMode } from "../../models/global-store/global-store"
import { useTheme } from "@react-navigation/native"

export const ThemeSwitch = observer(() => {
  const [switchValue, setSwitchValue] = useState(true)
  const { globalStore } = useStores()
  const { colors } = useTheme()

  const onSwitchToggle = (newVal: boolean) => {
    const newTheme = newVal ? themeMode.light : themeMode.dark
    globalStore.setThemeMode(newTheme)
    setSwitchValue(newVal)
  }

  return (
    <View>
      <Switch value={switchValue} onToggle={onSwitchToggle}/>
      <Text style={{ color: colors.text }}>{switchValue ? 'light mode' : 'dark mode'}</Text>
    </View>
  )
})
