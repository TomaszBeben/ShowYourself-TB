// import React, {useState} from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Creator from './Creator'
// import CvPreview from './CvPreview'

// import { useAuth } from '../../../context/AuthContext'
// import { initialState } from './variables'

// const RouteToCreatorAndPreview = () => {
//     const { currentUser } = useAuth()
//     const [postData, setPostData] = useState(initialState(currentUser))
//     return (
//         <Router>
//           <Switch>
//             <Route path='/cvcreator'>
//                 <Creator postData={postData} setPostData={setPostData} currentUser={currentUser} />
//             </Route>
//             <Route path='/cvpreview'>
//                 <CvPreview postData={postData} />
//             </Route>
//           </Switch>
//       </Router>
//     )
// }

// export default RouteToCreatorAndPreview
