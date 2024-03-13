1-https://lucasbassetti.com.br/react-simple-chatbot/#/docs/installation
2-npm install react-simple-chatbot --save
3-<ChatBot
  steps={[
    {
      id: '1',
      message: 'Hello World!',
      end: true, // if we add this then texarea gets freezed
    },
  ]}
/>
4- {
      id: '1',
      message: 'Hello World!', 
      trigger:"3" // then object with that id is triggered
    },


5-message: 'Hi {previousValue}, nice to meet you!', // to get prevoius value
6- {
        id: '2',
        options: [
          { value: 1, label: 'Number 1', trigger: '4' },
          { value: 2, label: 'Number 2', trigger: '3' },
          { value: 3, label: 'Number 3', trigger: '3' },
        ],
      }, // to give user options to select

7- {
      id: '2',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'value should be a number';
        }
        return true;
      },
      trigger: '1',
    }, // if value is not a number then textarea will be valued as value should be a number

8- {
      id: '2',
      component: (
        <div> This is an example component </div>
      ),
      end: true,
    }, // to create a custom component

9-to update a perticular field like mujhe sirf age hi update karni hai or fir seedha table show karni haii
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

           update:"name",=> ye hai vahana  {
                id:"name",
                user:true,
                trigger:"3",
            }, or uske bad table dikh jayegi fir se
              