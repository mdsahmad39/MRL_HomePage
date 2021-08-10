var divBlocks = ['div1', 'div2', 'div3'], n = 0, limit = 3;

var interval = setInterval(blockDisplay, 15000);

function blockDisplay() {
  if (n > 2) {
    for (var i = 0; i < divBlocks.length; i++) {
      document.getElementById(divBlocks[i]).style.display = 'none';
    }
    document.getElementById(divBlocks[1]).style.display = '';
    clearInterval(interval);
  } else {
    for (var i = 0; i < divBlocks.length; i++) {
      document.getElementById(divBlocks[i]).style.display = 'none';
    }
    document.getElementById(divBlocks[n]).style.display = '';
    console.log(1);
    n += 1;
  }
}