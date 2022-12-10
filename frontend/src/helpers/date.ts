const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
let date = new Date();
let day = date.getDate();
let month = date.getMonth();

export default {
    day,
    month: months[month]
}
