
function bannerObject(){
this.msg = MESSAGE
this.out = " "
this.pos = POSITION
this.delay = DELAY
this.i = 0
this.reset = clearMessage
}

function clearMessage()
{this.pos = POSITION;}

var POSITION = 90;
var DELAY = 200;
var MESSAGE = "RMI Project!MESSAGE: 1. XXXX 2. XXXXX";

var scroll = new bannerObject();

function scroller(){
scroll.out += " ";
if(scroll.pos>0)
    for (scroll.i = 0; scroll.i < scroll.pos; scroll.i++) 
        { scroll.out +=" " ; }
if(scroll.pos>= 0)
    scroll.out += scroll.msg
else
    scroll.out = scroll.msg.substring(-scroll.pos,scroll.msg.length);

document.noticeForm.notice.value = scroll.out;
scroll.out = " ";
scroll.pos--;
scroll.pos--;

if (scroll.pos < -(scroll.msg.length)) 
{ scroll.reset(); }

setTimeout('scroller()',scroll.delay);}