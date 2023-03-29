// gestion du scroll du menu
export default function scroll(){
    const header = document.getElementById("site-header");
    header.classList.add('visible');
    let cur, prev;
    let direction = 'down';
    // console.log(header);
    window.onscroll = function (e) {  
        prev = cur;
        cur = window.pageYOffset;
        if(prev < cur){
            direction = 'down';
            header.classList.add('hidden');
            header.classList.remove('visible');
        } else {
            direction = 'up';
            header.classList.add('visible');
            header.classList.remove('hidden');
        }
        console.log(direction);
    }
}
