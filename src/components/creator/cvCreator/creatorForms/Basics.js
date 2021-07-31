import React from 'react'

const Basics = ({ postData, setPostData }) => {
    return (
        <>
            <input type="text" placeholder='name' value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
            <input type="text" placeholder='surname' value={postData.surname} onChange={(e) => setPostData({ ...postData, surname: e.target.value })} />
            <input type="date" placeholder='dateOfBirth' value={postData.dateOfBirth} onChange={(e) => setPostData({ ...postData, dateOfBirth: e.target.value })} />
            <input type="text" placeholder='country' value={postData.country} onChange={(e) => setPostData({ ...postData, country: e.target.value })} />
            <input type="text" placeholder='city' value={postData.city} onChange={(e) => setPostData({ ...postData, city: e.target.value })} />
            <input type="number" placeholder='phone' value={postData.phone} onChange={(e) => setPostData({ ...postData, phone: e.target.value })} />
            <input type="email" placeholder='email' value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
            <input type="text" placeholder='post code' value={postData.zipCode} onChange={(e) => setPostData({ ...postData, zipCode: e.target.value })} />
        </>
    )
}

export default Basics
