import store from '../store';

function data(state = [], action) {
  switch(action.type) {

      case 'CHANGE_CHAT_STATUS':
      console.log("CHANGE_CHAT_STATUS");
      return {...state,
        chatStatus: true
      }

      case 'SEND_INQUIRY':
      console.log("SEND_INQUIRY");
      let newState = {...state};
      newState.inquiry.push({
        content: action.inquiry,
        time:new Date().getTime(),
        person:'Nicholas:'
      });
      return newState;

      case 'SEND_REPLY':
      console.log("SEND_REPLY");
      let newState2 = {...state};
      newState2.reply.push({
        content: action.reply,
        time:new Date().getTime(),
        type:'reply',
        person:'Mary:'
      });
      return newState2;

    default:
      return state;
  }
}

export default data;
