var file = require('file.js'); // file I/O
var gui = require('nw.gui'); // menus

function clickInput(id){
  var event = document.createEvent('MouseEvents');
  event.initMouseEvent('click');
  document.getElementById(id).dispatchEvent(event);
}

document.addEventListener('keyup', function (e){
  if (e.keyCode == 'O'.charCodeAt(0) && e.ctrlKey){
    clickInput('open');
  }else if (e.keyCode == 'S'.charCodeAt(0) && e.ctrlKey){
    clickInput('save');
  }
});

document.getElementById('open').addEventListener('change', function (e){
  file.open(this.value, document);
});

document.getElementById('save').addEventListener('change', function (e){
  file.save(this.value, document);
});

// menu code
var menu = new gui.Menu({ type: 'menubar' });

menu.append(new gui.MenuItem({
  label: 'File',
  submenu: new gui.Menu()
}));

menu.items[0].submenu.append(new gui.MenuItem({
  label: 'New',
  click: function () {
    gui.Window.open('index.html'); // open new window
  }
}));
menu.items[0].submenu.append(new gui.MenuItem({
  type: 'separator'
}));
menu.items[0].submenu.append(new gui.MenuItem({
  label: 'Close',
  click: function () {
    gui.Window.get().close();
  }
}));

gui.Window.get().menu = menu; // attach menu to window