var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');

function dropHandler(ev) {
    console.log("Drag Handler: File(s) dropped");
  
    ev.preventDefault();
   var data = ev.dataTransfer.getData("file");
   console.log(data.path);

    if (ev.dataTransfer.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {        
        console.log(item.kind);
        if (item.kind === "file") {
            const file = item.getAsFile();
            
          console.log(… file[${i}].name = ${file.name});
          console.log(ev.target.id);

          if(ev.target.id == 'drop-zone1'){
                var reader = new FileReader();
                reader.onload = (event) => {
                audio1.src = event.target.result;
            }
            reader.readAsDataURL(file);  
          }else{
                var reader = new FileReader();
                reader.onload = (event) => {
                audio2.src = event.target.result;
            }
            reader.readAsDataURL(file);  
          }
        } else console.log("Not a file");
      });
    } else {
        console.log("Is a file");
        
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(file path = ${file.path});
        console.log(… file[${i}].name = ${file.name});
      });
    }
  }

  function dragOverHandler(ev) {
      ev.preventDefault();
  }

  function dragStart(ev) {
    ev.dataTransfer.setData("file", ev.target.id);
  }