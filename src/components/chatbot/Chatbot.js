import React from 'react'
import ChatBOt from "react-simple-chatbot"
export default function Chatbot() {
    const steps = [
       
        {

            id: "Greet",
      
            message: "Hello, Welcome to our shop",
      
            trigger: "Done",
      
          },
      
          {
      
            id: "Done",
      
            message: "Please enter your name!",
      
            trigger: "waiting1",
      
          },
      
          {
      
            id: "waiting1",
      
            user: true,
      
            trigger: "Name",
      
          },
      
          {
      
            id: "Name",
      
            message: "Hi {previousValue}, Please select your issue",
      
            trigger: "issues",
      
          },
      
          {
      
            id: "issues",
      
            options: [
      
              {
      
                value: "React",
      
                label: "React",
      
                trigger: "React",
      
              },
      
              { value: "Angular", label: "Angular", trigger: "Angular" },
      
            ],
      
          },
      
          {
      
            id: "React",
      
            message:
      
              "Thanks for letting your React issue, Our team will resolve your issue ASAP",
      
            end: true,
      
          },
      
          {
      
            id: "Angular",
      
            message:
      
              "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
      
            end: true,
      
          },


        // {
        //     id : "issues",
        //     Options: [
        //         {
        //             value: 'React',
        //             label: 'React',
        //             trigger: 'React'
        //         },
        //         {
        //             value: 'Angular',
        //             label: 'Angular',
        //             trigger: 'Angular'
        //         }
        //     ]
        // },
        // {
        //     id : "React",
        //     message: "Thanks for telling your React issue",
        //     end : true,
        // },
        // {
        //     id : "Angular",
        //     message: "Thanks for telling your Angular issue",
        //     end : true
        // }
    ]
  return (
    <div>
        <ChatBOt steps={steps} />
    </div>
  )
}
