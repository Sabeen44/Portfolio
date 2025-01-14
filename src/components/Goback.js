import { useNavigate } from 'react-router-dom'

export const Goback =() =>{
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1) }
  
  return(
  <div className='goback-button'>
      
      <button onClick={handleBackClick}>Home</button>
    </div>)}