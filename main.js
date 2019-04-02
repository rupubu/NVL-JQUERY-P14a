  
    $(document).ready( function() {
        var antY, altura;
        antY = 0;
        altura = 0;
        
        // Cuando el ratón pase por encima de la foto, que se cambie su puntero en modo “crosshair”.
        $("img").on({
            "mouseover": function() { $(this).css("cursor", "crosshair");},
            "mousemove": actua});
  
        function actua(e) {
            
        //Por cada 10 píxeles que se mueva el ratón en horizontal sobre la imágen, variar un 0.1 su opacidad.
        //Si es a la derecha ir aumentándola (hasta el máximo de 1). y si es a la izquierda ir disminuyéndola
        //(hasta el mínimo de 0).    

            var valor = (($( this ).position().left + $( this ).width()) - e.pageX) / $( this ).width();
            $( this ).css("opacity", valor);
            //console.log(valor);
           
        //Por otro lado, ir aumentando y disminuyendo la altura de la imágen, cuando mover de forma vertical 
        //el ratón sobre ella. Cada píxel que se mueva hacia arriba ir aumentando en 1 pixel su altura, y cuando
        //se mueva hacia abajo ir disminuyéndola.
            
            if (antY === 0 ) {
                altura = $(this).height();
            }
            else {
                if (antY > e.pageY) {
                    altura = altura + (antY - e.pageY)
                }
                else if (antY < e.pageY) {
                    altura = altura - (e.pageY - antY)
                }
                $(this).height( altura );
            }
            antY = e.pageY;
        }
    });