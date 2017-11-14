export function changeChatStatus(){
  return{
    type:'CHANGE_CHAT_STATUS',
  }
}
export function sendInquiry(inquiry){
  return{
    type:'SEND_INQUIRY',
    inquiry
  }
}
export function sendReply(reply){
  return{
    type:'SEND_REPLY',
    reply
  }
}
