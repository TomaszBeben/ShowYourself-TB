import React from 'react'

const Education = ({postData, setPostData}) => {
    return (
        <>
            <input type="text" placeholder='degree' value={postData.education.first.degree} onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, degree: e.target.value } } })} />
                <input type="text" placeholder='school' value={postData.education.first.school} onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, school: e.target.value } } })} />
                <input type="text" placeholder='city' value={postData.education.first.city} onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, city: e.target.value } } })} />
                <input type="date" placeholder='start' value={postData.education.first.start} onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, start: e.target.value } } })} />
                <input type="date" placeholder='end' value={postData.education.first.end} onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, end: e.target.value } } })} />
                <input type="text" placeholder='description' value={postData.education.first.description} onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, description: e.target.value } } })} />
        </>
    )
}

export default Education
