import React from "react"
import { View, ViewStyle, Text, ImageStyle, SafeAreaView, FlatList, TouchableOpacity } from "react-native"
import { useNavigation, useTheme } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen } from "../../components"
import { color, spacing, typography } from "../../theme"
import { ThemeSwitch } from "../../components/themeSwitch/ThemeSwitch"
import { CustomInput } from "../../components/customInput/CustomInput"
import { useStores } from "../../models"
import { Avatar, ListItem } from "react-native-elements"
import { AvatarCard } from "../../components/avatarCard/AvatarCard"
import { UserAvatarAndDetails } from "./components/userAvatarAndDetails"
import { UserQuestionModel } from "../../models/userQuerstions/userQuestions"

export const WelcomeScreen = observer(function WelcomeScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("demo")
  const { colors } = useTheme()
  const { userQuestionsStore } = useStores()
  const { getQuestions, questions } = userQuestionsStore

  return (
    <View testID="WelcomeScreen" style={FULL}>
      <Screen style={{ flex: 1 }} backgroundColor={color.transparent}>
       <ThemeSwitch/>
       <Header headerText={'Get Stack Overflow Posts'} titleStyle={{ color: colors.text }} />
       <CustomInput placeHolder={'user ID'} onSubmit={(text) => getQuestions(text)} />
       <UserAvatarAndDetails/>
       <FlatList
         data={questions}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({ item, index }) => {
           return (
             <TouchableOpacity onPress={() => console.tron.log(item.link)}>
             <ListItem key={index} bottomDivider>
               <ListItem.Content>
                 <ListItem.Title>{item.title}</ListItem.Title>
                 <ListItem.Subtitle>{` view count: ${item.view_count}`}</ListItem.Subtitle>
               </ListItem.Content>
               <ListItem.Chevron/>
           </ListItem>
             </TouchableOpacity>)
         }}
         />
        { Array.isArray(questions) && !!questions.length && <Text> {`total of ${questions.length} questions found`}</Text>}
      </Screen>
    </View>
  )
})

const FULL: ViewStyle = { flex: 1 }

