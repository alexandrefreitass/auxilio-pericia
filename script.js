//este é o script da hospital1.html
function gohome(){
    window.location='pericia3.html';
}
function save(){
    window.localStorage.setItem('campoTeste', $('#campoTeste').val());//explique a natureza
	window.localStorage.setItem('campo1', $('#campo1').val());//ferimento em qual parte do corpo
	window.localStorage.setItem('campo1_1', $('#campo1_1').val());//ferimento em qual parte do corpo
	window.localStorage.setItem('campo1_2', $('#campo1_2').val());//é flagrante
	window.localStorage.setItem('campo1_3', $('#campo1_3').val());//qual o estado da vítima
	window.localStorage.setItem('campo1_4', $('#campo1_4').val());//quem socorreu a vítima
	window.localStorage.setItem('campo1_5', $('#campo1_5').val());//qual o prefixo
	window.localStorage.setItem('campo1_6', $('#campo1_6').val());//nome e encarregado do profissional da saude
	window.localStorage.setItem('campo1_7', $('#campo1_7').val());//irá permanecer
	window.localStorage.setItem('campo1_8', $('#campo1_8').val());//A VÍTIMA JÁ TEVE ALTA?
	window.localStorage.setItem('campo1_9', $('#campo1_9').val());//SABE QUEM É O AUTOR?
	window.localStorage.setItem('campo1_10', $('#campo1_10').val());//SE NECESSÁRIO ESPECIFIQUE: 
	window.localStorage.setItem('campo1_11', $('#campo1_11').val());//POSSUI IDENTIFICAÇÃO DA VÍTIMA?
	window.localStorage.setItem('campo1_12', $('#campo1_12').val());//RG DA VITIMA:
	window.localStorage.setItem('campo1_13', $('#campo1_13').val());//IDADE DA VITIMA:
	window.localStorage.setItem('campo1_14', $('#campo1_14').val());//SEXO DA VÍTIMA: 
	window.localStorage.setItem('campo1_15', $('#campo1_15').val());//ALGO MAIS QUE JULGAR NECESSÁRIO:
	window.localStorage.setItem('campoTeste2', $('#campoTeste2').val());//ALGO MAIS QUE JULGAR NECESSÁRIO:	
	
	//nessa parte ele salva os dados que estao nos campos

}
function load(){
//nesta funçao carrega na outra pagina os dados salvos temporariamente
	$('#campo2').val(window.localStorage.getItem ('campoTeste')+' '
					+window.localStorage.getItem('campo1')+' '
					+window.localStorage.getItem('campo1_1')+' '
					+window.localStorage.getItem('campo1_2')+' '
					+window.localStorage.getItem('campo1_3')+' '
					+window.localStorage.getItem('campo1_4')+' '
					+window.localStorage.getItem('campo1_5')+' '
					+window.localStorage.getItem('campo1_6')+' '
					+window.localStorage.getItem('campo1_7')+' '
					+window.localStorage.getItem('campo1_8')+' '
					+window.localStorage.getItem('campo1_9')+' '
					+window.localStorage.getItem('campo1_10')+' '
					+window.localStorage.getItem('campo1_11')+' '
					+window.localStorage.getItem('campo1_12')+', '
					+window.localStorage.getItem('campo1_13')+' '
					+window.localStorage.getItem('campo1_14')+' '
					+window.localStorage.getItem('campo1_15')+' '
					+window.localStorage.getItem('campoTeste2')+' '					
					);
					
					
	
}
function erase(){
    window.localStorage.removeItem('campo1');
	window.localStorage.removeItem('campo1_1');
	window.localStorage.removeItem('campo1_2');
	window.localStorage.removeItem('campo1_3');
	window.localStorage.removeItem('campo1_4');
	window.localStorage.removeItem('campo1_5');
	window.localStorage.removeItem('campo1_6');	
	window.localStorage.removeItem('campo1_7');	
	window.localStorage.removeItem('campo1_8');
	window.localStorage.removeItem('campo1_9');
	window.localStorage.removeItem('campo1_10');
	window.localStorage.removeItem('campo1_11');
	window.localStorage.removeItem('campo1_12');
	window.localStorage.removeItem('campo1_13');	
	window.localStorage.removeItem('campo1_14');	
	window.localStorage.removeItem('campo1_15');	
	
}
/*function goclose(){
window.close();
}*/
