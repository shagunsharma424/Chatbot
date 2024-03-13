import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
export default function Chattbot()
{
    const FillTheForm=(props)=>
    {
        const {steps}=props;
        console.log("stepssteps",steps)
        const name = (steps.name.value);
        const age = (steps.age.value);
        const gender = (steps.gender.value);
       
        return<div style={{ width: '100%' }}>
        <h3>Student Form</h3>
        <table style={{width:"100%"}}>
          <tbody>
            <tr>
              <td style={{textAlign:"start",border:"1px solid purple",borderStyle:"none solid none none"}}>Name</td>
              <td style={{textAlign:"start"}}>{name}</td>
            </tr>
            <tr>
              <td style={{textAlign:"start",border:"1px solid purple",borderStyle:"none solid none none"}}>Gender</td>
              <td style={{textAlign:"start"}}>{gender}</td>
            </tr>
            <tr>
              <td style={{textAlign:"start",border:"1px solid purple",borderStyle:"none solid none none"}}>Age</td>
              <td style={{textAlign:"start"}}>{age}</td>
            </tr>
          </tbody>
        </table>
      </div>
    }

    const config = {
        botAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
        floating: true,
    };

    useEffect(()=>{
        document.querySelector(".sc-VigVT").innerHTML="<h3>Chat-Bot</h3>"
    },[])
    
    return(
        <>
        <ChatBot
         {...config}
         steps={[
            {
            id:"1",
            message:"Hello",
            trigger:"2",
            },
            {
                id:"2",
                message:"Enter your name ?",
                trigger:"name",
            },
            {
                id:"name",
                user:true,
                trigger:"3",
            },
            {
                id:"3",
                message:"Enter your current age?",
                trigger:"age",
            },
            {
                id:"age",
                user:true,
                trigger:"4",
                validator:(value)=>{
                    if(isNaN(value))
                    {
                        return "Enter a valid number"
                    }
                    return true
                 
                },
                
            },
            {
                id:"4",
                message:"Well done , You are half way done",
                trigger:"5",
            },
            {
                id:"5",
                message:"Select your Gender?",
                trigger:"gender",
            },
            {
                id:"gender",
                options:[
                    {value:"Male",label:"Male",trigger:"10"},
                    {value:"Female",label:"Female",trigger:"10"},
                ]
            },
            {
                id:"10",
                component:<FillTheForm/>,
                trigger:"11"
            },
            
            {
                id:"11",
                message:" Would you like to update some field?",
                trigger:"12"
            },
           
            {
                id:"12",
                options:[
                    {label:"Yes",value:"Yes",trigger:"13"},
                    {label:"No",value:"No",trigger:"14"},
            ],
            }
            ,
            {
                id:"14",
                message:" Thank You ",
                end:true
            },
            {
                id:"13",
                options:[
                    {label:"Name",value:"Name",trigger:"15"},
                    {label:"Age",value:"Age",trigger:"16"},
                    {label:"Gender",value:"Gender",trigger:"17"},
                ]
            },
            
            {
                id:"15",
                update:"name",
                trigger:"10"
            },
            
            {
                id:"16",
                update:"age",
                trigger:"10"
            },
            
            {
                id:"17",
                update:"gender",
                trigger:"10"
            },

        ]}
        ></ChatBot>
        </>
    )
}