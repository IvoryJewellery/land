import React,{Component} from 'react';
import '../styles/ComingSoon.css';
import Countdown from "./Countdown"
import Logo from "./Logo"
import {Title} from "./Title"
import Subscribe from "./Subscribe"
import Video from "./Video"
import instagram from "../images/ig.svg"
import {Links} from "./Links"

class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2022-08-15 11:11:00"
    },
    title: {
      text: "August 15th"
    },
    subscribe: {
      placeholder: "Enter your Email",
      buttonText: "Submit"
    },
    links:[{
      url: "https://www.instagram.com/donebyivory/",
      logo: instagram,
      text: "Follow"

    }]
    

  }
  render() {
    const {
      title,
      countdown,
      subscribe,
      links
    } = this.state;
  return (
    <div className="background">
      <Logo></Logo>
      <Video></Video>
      <Title text={title.text}/>
      <Countdown futureDate={countdown.futureDate}></Countdown>
      <Subscribe placeholder={subscribe.placeholder} buttonText={subscribe.buttonText}/>
      <Links links={links}/>
    </div>

  )};
}

export default ComingSoon;
