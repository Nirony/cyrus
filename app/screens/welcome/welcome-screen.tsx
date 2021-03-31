import React from "react"
import { View, Text, SafeAreaView } from "react-native"
import { useTheme } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Header } from "../../components"
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
    <SafeAreaView testID="WelcomeScreen" style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: color.transparent }}>
       <Header headerText={'Get Stack Overflow Posts'} titleStyle={{ color: colors.text }} />
       <CustomInput placeHolder={'user ID'} onSubmit={(text) => getQuestions(text)} />
       <UserAvatarAndDetails/>
       <QuestionsList/>
        { Array.isArray(questions) && (
          <Text style={{ marginTop: 10, color: colors.text }}> {`total of ${questions.length} questions found`}</Text>
        )}
      </View>
    </SafeAreaView>
  )
})
