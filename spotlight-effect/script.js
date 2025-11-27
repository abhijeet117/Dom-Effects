document.body.addEventListener('mousemove', function(crsr){
    document.documentElement.style.setProperty("--x", crsr.clientX + 'px');
    document.documentElement.style.setProperty("--y", crsr.clientY + 'px');
})