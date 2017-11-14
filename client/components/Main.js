import React from 'react';
import { Link } from 'react-router';
import store from '../store';


const Main = React.createClass({
getInitialState(){
  return{
    text:'',
    replied:false,
  }
},
rateChanging(rate){
  this.setState({
      rate: rate
    });
},
_sendInquiry(){
  if(this.state.text == ''){
    return
  }
  let that = this;
  that.setState({
    text:'',
  })
  that.props.sendInquiry(that.state.text);
  if(!this.state.replied){
    setTimeout(function(){
      that.props.sendReply("To reset your password just click on the My Detail menu.Once you have clicked the menu a new page will appear.Select the link change password. From the link it will take you to a screen where you can change your password.")
    },3000);
    that.setState({
      replied:true
    });
  }
},
updateInputValue(evt) {
    this.setState({
      text: evt.target.value
    });
},
componentWillReceiveProps(){
  this.setState({
    reply:store.getState().data.reply,
    inquiry:store.getState().data.inquiry,
  })
},
_changeChatStatus(){
  var that = this;
  that.props.changeChatStatus();
  setTimeout(function(){
    that.props.sendReply("Hi Nickolas this is mary from Abank. How may i help you today?")
  },1000);
},

  render() {
    var that = this;
    return (
      <div className="container">
      <div className="webchat-container">
        <span className="webchat-title">Webchat</span>
        <div className="webchat-chatbox">
          {
            !store.getState().data.chatStatus
            ?<div className="webchat-beforeChating">Starting Chatting by clicking "Chat Now"</div>
            :<div className="webchat-chating">
                {that.state.reply.concat(that.state.inquiry)
                  .sort((a,b) => a.time > b.time)
                  .map((item,i) =>
                    <div key={i} className={item.type === 'reply' ? 'webchat-reply' :'webchat-inquiry'}><span className="webchat-person">{item.person}</span>{item.content}</div>

                )
                  }
             </div>
          }
        </div>
        {
          !store.getState().data.chatStatus
          ?<span className="webchat-chatNow" onClick={that._changeChatStatus}>Chat now</span>
          : <div className="webchat-bottom">
              <input type="text" className="webchat-input" value={this.state.text} onChange={that.updateInputValue}/>
              <div className="webchat-button" onClick={that._sendInquiry}>Send</div>
            </div>

        }
      </div>
      </div>
    )
  }
});

export default Main;
