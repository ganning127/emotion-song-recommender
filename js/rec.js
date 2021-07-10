let submitButton = document.getElementById('submit-button');
let fileInput = document.getElementById("file-upload");

$('#file-upload').on('change', function() {
    let fileName = $(this).val().split('\\').pop();
    $(this).next('#fileName').addClass("selected").html(fileName);
  });



function getSong(event) {
    event.preventDefault();;
    const file = fileInput.files[0];
    var songForm = document.getElementById("songForm") 
    var payload = new FormData(songForm);
    payload.append("file", file)

    const options = {
        method: "POST",
        body: payload,
    }

    fetch("https://emotionreader.azurewebsites.net/api/emotionReader?code=Fg2VdkVVKGd8J5aj4P8RhkI1Myab7mSQa69ausJD90Qph9rtqxLoSA==", options)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
}
