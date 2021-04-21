
//initialize the return day of the form with tomorrow's day
export const tomorrowDay=()=>{
    const today = new Date()
    const tomorrow = new Date(today)
    return tomorrow.setDate(tomorrow.getDate() + 1)
}