var divBlocks = ['div1', 'div2', 'div3', 'div4'], n = 0, limit = 3;

var interval = setInterval(blockDisplay, 10000);

function blockDisplay() {
  if (n > 2) {
    for (var i = 0; i < divBlocks.length; i++) {
      document.getElementById(divBlocks[i]).style.display = 'none';
    }
    document.getElementById(divBlocks[3]).style.display = '';
    clearInterval(interval);
  } else {
    for (var i = 0; i < divBlocks.length; i++) {
      document.getElementById(divBlocks[i]).style.display = 'none';
    }
    document.getElementById(divBlocks[n]).style.display = '';
    n += 1;
  }
}