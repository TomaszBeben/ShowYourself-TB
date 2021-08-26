// import React, { useState } from 'react'
// import { Button, TextField } from '@material-ui/core'
// import useStyles from '../styles'

// const Skills = ({ skills, setSkills, postData, setPostData }) => {
//     const [singleSkill, setSingleSkill] = useState({})
//     const classes = useStyles()

//     const delSkill = (index) => {
//         const copy = [...skills]
//         copy.splice(index, 1)
//         setSkills(copy)
//     }

//     const addSkill = () => {
//         setSkills(skills => [...skills, singleSkill])
//         setPostData({ ...postData, skills: skills })
//         setSingleSkill({...singleSkill, skill:''})
//     }
//     const render = skills.map((elem, index) =>
//         <div >
//             <p key={index} style={{ textDecoration: 'none' }}>{elem.skill}</p>
//             <Button
//                 className={`.buttonDenied ${classes.buttonSubmit}`}
//                 variant="contained" size="large" type='button'
//                 onClick={() => { delSkill(skills, index) }}>
//                 X
//             </Button>
//         </div>
//     )
//     console.log(skills);

//     return (
//         <>
//             <div className='skills'>
//                 <TextField type="text" label='skill' value={singleSkill.skill} onChange={(e) => setSingleSkill({...singleSkill, skill:e.target.value })} />
//                 <Button
//                     className={`buttonAccept ${classes.buttonSubmit}`}
//                     variant="contained" size="large" type='button'
//                     onClick={addSkill}>dodaj</Button>
//                 <div>
//                     {render}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Skills

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import { TextField, Typography } from '@material-ui/core'

// const Education = ({ postData, setPostData }) => {

//     return (
//         <>
//             <Typography>Education</Typography>
//             <TextField fullWidth type="text" label='degree'
//                 value={postData.education.first.degree}
//                 onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, degree: e.target.first } } })} />
//             <TextField fullWidth type="text" label='school'
//                 value={postData.education.first.school}
//                 onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, school: e.target.value } } })} />
//             <TextField fullWidth type="text" label='city'
//                 value={postData.education.first.city}
//                 onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, city: e.target.value } } })} />
//             <TextField fullWidth type="date" label='start' InputLabelProps={{ shrink: true }}
//                 value={postData.education.first.start}
//                 onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, start: e.target.value } } })} />
//             <TextField fullWidth type="date" label='end' InputLabelProps={{ shrink: true }}
//                 value={postData.education.first.end}
//                 onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, end: e.target.value } } })} />
//             <TextField fullWidth type="text" label='description'
//                 value={postData.education.first.description}
//                 onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, description: e.target.value } } })} />
//         </>
//     )
// }

// export default Education

////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import { TextField, Typography } from '@material-ui/core'

// const WorkExperience = ({ postData, setPostData }) => {
//     return (
//         <>
//             <Typography>Work Experience</Typography>
//             <TextField fullWidth type="text" label='position'
//                 value={postData.experience.first.position}
//                 onChange={(e) => setPostData({ ...postData, experience: { ...postData.experience, first: { ...postData.experience.first, position: e.target.value } } })} />

//             <TextField fullWidth type="text" label='company'
//                 value={postData.experience.first.company}
//                 onChange={(e) => setPostData({ ...postData, experience: { ...postData.experience, first: { ...postData.experience.first, company: e.target.value } } })} />

//             <TextField fullWidth type="text" label='location'
//                 value={postData.experience.first.location}
//                 onChange={(e) => setPostData({ ...postData, experience: { ...postData.experience, first: { ...postData.experience.first, location: e.target.value } } })} />

//             <TextField fullWidth type="date" label='start' InputLabelProps={{shrink: true}}
//                 value={postData.experience.first.start}
//                 onChange={(e) => setPostData({ ...postData, experience: { ...postData.experience, first: { ...postData.experience.first, start: e.target.value } } })} />

//             <TextField fullWidth type="date" label='end' InputLabelProps={{shrink: true}}
//                 value={postData.experience.first.end}
//                 onChange={(e) => setPostData({ ...postData, experience: { ...postData.experience, first: { ...postData.experience.first, end: e.target.value } } })} />

//             <TextField fullWidth type="text" label='descrition'
//                 value={postData.experience.first.descrition}
//                 onChange={(e) => setPostData({ ...postData, experience: { ...postData.experience, first: { ...postData.experience.first, descrition: e.target.value } } })} />
//         </>
//     )
// }

// export default WorkExperience

