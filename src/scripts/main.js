AOS.init();

const dataDoEvento = new Date("Oct 28 2024, 21:00:00");
const timeStampDoEvento = dataDoEvento.getTime();


const contaTempo = setInterval(function() {
    let agora = new Date(); 
    console.log(agora);
    const timeStampDeAgora = agora.getTime() 
    console.log(timeStampDeAgora);   

    const distanciaAteEvento = (timeStampDoEvento - timeStampDeAgora);
    

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000* 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diasEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horasEmMs) / minutosEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutosEmMs) / 1000);

    console.log(diasAteEvento);
    console.log(horasAteEvento);
    console.log(minutosAteEvento);
    console.log(segundosAteEvento);

    document.getElementById('contador').innerHTML = `começa em ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (distanciaAteEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = `infelizmente esta esgotado`
    }
}, 1000)

