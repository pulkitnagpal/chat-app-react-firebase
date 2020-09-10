import React, {forwardRef, useEffect} from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";


function Message({ message, username }, ref) {
  const isUser = username === message.username;
  useEffect(() => {
    console.log('card mounted')
    
  }, [])
  return (
    <Card ref={ref} className={`message ${isUser ? 'message_user': 'message_guest'}`}>
      <CardContent>
        <Typography variant="h5" component="h2" color="white">
          {message.username}: {message.message}
        </Typography>
      </CardContent>
    </Card>
  );
}

const ForwardedMessage = forwardRef(Message)
export default ForwardedMessage;
