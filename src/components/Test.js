import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Test = () => {
    /*
    Create a simple Redux-like store.
    The function createStore will return the store. You should be able to:
    - retrieve the state with a function called getState()
    - initial state should consist of one user with id === 1 retrieved from the following API => https://jsonplaceholder.typicode.com/
    - dispatch actions with a function called dispatch()
    - subscribe multiply listeners functions with a function called subscribe()
    */
    // Feel free to modify function declaration if needed

    const url = 'https://jsonplaceholder.typicode.com/users'

    // const initialState = {
    //     // Here instead of null you should
    //     // pass the user with id == 1 from the jsonplaceholder.typicode.com API
    //     user: null
    // };

    const [initialState, setInitialState] = useState({user: null})
    const [loading, setLoading] = useState(false)

    //downloading initial state from api
    useEffect(()=>{
        setLoading(true)
        axios({
            method: 'GET',
            url: url
        }).then(res =>{
            setInitialState({...initialState, user: res.data.filter(x => x.id === 1)})
            setLoading(false)
        })
    }, [])

    console.log(initialState);

    // //reducer
    // function userReducer(state, action) {
    //     switch (action.type) {
    //         case "UPDATE_EMAIL":
    //             return {...state, mail: action.payload}
    //         case "UPDATE_NAME":
    //             return {...state, name: action.payload}
    //         default:
    //             return state
    //     }
    // }

    // function createStore(initialState, reducer) {
    //     userReducer(initialState, )
    // }

    // // Example Usage
    // const store = createStore(initialState, userReducer);
    // // Original user from API should be console logged
    // // Example:
    // //  {user: {
    // //   "id": 1,
    // //   "name": "Leanne Graham",
    // //   "username": "Bret",
    // //   "email": "Sincere@april.biz",
    // //   "address": {
    // //     "street": "Kulas Light",
    // //     "suite": "Apt. 556",
    // //     "city": "Gwenborough",
    // //     "zipcode": "92998-3874",
    // //     "geo": {
    // //       "lat": "-37.3159",
    // //       "lng": "81.1496"
    // //     }
    // //   },
    // //   "phone": "1-770-736-8031 x56442",
    // //   "website": "hildegard.org",
    // //   "company": {
    // //     "name": "Romaguera-Crona",
    // //     "catchPhrase": "Multi-layered client-server neural-net",
    // //     "bs": "harness real-time e-markets"
    // //   }
    // // }}
    
    // console.log(store);
    // console.log(store.getState());

    // // store.dispatch({
    // //     type: "UPDATE_EMAIL",
    // //     payload: { email: "newEmail@test.com" }
    // // });
    // // store.dispatch({
    // //     type: "UPDATE_NAME",
    // //     payload: { name: "Antonio Benderas" }
    // // });

    // // User from API with modified email and name should be console logged
    // // console.log(store.getState());///////////////////////////

    // // Subscribing listeners
    // // store.subscribe((prevState, state) =>
    // //     console.log("Listener 1 Email:", state.user.email)
    // // );
    // // store.subscribe((prevState, state) =>
    // //     console.log("Listener 2 Name:", state.user.name)
    // // );

    // // store.dispatch({
    // //     type: "UPDATE_NAME",
    // //     payload: { name: "Leonardo Di Caprio" }
    // // });

    // // The following data should be console logged:
    // // Listener 1 Email: newEmail@test.com 
    // // Listener 2 Name: Leonardo Di Caprio 


    // // customRedux();

    return (
        <>
            elo
        </>
    )
}

export default Test
