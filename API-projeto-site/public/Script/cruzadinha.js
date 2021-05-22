function confirmar(){
    // variavel resposta pega o valor do input  
    // e o .tolowercase é pra idependente de letra maiuscula ou minuscula ele vai reconhecer 
    var resposta = (questao.value).toLowerCase();

    // esse if é para confirmar a resposta 
    // entao nesse caso se ela for cpu as letra aparecem nas divs correspondentes

    if(resposta  == 'banco'){

        banco_b.innerHTML = 'B';
        banco_a.innerHTML = 'A';
        banco_n.innerHTML = 'N';
        banco_c.innerHTML = 'C';
        banco_o.innerHTML = 'O';
 

    // aqui é quando passa para a prox pergunta, 
    // entao se a confirmaçao estiver correta a questao 1 some e a 2 aparece
        questao1.style.display = `none`;
        questao2.style.display = `block`;

    // aqui é onde esta configulado a indicaçao de onde esta a resposta da questao
    // #0eff00 = cor Verde indicando que a questao esta certa
        byob_b.style.backgroundColor = '#0074ff';
        byob_y.style.backgroundColor = '#0074ff';
        byob_o.style.backgroundColor = '#0074ff'; 

        banco_b.style.backgroundColor = '#0eff00';
        banco_a.style.backgroundColor = '#0eff00';
        banco_n.style.backgroundColor = '#0eff00'; 
        banco_c.style.backgroundColor = '#0eff00'; 
        banco_o.style.backgroundColor = '#0eff00'; 
        
    } else{
        alert('resposta incorreta');

    // #ff0000 = cor vermelha mostrando que a resposta esta errada

         banco_b.style.backgroundColor = '#ff0000';
         banco_a.style.backgroundColor = '#ff0000';
         banco_n.style.backgroundColor = '#ff0000'; 
         banco_c.style.backgroundColor = '#ff0000'; 
         banco_o.style.backgroundColor = '#ff0000'; 
    }


}

    // a partir daqui seria repetiçao da funcition a cima com as outras palavras

function confirmar2() {
    var resposta2 = (inp_questao2.value).toLowerCase();


    if (resposta2 == 'byob') {

        byob_b.innerHTML = 'B';
        byob_y.innerHTML = 'Y';
        byob_o.innerHTML = 'O';

        questao2.style.display = `none`;
        questao3.style.display = `block`;

        durou_t.style.backgroundColor = '#0074ff'; 
        durou_e.style.backgroundColor = '#0074ff'; 
        durou_q.style.backgroundColor = '#0074ff'; 
        durou_u2.style.backgroundColor = '#0074ff'; 
        durou_e1.style.backgroundColor = '#0074ff'; 
        durou_d.style.backgroundColor = '#0074ff'; 
        durou_u1.style.backgroundColor = '#0074ff'; 
        durou_r.style.backgroundColor = '#0074ff'; 
        durou_o.style.backgroundColor = '#0074ff'; 
        durou_u.style.backgroundColor = '#0074ff'; 

        byob_b.style.backgroundColor = '#0eff00';
        byob_y.style.backgroundColor = '#0eff00';
        byob_o.style.backgroundColor = '#0eff00'; 
       

    } else {
        alert('resposta incorreta');
        byob_b.style.backgroundColor = '#ff0000';
        byob_y.style.backgroundColor = '#ff0000';
        byob_o.style.backgroundColor = '#ff0000'; 
        
    }
}

