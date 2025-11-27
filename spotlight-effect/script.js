document.querySelector('body').addEventListener('mousemove', function(crsr){
    document.body.style.setProperty("--x", crsr.clientX + 'px');
    document.body.style.setProperty("--y", crsr.clientY + 'px');
})