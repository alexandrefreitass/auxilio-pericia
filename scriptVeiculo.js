//este é o script da veiculo.html
function gohome(){
    window.location='pericia3.html';
}
function save(){
    window.localStorage.setItem('campoTeste', $('#campoTeste').val());//PARA QUAL CRIME GRAVE ESTÁ SOLICITANDO PERÍCIA PARA ESTE VEÍCULO?
	window.localStorage.setItem('campo1', $('#campo1').val());//ESTÁ PRESERVADO?
	window.localStorage.setItem('campo1_1', $('#campo1_1').val());//ESTÁ PRESERVADO?
	window.localStorage.setItem('campo1_2', $('#campo1_2').val());//O VEÍCULO ESTÁ NA VIA PÚBLICA? 
	window.localStorage.setItem('campo1_3', $('#campo1_3').val());//ESPECIFIQUE:
	window.localStorage.setItem('campo1_4', $('#campo1_4').val());//POSSUI MARCAS DE SANGUE, TIROS OU OUTROS?
	window.localStorage.setItem('campo1_5', $('#campo1_5').val());//ESPECIFIQUE:
	window.localStorage.setItem('campo1_6', $('#campo1_6').val());// TEM OBJETOS A SEREM RECOLHIDOS?
	window.localStorage.setItem('campo1_7', $('#campo1_7').val());//ESPECIFIQUE:
	window.localStorage.setItem('campo1_8', $('#campo1_8').val());//O VEÍCULO ESTÁ ABERTO?
	window.localStorage.setItem('campo1_9', $('#campo1_9').val());//O VEÍCULO POSSUI DANOS? 
	window.localStorage.setItem('campo1_10', $('#campo1_10').val());//ESPECIFIQUE:
	window.localStorage.setItem('campo1_11', $('#campo1_11').val());// QUAL A PLACA DO VEÍCULO?
	window.localStorage.setItem('campo1_12', $('#campo1_12').val());//O VEÍCULO TEM CONDIÇÕES DE RODAGEM?
	window.localStorage.setItem('campo1_13', $('#campo1_13').val());// ESPECIFIQUE: 
	window.localStorage.setItem('campo1_14', $('#campo1_14').val());//O VEÍCULO SÓ PRECISA DE:
	window.localStorage.setItem('campo1_15', $('#campo1_15').val());//É FLAGRANTE?
	window.localStorage.setItem('campo1_16', $('#campo1_16').val());//TEM IDENTIFICAÇÃO DE PESSOA DETIDA?
	window.localStorage.setItem('campo1_17', $('#campo1_17').val());//ESPECIFIQUE:
	window.localStorage.setItem('campo1_18', $('#campo1_18').val());// INFORMAÇÕES COMPLEMENTARES: 
	window.localStorage.setItem('campoTeste2', $('#campoTeste2').val());// 
	
	//nessa parte ele salva os dados que estao nos campos

}
function load(){
//nesta funçao carrega na outra pagina os dados salvos temporariamente
	$('#campo2').val(window.localStorage.getItem('campoTeste')+' '
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
					+window.localStorage.getItem('campo1_12')+' '
					+window.localStorage.getItem('campo1_13')+' '
					+window.localStorage.getItem('campo1_14')+' '
					+window.localStorage.getItem('campo1_15')+' '
					+window.localStorage.getItem('campo1_16')+' '
					+window.localStorage.getItem('campo1_17')+', '
					+window.localStorage.getItem('campo1_18')+''					
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
	window.localStorage.removeItem('campo1_16');	
	window.localStorage.removeItem('campo1_17');	
}
