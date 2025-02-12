var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');

function dropHandler(ev) {
    console.log("Drag Handler: File(s) dropped");
  
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {        
        if (item.kind === "file") {
            const file = item.getAsFile();
            
            console.log(`file[${i}].name = ${file.name}`);
            console.log(ev.target.id);

            if(ev.target.id == 'drop-zone1'){
                var reader = new FileReader();
                reader.onload = (event) => {
                    audio1.src = event.target.result;
                }
                reader.readAsDataURL(file);  
            } else {
                var reader = new FileReader();
                reader.onload = (event) => {
                    audio2.src = event.target.result;
                }
                reader.readAsDataURL(file);  
            }
        } else {
            console.log("Not a file");
        }
      });
    } else {
      console.log("No files found in dataTransfer.items");
    }
}

function dragOverHandler(ev) {
    ev.preventDefault();
}