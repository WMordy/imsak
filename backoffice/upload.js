


var sendVideo = ()=>{
    let video = (document.getElementById("exampleInputEmail1")).value
    console.log(video)
    fetch("/video", {
      
    // Adding method type
    method: "POST",
      
    // Adding body or contents to send
    body: JSON.stringify({
        "video" : video
        
    }),
      
    // Adding headers to the request
    headers: {
        "Content-type": "application/json"
    }
})
    document.getElementById("exampleInputEmail1").value = ""
}