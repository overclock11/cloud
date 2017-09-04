

module.exports = {
    run : function(){
        console.log('Tareas de convertir video a MP4');
		Ffmpeger.convertVideoWhitFfmpeg('/videos/origin/nowwmbre1.mov', '/videos/render/video001.mp4');  // <= Here we using
    }
};