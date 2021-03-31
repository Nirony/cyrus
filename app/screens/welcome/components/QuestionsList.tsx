import React, { Fragment, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { useStores } from "../../../models"
import { FlatList, TouchableOpacity } from "react-native"
import { ButtonGroup, ListItem } from "react-native-elements"
import { UserQuestionModel } from "../../../models/userQuerstions/userQuestions"
import { useNavigation } from "@react-navigation/native"

const buttons = ['Date', 'Answers', 'Views']
const buttonCorrespondingKey = ['creation_date', 'answer_count', 'view_count']

export const QuestionsList = observer((): React.ReactElement => {
  const [selectedButton, setSelectedButton] = useState(0)
  const [sortedQuestions, setSortedQuestions] = useState([] as UserQuestionModel[])
  const { userQuestionsStore: { questions } } = useStores()
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("webView")

  useEffect(() => {
    const sortedList = getSortedListByKey(selectedButton, [...questions])
    setSortedQuestions(sortedList)
  }, [questions])

  const getSortedListByKey = (index: number, list: UserQuestionModel[]): UserQuestionModel[] => {
    const key = buttonCorrespondingKey[index]
    return list.sort((a, b) => b[key] - a[key])
  }

  const onBtnGroupPress = (index: number) => {
    const sortedList = getSortedListByKey(index, [...questions])
    setSortedQuestions(sortedList)
    setSelectedButton(index)
  }

  if (!questions?.[0]) return <Fragment/>
  return (
    <>
      <ButtonGroup
        buttons={buttons}
        selectedIndex={selectedButton}
        onPress={onBtnGroupPress}
      />
      <FlatList
        data={sortedQuestions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => nextScreen()}>
              <ListItem key={index} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                  <ListItem.Subtitle>{`View count: ${item.view_count}`}</ListItem.Subtitle>
                  <ListItem.Subtitle>{`Date: ${new Date(item.creation_date * 1000)}`}</ListItem.Subtitle>
                  <ListItem.Subtitle>{`Answers: ${item.answer_count}`}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron/>
              </ListItem>
            </TouchableOpacity>)
        }}
      />
    </>
  )
})
