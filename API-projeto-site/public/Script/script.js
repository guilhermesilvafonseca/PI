function pesquisar(){
    
    var resposta = (pesquisa.value).toLowerCase();

    if(resposta  == 'rock'){

        esti_trap.style.display = `none`;
        esti_rap.style.display = `none`;
        esti_sertanejo.style.display = `none`;
        esti_pagode.style.display = `none`;
        esti_romantica.style.display = `none`;
        esti_geek.style.display = `none`;
        esti_funk.style.display = `none`;
        esti_samba.style.display = `none`;
        
        esti_rock.style.display = `block`;
    
    } else if(resposta == 'trap'){

        esti_rock.style.display = `none`;
        esti_rap.style.display = `none`;
        esti_sertanejo.style.display = `none`;
        esti_pagode.style.display = `none`;
        esti_romantica.style.display = `none`;
        esti_geek.style.display = `none`;
        esti_funk.style.display = `none`;
        esti_samba.style.display = `none`;
        
        esti_trap.style.display = `block`;

    }  else if (resposta == 'sertanejo') {

        esti_rock.style.display = `none`;
        esti_rap.style.display = `none`;
        esti_pagode.style.display = `none`;
        esti_romantica.style.display = `none`;
        esti_geek.style.display = `none`;
        esti_funk.style.display = `none`;
        esti_samba.style.display = `none`;
        esti_trap.style.display = `none`;
        
        esti_sertanejo.style.display = `block`;

    } else if (resposta == 'rap') {

        esti_rock.style.display = `none`;
        esti_sertanejo.style.display = `none`;
        esti_pagode.style.display = `none`;
        esti_romantica.style.display = `none`;
        esti_geek.style.display = `none`;
        esti_funk.style.display = `none`;
        esti_samba.style.display = `none`;
        esti_trap.style.display = `none`;
        
        esti_rap.style.display = `block`;

    } else if (resposta == 'pagode') {

        esti_rock.style.display = `none`;
        esti_rap.style.display = `none`;
        esti_sertanejo.style.display = `none`;
        esti_romantica.style.display = `none`;
        esti_geek.style.display = `none`;
        esti_funk.style.display = `none`;
        esti_samba.style.display = `none`;
        esti_trap.style.display = `none`;
        
        esti_pagode.style.display = `block`;

    } else if (resposta == 'romantica') {

        esti_rock.style.display = `none`;
        esti_rap.style.display = `none`;
        esti_sertanejo.style.display = `none`;
        esti_pagode.style.display = `none`;
        esti_geek.style.display = `none`;
        esti_funk.style.display = `none`;
        esti_samba.style.display = `none`;
        esti_trap.style.display = `none`;
        
        esti_romantica.style.display = `block`;

    } else if (resposta == 'geek') {

        esti_rock.style.display = `none`;
        esti_rap.style.display = `none`;
        esti_sertanejo.style.display = `none`;
        esti_pagode.style.display = `none`;
        esti_romantica.style.display = `none`;
        esti_funk.style.display = `none`;
        esti_samba.style.display = `none`;
        esti_trap.style.display = `none`;
        
        esti_geek.style.display = `block`;
        
    } else if (resposta == 'funk') {

        esti_rock.style.display = `none`;
        esti_rap.style.display = `none`;
        esti_sertanejo.style.display = `none`;
        esti_pagode.style.display = `none`;
        esti_romantica.style.display = `none`;
        esti_geek.style.display = `none`;
        esti_samba.style.display = `none`;
        esti_trap.style.display = `none`;
        
        esti_funk.style.display = `block`;

    } else if (resposta == 'samba') {

        esti_rock.style.display = `none`;
        esti_trap.style.display = `none`;
        esti_rap.style.display = `none`;
        esti_sertanejo.style.display = `none`;
        esti_pagode.style.display = `none`;
        esti_romantica.style.display = `none`;
        esti_geek.style.display = `none`;
        esti_funk.style.display = `none`;
        
        esti_samba.style.display = `block`;

    }


    
        
    else{
        alert('Sinto muito, nao temos Recomendações desse estilo');
    }


}

