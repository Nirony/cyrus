import React from "react"
import { View, Text } from "react-native"
import { useTheme } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Header, Screen } from "../../components"
import { color } from "../../theme"
import { CustomInput } from "../../components/customInput/CustomInput"
import { useStores } from "../../models"
import { UserAvatarAndDetails } from "./components/UserAvatarAndDetails"
import { QuestionsList } from "./components/QuestionsList"

export const WelcomeScreen = observer(function WelcomeScreen() {
  const { colors } = useTheme()
  const { userQuestionsStore } = useStores()
  const { getQuestions, questions } = userQuestionsStore

  return (
    <View testID="WelcomeScreen" style={{ flex: 1 }}>
      <Screen style={{ flex: 1 }} backgroundColor={color.transparent}>
       <Header headerText={'Get Stack Overflow Posts'} titleStyle={{ color: colors.text }} />
       <CustomInput placeHolder={'user ID'} onSubmit={(text) => getQuestions(text)} />
       <UserAvatarAndDetails/>
       <QuestionsList/>
        { Array.isArray(questions) && !!questions.length && <Text> {`total of ${questions.length} questions found`}</Text>}
      </Screen>
    </View>
  )
})
