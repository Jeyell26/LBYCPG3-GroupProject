const link = document.createElement('link');
link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';
link.rel = 'stylesheet';
link.integrity = 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65';
link.crossOrigin = "anonymous";

const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
script.integrity= "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4";
script.crossOrigin="anonymous";


document.getElementsByTagName('head')[0].appendChild(link)
document.getElementsByTagName('head')[0].appendChild(script)