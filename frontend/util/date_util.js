export const formatDate = date => {
  let newDate = new Date(date);
  let dateNow = new Date(Date.now())
  //If created in the same year of now
  if (dateNow.getFullYear() === newDate.getFullYear()) {
    return `${newDate.toLocaleString('default', { month: 'short' })} 
          ${newDate.getDate()}`
  } 

  return `${newDate.toLocaleString('default', { month:'short'})} 
          ${newDate.getDate()} ${newDate.getFullYear()}`
          
}

export const calculateDate = date => {
  
}