function confirmar3() {
    var resposta2 = (inp_questao3.value).toLowerCase();
    if (resposta2 == 'ate que durou') {

        durou_t.innerHTML = 'T';
        durou_e.innerHTML = 'E';
        durou_q.innerHTML = 'Q';
        durou_u2.innerHTML = 'U';
        durou_e1.innerHTML = 'E';
        durou_d.innerHTML = 'D';
        durou_u1.innerHTML = 'U';
        durou_r.innerHTML = 'R';
        durou_o.innerHTML = 'O';
        durou_u.innerHTML = 'U';

        questao3.style.display = `none`;
        questao4.style.display = `block`;

        desligar_e.style.backgroundColor = '#0074ff'; 
        desligar_s.style.backgroundColor = '#0074ff'; 
        desligar_l.style.backgroundColor = '#0074ff'; 
        desligar_i.style.backgroundColor = '#0074ff'; 
        desligar_g.style.backgroundColor = '#0074ff'; 
        desligar_a.style.backgroundColor = '#0074ff'; 
        desligar_e1.style.backgroundColor = '#0074ff'; 
        desligar_v.style.backgroundColor = '#0074ff'; 
        desligar_e2.style.backgroundColor = '#0074ff'; 
        desligar_m.style.backgroundColor = '#0074ff'; 
        
        
        durou_t.style.backgroundColor = '#0eff00'; 
        durou_e.style.backgroundColor = '#0eff00'; 
        durou_q.style.backgroundColor = '#0eff00'; 
        durou_u2.style.backgroundColor = '#0eff00'; 
        durou_e1.style.backgroundColor = '#0eff00'; 
        durou_d.style.backgroundColor = '#0eff00'; 
        durou_u1.style.backgroundColor = '#0eff00'; 
        durou_r.style.backgroundColor = '#0eff00'; 
        durou_o.style.backgroundColor = '#0eff00'; 
        durou_u.style.backgroundColor = '#0eff00'; 
        

    } else {
        alert('resposta incorreta');
        durou_t.style.backgroundColor = '#ff0000'; 
        durou_e.style.backgroundColor = '#ff0000'; 
        durou_q.style.backgroundColor = '#ff0000'; 
        durou_u2.style.backgroundColor = '#ff0000'; 
        durou_e1.style.backgroundColor = '#ff0000'; 
        durou_d.style.backgroundColor = '#ff0000'; 
        durou_u1.style.backgroundColor = '#ff0000'; 
        durou_r.style.backgroundColor = '#ff0000'; 
        durou_o.style.backgroundColor = '#ff0000'; 
        durou_u.style.backgroundColor = '#ff0000'; 
    }
}

function confirmar4() {
    var resposta2 = (inp_questao4.value).toLowerCase();
    if (resposta2 == 'desliga e vem') {

        desligar_e.innerHTML = 'E';
        desligar_s.innerHTML = 'S';
        desligar_l.innerHTML = 'L';
        desligar_i.innerHTML = 'I';
        desligar_g.innerHTML = 'G';
        desligar_a.innerHTML = 'A';
        desligar_e1.innerHTML = 'E';
        desligar_v.innerHTML = 'V';
        desligar_e2.innerHTML = 'E';
        desligar_m.innerHTML = 'M';
        
        questao4.style.display = `none`;
        questao5.style.display = `block`;

        desligar_e.style.backgroundColor = '#0eff00'; 
        desligar_s.style.backgroundColor = '#0eff00'; 
        desligar_l.style.backgroundColor = '#0eff00'; 
        desligar_i.style.backgroundColor = '#0eff00'; 
        desligar_g.style.backgroundColor = '#0eff00'; 
        desligar_a.style.backgroundColor = '#0eff00'; 
        desligar_e1.style.backgroundColor = '#0eff00'; 
        desligar_v.style.backgroundColor = '#0eff00'; 
        desligar_e2.style.backgroundColor = '#0eff00'; 
        desligar_m.style.backgroundColor = '#0eff00'; 

        ilusao_i.style.backgroundColor = '#0074ff'; 
        ilusao_l.style.backgroundColor = '#0074ff'; 
        ilusao_u.style.backgroundColor = '#0074ff'; 
        ilusao_a.style.backgroundColor = '#0074ff'; 
        ilusao_o.style.backgroundColor = '#0074ff'; 
        

    } else {
        alert('resposta incorreta');
        desligar_e.style.backgroundColor = '#ff0000'; 
        desligar_s.style.backgroundColor = '#ff0000'; 
        desligar_l.style.backgroundColor = '#ff0000'; 
        desligar_i.style.backgroundColor = '#ff0000'; 
        desligar_g.style.backgroundColor = '#ff0000'; 
        desligar_a.style.backgroundColor = '#ff0000'; 
        desligar_e1.style.backgroundColor = '#ff0000'; 
        desligar_v.style.backgroundColor = '#ff0000'; 
        desligar_e2.style.backgroundColor = '#ff0000'; 
        desligar_m.style.backgroundColor = '#ff0000';
        
    }
}

function confirmar5() {
    var resposta2 = (inp_questao5.value).toLowerCase();
    if (resposta2 == 'ilusao') {

        ilusao_i.innerHTML = 'I';
        ilusao_l.innerHTML = 'L';
        ilusao_u.innerHTML = 'U';
        ilusao_a.innerHTML = 'A';
        ilusao_o.innerHTML = 'O';
        
        
        questao5.style.display = `none`;
        questao6.style.display = `block`;

        ilusao_i.style.backgroundColor = '#0eff00'; 
        ilusao_l.style.backgroundColor = '#0eff00'; 
        ilusao_u.style.backgroundColor = '#0eff00'; 
        ilusao_a.style.backgroundColor = '#0eff00'; 
        ilusao_o.style.backgroundColor = '#0eff00'; 
        

        animals_n.style.backgroundColor = '#0074ff'; 
        animals_i.style.backgroundColor = '#0074ff'; 
        animals_m.style.backgroundColor = '#0074ff'; 
        animals_a.style.backgroundColor = '#0074ff'; 
        animals_l.style.backgroundColor = '#0074ff'; 
        animals_s.style.backgroundColor = '#0074ff'; 

    } else {
        alert('resposta incorreta');
        ilusao_i.style.backgroundColor = '#ff0000'; 
        ilusao_l.style.backgroundColor = '#ff0000'; 
        ilusao_u.style.backgroundColor = '#ff0000'; 
        ilusao_a.style.backgroundColor = '#ff0000'; 
        ilusao_o.style.backgroundColor = '#ff0000'; 
       
    }
}

