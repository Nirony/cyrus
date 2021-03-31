import React from "react"
import { ViewStyle, SafeAreaView, WebView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Header } from "../../components"

export const WebViewScreen = observer(function WelcomeScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  return (
    <SafeAreaView testID="WebViewScreen" style={{ flex: 1 }}>
      <Header
        leftIcon="back"
        onLeftPress={goBack}
      />

    </SafeAreaView>
  )
})


