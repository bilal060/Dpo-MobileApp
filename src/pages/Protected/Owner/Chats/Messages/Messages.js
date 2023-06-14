import {FlatList, StyleSheet, Text, View , ScrollView} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {Container, PackageCard} from '../../../../../containers';
import {
  CButton,
  CheckBox,
  CIcon,
  CList,
  CPagination,
  CText,
  ProfileCard,
  ProgressiveImage,
  RadioButton,
} from '../../../../../components';
import Styles from '../Chats.style';
import {ManagerIcon, Menu, Notification, Profile} from '../../../../../assets/images';
import GlobalStyle from '../../../../../assets/styling/GlobalStyle';
import {themes} from '../../../../../theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getConversationMessages } from '../../../../../redux/actions/Root.Action';
import { Socket } from '../../../../../utils/methods';
import moment from 'moment';

const Managers = ({route}) => {
  const headerProps = {
    ProgressiveImageHeader: true,
    backButtonIcon: false,

    headerTitle: 'Messages',
    headerRight: true,
    headerRightImg: false,
    headerRightImg: Notification,
    // rightPress: ()=> navigation.navigate("AddNewManager")
  };

  const data = [
    {
      name: 'Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum ',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      type: "sender",
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      type: "sender",

    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      type: "reciver",


    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',

    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      type: "sender",


    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      type: "sender",

    },
   
  ];


  const {conversationId} = route?.params ||{}; 
  const dispatch = useDispatch();
  const scrollRef = useRef();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);  
  console.log("🚀 ~ file: Messages.js:87 ~ Managers ~ messages:", messages)
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const token = useSelector(state => state.auth.token);
  const userId = useSelector(state => state.auth.user._id); 
  useEffect(() => {
    if (conversationId){
      getMessages();
    }
  }, [conversationId]);   
  useEffect(() => { 
    Socket.on("getMessage", (data) => { 
      const newmessage = {
        receiverId: data.receiverId,
        sender: data.senderId,
        message: data.message, 
      };
      setArrivalMessage(newmessage);
      // setMessages(pre => [...pre, newmessage]);
    });
  }, []);
  useEffect(() => {
    arrivalMessage &&
    messages!=undefined && messages[0].conversationId.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, []);

  const getMessages = async () => {
    try {
      dispatch(getConversationMessages(conversationId, callbackFunc))

    } catch (err) {
      console.log(err);
    }
  };
  const callbackFunc =(res)=>{
    setMessages(res.messages);

  }


  const sendMessage = async ()=>{
    const newmessage = {
      "conversationId":conversationId,
      "sender": userId,
      "message": message
    }
    dispatch(send_messages(newmessage,token)); 
    setMessages(pre => [...pre, newmessage]);
    

    setMessage("");

    const receiverId = await messages!=undefined && messages[0].conversationId.members.find(
      (member) => member !== userId
    );
    Socket.emit("sendMessage", {
      senderId: userId,
      receiverId: receiverId,
      message: message,
    });
  }

  

  const renderProfile = (item, index) => {
    const isSender = item?.sender === userId
    console.log("🚀 ~ file: Messages.js:157 ~ renderProfile ~ isSender:", isSender)

    console.log('itemitemitem---mrssage', item);
    return (
        <View style={isSender ?  Styles.reciverView : Styles.senderView}>
          
          <View style={{flex: 1, paddingHorizontal: 10}}>
            <CText style={ isSender ?  Styles?.reviverMessageName  : Styles.senderMessageName}>{item.message}</CText>
          </View>
          <View>
            <CText style={ isSender ?   Styles?.reciverDate : Styles.senderDate}>{moment(item?.conversationId?.updatedAt).format('L')}</CText>
          </View>
        </View>
    );
  };

  return (
    <Container
      //   scrollView
      bottomSpace
      edges={['left', 'right']}
      style={Styles.container}
      //   headerProps={headerProps}
    >
      <View style={Styles.subcontainer}>
        <View style={Styles.messageHeader}>
          <CIcon
            type="AntDesign"
            name="left"
            color={themes.light.colors.tertiary}
            size={25}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <ProgressiveImage
              source={Profile}
              resizeMode="contain"
              style={{width: 45, height: 45, borderRadius: 100}}
            />
            <View style={{flex: 1, paddingHorizontal: 10, paddingLeft: 20}}>
              <>
                <CText style={Styles.profileName}>{`Martin Randolph`}</CText>
              </>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={Styles.onlineView} />
                <CText style={Styles.online}>{`Available`}</CText>
              </View>
            </View>
          </View>
          <View>
          <ProgressiveImage
              source={Menu}
              resizeMode="contain"
              style={{width: 25, height: 25,}}
            />
          </View>
        </View>
        <ScrollView style={Styles.chatlist}>
            
        <View style={{marginBottom:50}} >
          
          {messages!=undefined && messages.length >= 0 && messages.map((item) => (
            renderProfile(item)
          ))}
          
          {/* <CList
            style={}
            // numColumns={2}
            //   horizontal
            // contentContainerStyle={[GlobalStyle.list, ]}
            data={data}
            // loading={reduxState.loading}
            renderItem={renderProfile}
            keyExtractor={(item, index) => index.toString()}
            emptyOptions={{
              // icon: require('../../assets/images/empty.png'),
              text: 'Store not found',
            }}
            // onRefreshLoading={reduxState.loading}
            // onRefreshHandler={() => onRefreshHandler()}
            // onEndReached={onEndReached}
            // onEndReachedThreshold={0.1}
            // maxToRenderPerBatch={10}
            // windowSize={10}
          /> */}
        </View>
        </ScrollView>

      </View>

      {/* <CList
            style={Styles.chatlist}
            // numColumns={2}
            //   horizontal
            // contentContainerStyle={[GlobalStyle.list, ]}
            data={data}
            // loading={reduxState.loading}
            renderItem={renderProfile}
            keyExtractor={(item, index) => index.toString()}
            emptyOptions={{
              // icon: require('../../assets/images/empty.png'),
              text: 'Store not found',
            }}
            // onRefreshLoading={reduxState.loading}
            // onRefreshHandler={() => onRefreshHandler()}
            // onEndReached={onEndReached}
            // onEndReachedThreshold={0.1}
            // maxToRenderPerBatch={10}
            // windowSize={10}
          />
        </View>
      </View> */}
    </Container>
  );
};

export default Managers;

const styles = StyleSheet.create({});
