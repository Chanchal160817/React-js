import {useState} from 'react'

function Profile(){
    const [loggedIn,setLoggedIn] = useState(3)
    // Not an appropriate way
    // if(loggedIn){
    //    return (
    //     <div>
    //         <h1>Welcome chanchal</h1>
    //     </div>
    //    )
    // }
    // else{
    //    return (
    //     <div>
    //         <h1>Welcome Guest</h1>
    //     </div>
    //    )
    // }
    
    return (
        <div>
            {loggedIn==1?
            <h1>Welcome User 1</h1>
            :loggedIn==2?<h1>Welcome User2</h1>
            :<h1>Welcome User3</h1>}
        </div>
    )
}

export default Profile