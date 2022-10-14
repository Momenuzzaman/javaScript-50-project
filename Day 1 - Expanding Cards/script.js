const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click',()=>{
        panelRemoveClass();
        panel.classList.add('active');
    });
});

function panelRemoveClass(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}