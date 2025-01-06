import ProfilePic from '../images/profile-pic.JPG'
import React from 'react'


export default function Profile() {
    return (
     <>
<div className="custom-profile">
<img
  className="profile-pic"
  src= {ProfilePic}
  alt="profile"
/>

<div className="greeting">
  <h1>Hello, I'm Sabeen</h1>

  <h4>Web Developer</h4>
</div>
</div>
</>
);

}