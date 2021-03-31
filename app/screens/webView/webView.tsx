import React from "react"
import { SafeAreaView } from "react-native"
import { useNavigation, RouteProp } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Header } from "../../components"
import WebView from "react-native-webview"
import { PrimaryParamList } from "../../navigators"

type webViewScreenRouteProp = RouteProp<PrimaryParamList, 'webView'>
interface Props {
  route?: webViewScreenRouteProp
}
export const WebViewScreen: React.FC<Props> = observer((props) => {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  return (
    <SafeAreaView testID="WebViewScreen" style={{ flex: 1 }}>
      <Header
        leftIcon="back"
        onLeftPress={goBack}
      />
      <WebView
        source={{ uri: props.route.params.url || '' }}
        style={{ marginTop: 10 }}
      />
    </SafeAreaView>
  )
})
