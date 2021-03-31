import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { WelcomeScreen, WebViewScreen } from "../screens"

export type PrimaryParamList = {
  welcome: undefined
  webView: { url: string }
}

const Stack = createStackNavigator<PrimaryParamList>()

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="webView" component={WebViewScreen} />
    </Stack.Navigator>
  )
}

const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
