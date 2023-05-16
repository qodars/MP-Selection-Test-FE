import React, {Component} from "react";
import axios from "axios";
import { tokenToCSSVar } from "@chakra-ui/react";

class Verificationpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'loading...'
        }
    }
    componentDidMount(){
        // const tok = localStorage.getItem('token')
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwibmFtZSI6ImFsZHk5NyIsImlhdCI6MTY4NDIxNTQ1OCwiZXhwIjoxNjg0MjU4NjU4fQ.oD7fdzRXXfuFK6ScqN9t3jwE66rAPHfiYnfLDv-7N70'
        axios.put(`http://localhost:8000/auth/verification`,{}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res =>{
            this.setState({message: 'Your Account Verified'})
        }).catch(err =>{
            console.log(err)
        })
    }
    render(){
        return(
            <div className="p-5">
                <h2>berhasil</h2>
                </div>
        )
    }
}
export default Verificationpage

// export default function Verificationpage() {
//     axios.patch(`http://localhost:8000/auth/verification`,{}, {
//                     headers: {
//                         Authorization: `Barrier ${this.props.match.param.token}`
//                     }
//                 })    
//     return(
//         <div><p>berhasil</p></div>
        
//     )
    
// }
