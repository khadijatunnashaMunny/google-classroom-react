

import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    root: {
        display: "flex",
      },
      content: {
        width: "100%",
        paddingTop:'3%',
        
      },
    gradeHeader:{
        width:'100%',
        height:'80px',
        color:'#fff',
        display:'flex',
        alignItems:'center',
        textAlign:'center',
        paddingLeft:'2%',
        paddingTop:'2%',


    },
      footer:{
        position: 'fixed',
        bottom: '0',
        width: '100%',
        color: 'white',
      },
    
      
      InputField:{
          width:'60%',
          
        },
        btn:{
            width:'30%',
            
        },
        message:{
            display:'flex',
        },
        messageInput:{
          height:'50px',
          width:'100%',
          borderRadius:'6px',
          border:'1px solid #005671',
  
        },
        submitBtn:{
            height:'50px',
            width:'100%',
        },
        messageOutput:{
            width:'100%',
            height: '80vh',
            marginBottom: '20px',
            bottom: '5',

        },
        profileImg:{
            height:'40px',
            width:'40px',
            borderRadius:'50%',
            border:'1px solid #005671',
        },
      
}));
