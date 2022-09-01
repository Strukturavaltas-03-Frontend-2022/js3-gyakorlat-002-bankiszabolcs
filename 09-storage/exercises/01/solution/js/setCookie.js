//Írj egy `setCookie` nevű függvényt, ami a paraméterként kapott stringet eltárolja egy `token` nevű sütiben, ami 15 perc után lejár!

const setCookie= function(string){
    const expiry = new Date(Date.now()+1000*60*15).toUTCString
    document.cookie=`token=${string}; expires=${expiry}; path=/`
}

export default setCookie;