function confirmar6() {
    var resposta2 = (inp_questao6.value).toLowerCase();
    if (resposta2 == 'animals') {

        animals_n.innerHTML = 'N';
        animals_i.innerHTML = 'I';
        animals_m.innerHTML = 'M';
        animals_a.innerHTML = 'A';
        animals_l.innerHTML = 'L';
        animals_s.innerHTML = 'S';
        
        questao6.style.display = `none`;
        questao7.style.display = `block`;

        animals_n.style.backgroundColor = '#0eff00'; 
        animals_i.style.backgroundColor = '#0eff00'; 
        animals_m.style.backgroundColor = '#0eff00'; 
        animals_a.style.backgroundColor = '#0eff00'; 
        animals_l.style.backgroundColor = '#0eff00'; 
        animals_s.style.backgroundColor = '#0eff00'; 
        

        manha_a.style.backgroundColor = '#0074ff'; 
        manha_n.style.backgroundColor = '#0074ff'; 
        manha_h.style.backgroundColor = '#0074ff'; 
        manha_a1.style.backgroundColor = '#0074ff'; 

    } else {
        alert('resposta incorreta');
        animals_n.style.backgroundColor = '#ff0000'; 
        animals_i.style.backgroundColor = '#ff0000'; 
        animals_m.style.backgroundColor = '#ff0000'; 
        animals_a.style.backgroundColor = '#ff0000'; 
        animals_l.style.backgroundColor = '#ff0000'; 
        animals_s.style.backgroundColor = '#ff0000'; 
    }
}

function confirmar7() {
    var resposta2 = (inp_questao7.value).toLowerCase();
    if (resposta2 == 'manha') {

        manha_a.innerHTML = 'A';
        manha_n.innerHTML = 'N';
        manha_h.innerHTML = 'H';
        manha_a1.innerHTML = 'A';
        
        questao7.style.display = `none`;
        questao8.style.display = `block`;

        manha_a.style.backgroundColor = '#0eff00'; 
        manha_n.style.backgroundColor = '#0eff00'; 
        manha_h.style.backgroundColor = '#0eff00'; 
        manha_a1.style.backgroundColor = '#0eff00'; 

        sugar_s.style.backgroundColor = '#0074ff'; 
        sugar_u.style.backgroundColor = '#0074ff'; 
        sugar_g.style.backgroundColor = '#0074ff'; 
        sugar_r.style.backgroundColor = '#0074ff'; 
       

    } else {
        alert('resposta incorreta');
        manha_a.style.backgroundColor = '#ff0000'; 
        manha_n.style.backgroundColor = '#ff0000'; 
        manha_h.style.backgroundColor = '#ff0000'; 
        manha_a1.style.backgroundColor = '#ff0000'; 
    }
}

function confirmar8() {
    var resposta2 = (inp_questao8.value).toLowerCase();
    if (resposta2 == 'sugar') {

        sugar_s.innerHTML = 'S';
        sugar_u.innerHTML = 'U';
        sugar_g.innerHTML = 'G';
        sugar_r.innerHTML = 'R';
       
        
        questao8.style.display = `none`;
        questao9.style.display = `block`;

        sugar_s.style.backgroundColor = '#0eff00'; 
        sugar_u.style.backgroundColor = '#0eff00'; 
        sugar_g.style.backgroundColor = '#0eff00'; 
        sugar_r.style.backgroundColor = '#0eff00'; 
        

        relaxa_r.style.backgroundColor = '#0074ff'; 
        relaxa_e.style.backgroundColor = '#0074ff'; 
        relaxa_l.style.backgroundColor = '#0074ff'; 
        relaxa_a.style.backgroundColor = '#0074ff'; 
        relaxa_x.style.backgroundColor = '#0074ff'; 

    } else {
        alert('resposta incorreta');
        sugar_s.style.backgroundColor = '#ff0000'; 
        sugar_u.style.backgroundColor = '#ff0000'; 
        sugar_g.style.backgroundColor = '#ff0000'; 
        sugar_r.style.backgroundColor = '#ff0000'; 
        
    }
}

