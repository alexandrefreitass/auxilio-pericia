﻿//este é o script da rouboFurto.html
function gohome(){
    window.location='pericia3.html';
}
function save(){
    window.localStorage.setItem('campoTeste', $('#campoTeste').val());//QUE TIPO DE LOCAL ACONTECEU?
    	window.localStorage.setItem('campo1', $('#campo1').val());//QUE TIPO DE LOCAL ACONTECEU?
	window.localStorage.setItem('campo1_1_1', $('#campo1_1_1').val());//
	window.localStorage.setItem('campo1_1', $('#campo1_1').val());//ONDE ESTÁ O CORPO?
	window.localStorage.setItem('campo1_2', $('#campo1_2').val());//O LOCAL ESTÁ PRESERVADO?
	window.localStorage.setItem('campo1_3', $('#campo1_3').val());//O CORPO ESTÁ EM RIGIDEZ CADAVÉLICA?
	window.localStorage.setItem('campo1_4', $('#campo1_4').val());//QUAL A POSSÍVEL CAUSA DA MORTE? ESPECIFIQUE:
	window.localStorage.setItem('campo1_5', $('#campo1_5').val());//O SOCORRO MÉDICO FOI NO LOCAL?
	window.localStorage.setItem('campo1_6', $('#campo1_6').val());//QUAL MODALIDADE?
	window.localStorage.setItem('campo1_7', $('#campo1_7').val());//QUAL O PREFIXO?
	window.localStorage.setItem('campo1_8', $('#campo1_8').val());//NOME DO ENCARREGADO/PROFISSIONAL DA SAÚDE:
	window.localStorage.setItem('campo1_9', $('#campo1_9').val());//TEM OBJETOS A SEREM RECOLHIDOS NO LOCAL? 
	window.localStorage.setItem('campo1_10', $('#campo1_10').val());//ESPECIFIQUE: 
	window.localStorage.setItem('campo1_11', $('#campo1_11').val());//TEM INDIVÍDUOS DETIDOS?
	window.localStorage.setItem('campo1_12', $('#campo1_12').val());//ESPECIFIQUE:
	window.localStorage.setItem('campo1_13', $('#campo1_13').val());//POSSUI MARCAS DE SANGUE, TIROS OU PEGADAS?
	window.localStorage.setItem('campo1_14', $('#campo1_14').val());//ESPECIFIQUE:
	window.localStorage.setItem('campo1_15', $('#campo1_15').val());//POSSUI IDENTIFICAÇÃO DA VÍTIMA?
	//window.localStorage.setItem('campo1_16', $('#campo1_16').val());//ESPECIFIQUE:
	window.localStorage.setItem('campo1_17', $('#campo1_17').val());// RG DA VITIMA: 
	window.localStorage.setItem('campo1_18', $('#campo1_18').val());// IDADE DA VITIMA:
	window.localStorage.setItem('campo1_19', $('#campo1_19').val());//SEXO DA VÍTIMA:
	window.localStorage.setItem('campo1_20', $('#campo1_20').val());//PESO DA VÍTIMA:
	window.localStorage.setItem('campo1_21', $('#campo1_21').val());//ALTURA DA VÍTIMA: 
	window.localStorage.setItem('campo1_22', $('#campo1_22').val());//COR DA PELE DA VÍTIMA:
	window.localStorage.setItem('campo1_23', $('#campo1_23').val());//OS FAMILIARES ESTÃO NO LOCAL?
	window.localStorage.setItem('campo1_24', $('#campo1_24').val());//A VÍTIMA MORAVA SOZINHA?
	window.localStorage.setItem('campo1_25', $('#campo1_25').val());//INFORMAÇÕES COMPLEMENTARES: 
	window.localStorage.setItem('campoTeste2', $('#campoTeste2').val());// 

	
	//nessa parte ele salva os dados que estao nos campos

}
function load(){
//nesta funçao carrega na outra pagina os dados salvos temporariamente
	$('#campo2').val(window.localStorage.getItem ('campoTeste')+' '
					+window.localStorage.getItem ('campo1')+' '
					+window.localStorage.getItem('campo1_1_1')+', O CORPO ESTÁ '
					+window.localStorage.getItem('campo1_1')+', '
					+window.localStorage.getItem('campo1_2')+', '
					+window.localStorage.getItem('campo1_3')+', A POSSÍVEL CAUSA DA MORTE:'
					+window.localStorage.getItem('campo1_4')+', '
					+window.localStorage.getItem('campo1_5')+' '
					+window.localStorage.getItem('campo1_6')+' '
					+window.localStorage.getItem('campo1_7')+', '
					+window.localStorage.getItem('campo1_8')+', '
					+window.localStorage.getItem('campo1_9')+' '
					+window.localStorage.getItem('campo1_10')+' '
					+window.localStorage.getItem('campo1_11')+' '
					+window.localStorage.getItem('campo1_12')+', '
					+window.localStorage.getItem('campo1_13')+' '
					+window.localStorage.getItem('campo1_14')+' '
					+window.localStorage.getItem('campo1_15')+' '
	//				+window.localStorage.getItem('campo1_16')+' '
					+window.localStorage.getItem('campo1_17')+', '
					+window.localStorage.getItem('campo1_18')+', '
					+window.localStorage.getItem('campo1_19')+', '
					+window.localStorage.getItem('campo1_20')+', '
					+window.localStorage.getItem('campo1_21')+', '
					+window.localStorage.getItem('campo1_22')+', '
					+window.localStorage.getItem('campo1_23')+', '
					+window.localStorage.getItem('campo1_24')+', '
					+window.localStorage.getItem('campo1_25')+'. '					
					+window.localStorage.getItem('campoTeste2')+'. '					
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
	window.localStorage.removeItem('campo1_16');	
	window.localStorage.removeItem('campo1_17');	
	window.localStorage.removeItem('campo1_18');	
	window.localStorage.removeItem('campo1_19');	
	window.localStorage.removeItem('campo1_20');	
	window.localStorage.removeItem('campo1_21');	
	window.localStorage.removeItem('campo1_22');	
	window.localStorage.removeItem('campo1_23');	
	window.localStorage.removeItem('campo1_24');	
	window.localStorage.removeItem('campo1_25');	
}
