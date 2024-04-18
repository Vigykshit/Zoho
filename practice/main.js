async function download_images(){
    download_images1();
    download_images2();
    download_images3();
}

async function download_images1(){
var filestore = catalyst.file;
var folder = filestore.folderId(3987000000012528);
var file = folder.fileId(3987000000014291);
var downloadPromise = file.getDownloadLink();
downloadPromise
        .then((response) => {
            console.log(response.content);
            let img = document.getElementById("image1")
            img.src="https://console.catalyst.zoho.com"+response.content.download_url;
            img.style.height = '300px';
            img.style.width = '300px';
        })
        .catch((err) => {
            console.log(err);
        });
}

async function download_images2(){
    var filestore = catalyst.file;
    var folder = filestore.folderId(3987000000012528);
    var file = folder.fileId(3987000000014296);
    var downloadPromise = file.getDownloadLink();
    downloadPromise
            .then((response) => {
                console.log(response.content);
                let img = document.getElementById("image2")
                img.src="https://console.catalyst.zoho.com"+response.content.download_url;
                img.style.height = '300px';
                img.style.width = '300px';
            })
            .catch((err) => {
                console.log(err);
            });
    }

    async function download_images3(){
        var filestore = catalyst.file;
        var folder = filestore.folderId(3987000000012528);
        var file = folder.fileId(3987000000014306);
        var downloadPromise = file.getDownloadLink();
        downloadPromise
                .then((response) => {
                    console.log(response.content);
                    let img = document.getElementById("image3")
                    img.src="https://console.catalyst.zoho.com"+response.content.download_url;
                    img.style.height = '300px';
                    img.style.width = '300px';
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        function clicked(a){
            window.type=a;
        }
        function insert_data(){
            var payload = {"Type":window.type, "email":document.getElementById('InputEmail1').value}
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            var raw = JSON.stringify(payload);
            
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
            fetch("/server/order_tracking_function/insert_data", requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
        
        }