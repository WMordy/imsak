


var sendVideo = ()=>{
    let video = (document.getElementById("exampleInputEmail1")).value
    fetch("/videos", {
      
    // Adding method type
    method: "POST",
      
    // Adding body or contents to send
    body: JSON.stringify({
        "video" : video
        
    }),
      
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    document.getElementById("exampleInputEmail1").value = ""
}