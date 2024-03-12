import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
export default function Chattbot()
{
    function CalculateMarks(props)
    {
        const {steps}=props;
        const englishMarks = parseInt(steps.english.value);
        const mathsMarks = parseInt(steps.maths.value);
        const scienceMarks = parseInt(steps.science.value);
        const totalMarks = englishMarks + mathsMarks + scienceMarks;
        return `Congratulations you got ${totalMarks} marks out of 300`
        // console.log("steos",steps)
    }
    return(
        <>
        <ChatBot
        steps={[
            {
            id:"1",
            message:"Enter your name?",
            trigger:"2",
            },
            {
                id:"2",
                user:true,
                trigger:"3",
                // end:true
            },
            {
                id:"3",
                message:"Welcome {previousValue}...",
                trigger:"4"
            },
            {
                id:"4",
                message:"Lets Calculate your marks.",
                trigger:"6"
            },
            {
                id:"6",
                options:[{value:"ok",label:"ok",trigger:"startenteringmarks"}]

            },
            {
                id:"startenteringmarks",
                message:"Enter your English marks",
                trigger:"english"
            },
            {
                id:"english",
                user:true,
                validator:(value)=>{
                    if(isNaN(value) || value>100)
                    {
                        return "Enter a valid Number"
                    }
                    return true
                },
                trigger:"7"
            },
            {
                id:"7",
                message:"Good, Now enter your Science marks",
                trigger:"science"
            },
            {
                id:"science",
                user:true,
                validator:(value)=>{
                    if(isNaN(value) || value>100)
                    {
                        return "Enter a valid Number"
                    }
                    return true
                },
                trigger:"9"
            },
            {
                id:"9",
                message:"Good, Now enter your Maths marks also",
                trigger:"maths"
            },
            {
                id:"maths",
                user:true,
                validator:(value)=>{
                    if(isNaN(value) || value>100)
                    {
                        return "Enter a valid Number"
                    }
                    return true
                },
                trigger:"10"
            },
            {
                id:"10",
                component:<CalculateMarks/>,
                end:true
            }

        ]}
        ></ChatBot>
        </>
    )
}