const productosAux = [
    {id: 1, titulo: "Behringer HPX 6000", descripcion: "DJs are just like any other professional who relies on their ears for a living; above all else, they need clean, accurate audio reproduction. HPX6000 Professional DJ Headphones deliver on this with massive 50 mm neodymium drivers. That means when you wear these headphones, you not only get loud, clean sound – you also get deep, powerful bass. No matter what kind of music you listen to, you’ll hear everything from the gut-shaking lows to the lip-smacking highs.", precio: 1000, categoria: "A"},
    {id: 2, titulo: "Bandeja Giradiscos PIONEER PLX 500 K", descripcion: "El PLX-500 hereda el dise¤o del plato profesional PLX-1000 y ofrece un sonido anal¢gico, c lido y claro. El plato ideal si quieres comenzar a scratchear con vinilos o si simplemente quieres escuchar tu colecci¢n de vinilos en casa.", precio: 366000, categoria: "B"},
    {id: 3, titulo: "Behringer NOX 303", descripcion: "BEHRINGER NOX Series DJ Mixers are built to connect directly to your computer and take your music straight into the digital realm. In an instant, these mixers allow you to record and play any digital music file with your PC or Mac computer without the need for any special drivers! Plus we’ve included the infinium \"contact-free\" VCA Crossfader, our legendary XENYX mic and premium-grade phono preamps, and beat-syncable FX for years of flawless performance.", precio: 400000, categoria: "C"},
    {id: 4, titulo: "Behringer HPS 5000", descripcion: "Whether you’re mixing a recording, monitoring a bass line – or just sitting back enjoying your favorite MP3, you want headphones that deliver high-definition bass and super-transparent highs across an ultra-wide dynamic range. Our HPS5000 headphones feature high-efficiency cobalt capsules that provide incredible high-resolution performance – at a price that is very kind to every budget!", precio: 4400, categoria: "A"},
    {id: 5, titulo: "Technics RPDJ 1210 S", descripcion: "Professional, closed DJ headphones with 41 mm transducer and excellent efficiency for fast bass impulses. The Technics RP-DJ 1210 has individually foldable and variably lockable ear cups.\r\n"
      + "The headband padding ensures great wearing comfort, and the single-sided cable guide with spiral cable for more freedom of movement.", precio: 1200, categoria: "A"},
    {id: 6, titulo: "Numark M4", descripcion: "M4 is a three-channel tabletop mixer designed for any DJ who needs maximum flexibility. It features a replaceable crossfader with reverse and slope controls, a 1/4” microphone input with EQ, and plenty of routing for phono and line level devices.", precio: 350000, categoria: "C"},
    {id: 7, titulo: "PIONEER XDJ RX2", descripcion: "El XDJ-RX2 es una actualización del popular XDJ-RX, combinado con características y rasgos de la serie insignia NXS2. El sistema todo en uno de 2 canales, ofrece una experiencia profesional como DJ cuando lo conectas a rekordbox a través de tu ordenador portátil o con música almacenada en un dispositivo USB.", precio: 1250000, categoria: "D"},
    {id: 8, titulo: "PIONEER XDJ 1000 MK2", descripcion: "Basado en su predecesor, el XDJ-1000MK2 mejora la usabilidad con la navegación a través de la pista mejorada y soporte para archivos de audio de alta resolución FLAC y ALAC. Hereda el gran jog wheel y la pantalla táctil a todo color de 7 pulgadas del CDJ-2000NXS2, también características como 8 Hot Cues y Quantize. Descarga el software de gestión de música rekordbox™ o la app rekordbox para preparar tus sesiones.", precio: 900000, categoria: "D"},
    {id: 9, titulo: "Bandeja Giradiscos PIONEER PLX 1000 K", descripcion: "Control diseñado para un facil uso: Sobre la base de la experiencia acumulada durante muchos años como destacado fabricante internacional de equipos para DJ, Pioneer ha llevado a cabo una investigación en profundidad sobre las necesidades de los usuarios de giradiscos con el fin de elaborar un diseño con un control facil de usar. Esto posibilita el disfrute de forma intuitiva durante las sesiones DJ, sin perder nunca su objetivo. Sistema de tracción directa de alta torsión.", precio: 583000, categoria: "B"},
    {id: 10, titulo: "Behringer NOX 404", descripcion: "Premium 2-Channel DJ Mixer with INFINIUM 'Contact-Free' VCA Crossfader, Beat-Syncable FX and USB Audio Interface", precio: 300000, categoria: "C"}
  ]

//simula promesa que devuelve productos desde el server
const productsPromise = (category) => {
    return new Promise(function (resolve, reject) {
        const funciona = true;
        const products = productosAux.filter((value) => { 
            if(category){
                console.log(category)
                return value.categoria.toLowerCase() === category.toLowerCase()
            }
            else { return productosAux }                
        } );
      
        setTimeout(()=>{
            if(funciona){
                resolve(products);
            }else{
                reject("Ocurrio un error al resolver los productos");
            }
        }, 2000);
    });
};

//simula promesa que devuelve un producto por ID desde el server 
const productPromise = (id) => {

    return new Promise(function (resolve, reject) {
        const funciona = true;
        const product = productosAux.find((value, index) => { 
            return value.id == id
        } );

        setTimeout(()=>{
            if(funciona && product){
                resolve(product);
            } else {
                reject("Ocurrio un error al resolver el producto");
            }
        }, 1000);
    });
};

export const getProducts = async (category) => {
    //Simulo llamado a recurso externo (ep, API, db)
    const response = await productsPromise(category)
    const data = await response

    return data
}

export const getProduct = async (id) => {
    //Simulo llamado a recurso externo (ep, API, db)
    const response = await productPromise(id)
    const data = await response

    return data
}

