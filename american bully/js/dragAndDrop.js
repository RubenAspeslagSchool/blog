function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev, dogNumber) {
    ev.dataTransfer.setData("dognumber", dogNumber);
  }
  
  function drop(ev, dogNumber) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("dognumber");
    console.log(data);
    ev.target.appendChild(document.getElementById("dog" + data));
  }