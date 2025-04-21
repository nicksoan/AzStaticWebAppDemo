document.getElementById('ping').onclick = async () => {
    console.log('Ping button clicked');
    //const res = await fetch('/api/hello');
    const res = await fetch('http://localhost:7123/api/hello');
    const text = await res.text();
    document.getElementById('out').textContent = text;
};