import { useActionSheet } from '@expo/react-native-action-sheet'
import getPath from '@flyerhq/react-native-android-uri-path'
import { Chat, MessageType } from '@flyerhq/react-native-chat-ui'
import {
  PreviewData,
  useFirebaseUser,
  useMessages,
  useRoom,
} from '@lib'
import { utils } from '@react-native-firebase/app'
import storage from '@react-native-firebase/storage'
import { RouteProp } from '@react-navigation/native'
import React, { useState } from 'react'
import { Platform } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { MainStackParamList } from 'src/types'

interface Props {
  route: RouteProp<MainStackParamList, 'Chat'>
}

const ChatScreen = ({ route }: Props) => {
  const { firebaseUser } = useFirebaseUser()
  const { room } = useRoom(route.params.room)
  const { messages, sendMessage, updateMessage } = useMessages(room)
  const [isAttachmentUploading, setAttachmentUploading] = useState(false)
  const { showActionSheetWithOptions } = useActionSheet()

  const handleAttachmentPress = () => {
   
  }

 

  

  const handleMessagePress = async (message: MessageType.Any) => {
    if (message.type === 'file') {
      try {
        const uri = utils.FilePath.DOCUMENT_DIRECTORY + '/' + message.name
        const reference = storage().ref(message.name)
        await reference.writeToFile(uri)
        const path =
          Platform.OS === 'android' ? uri.replace('file://', '') : uri
       // await FileViewer.open(path, { showOpenWithDialog: true })
      } catch {}
    }
  }

  const handlePreviewDataFetched = ({
    message,
    previewData,
  }: {
    message: MessageType.Text
    previewData: PreviewData
  }) => {
    const newMessage: MessageType.Text = { ...message, previewData }
    updateMessage(newMessage)
  }

  return (
    <Chat
      enableAnimation
      isAttachmentUploading={isAttachmentUploading}
      messages={messages}
      onAttachmentPress={handleAttachmentPress}
      onMessagePress={handleMessagePress}
      onPreviewDataFetched={handlePreviewDataFetched}
      onSendPress={sendMessage}
      user={{ id: firebaseUser?.uid ?? '' }}
    />
  )
}

export default ChatScreen