function confirmar9() {
    var resposta2 = (inp_questao9.value).toLowerCase();
    if (resposta2 == 'relaxa') {

        relaxa_r.innerHTML = 'R';
        relaxa_e.innerHTML = 'E';
        relaxa_l.innerHTML = 'L';
        relaxa_a.innerHTML = 'A';
        relaxa_x.innerHTML = 'X';

        questao9.style.display = `none`;
        questao10.style.display = `block`;

        relaxa_r.style.backgroundColor = '#0eff00'; 
        relaxa_e.style.backgroundColor = '#0eff00'; 
        relaxa_l.style.backgroundColor = '#0eff00'; 
        relaxa_a.style.backgroundColor = '#0eff00'; 
        relaxa_x.style.backgroundColor = '#0eff00'; 

        despacito_d.style.backgroundColor = '#0074ff'; 
        despacito_s.style.backgroundColor = '#0074ff'; 
        despacito_p.style.backgroundColor = '#0074ff'; 
        despacito_a.style.backgroundColor = '#0074ff'; 
        despacito_c.style.backgroundColor = '#0074ff'; 
        despacito_i.style.backgroundColor = '#0074ff'; 
        despacito_t.style.backgroundColor = '#0074ff'; 
        despacito_o.style.backgroundColor = '#0074ff'; 

    } else {
        alert('resposta incorreta');
        relaxa_r.style.backgroundColor = '#ff0000';
        relaxa_e.style.backgroundColor = '#ff0000';
        relaxa_l.style.backgroundColor = '#ff0000';
        relaxa_a.style.backgroundColor = '#ff0000';
        relaxa_x.style.backgroundColor = '#ff0000';
    }
}

function confirmar10() {
    var resposta2 = (inp_questao10.value).toLowerCase();
    if (resposta2 == 'despacito') {

        despacito_d.innerHTML = 'D';
        despacito_s.innerHTML = 'S';
        despacito_p.innerHTML = 'P';
        despacito_a.innerHTML = 'A';
        despacito_c.innerHTML = 'C';
        despacito_i.innerHTML = 'I';
        despacito_t.innerHTML = 'T';
        despacito_o.innerHTML = 'O';

        questao10.style.display = `none`;
        questao11.style.display = `block`;

        despacito_d.style.backgroundColor = '#0eff00'; 
        despacito_s.style.backgroundColor = '#0eff00'; 
        despacito_p.style.backgroundColor = '#0eff00'; 
        despacito_a.style.backgroundColor = '#0eff00'; 
        despacito_c.style.backgroundColor = '#0eff00'; 
        despacito_i.style.backgroundColor = '#0eff00'; 
        despacito_t.style.backgroundColor = '#0eff00'; 
        despacito_o.style.backgroundColor = '#0eff00'; 

        happy_h.style.backgroundColor = '#0074ff'; 
        happy_p.style.backgroundColor = '#0074ff'; 
        happy_p1.style.backgroundColor = '#0074ff'; 
        happy_y.style.backgroundColor = '#0074ff'; 

    } else {
        alert('resposta incorreta');
        despacito_d.style.backgroundColor = '#ff0000'; 
        despacito_s.style.backgroundColor = '#ff0000'; 
        despacito_p.style.backgroundColor = '#ff0000'; 
        despacito_a.style.backgroundColor = '#ff0000'; 
        despacito_c.style.backgroundColor = '#ff0000'; 
        despacito_i.style.backgroundColor = '#ff0000'; 
        despacito_t.style.backgroundColor = '#ff0000'; 
        despacito_o.style.backgroundColor = '#ff0000'; 
    }
}

function confirmar11() {
    var resposta2 = (inp_questao11.value).toLowerCase();
    if (resposta2 == 'happy') {

        happy_h.innerHTML = 'H';
        happy_p.innerHTML = 'P';
        happy_p1.innerHTML = 'P';
        happy_y.innerHTML = 'Y';

        questao11.style.display = `none`;
        finalizar.style.display = `block`;

        happy_h.style.backgroundColor = '#0eff00'; 
        happy_p.style.backgroundColor = '#0eff00'; 
        happy_p1.style.backgroundColor = '#0eff00'; 
        happy_y.style.backgroundColor = '#0eff00'; 

    } else {
        alert('resposta incorreta');
        happy_h.style.backgroundColor = '#ff0000'; 
        happy_p.style.backgroundColor = '#ff0000'; 
        happy_p1.style.backgroundColor = '#ff0000'; 
        happy_y.style.backgroundColor = '#ff0000'; 
    }
}

