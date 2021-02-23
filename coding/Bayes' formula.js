/**
  Peh - probability of truth of hypothesis in case when result is positive, 
  Ph - a priori probability, 
  Pefh - inverse Peh (1 - Peh), 
  Pfh - inverse Ph (1 - Ph).
*/

function BaeseFormul(Peh, Ph, Pefh, Pfh){
	return (Peh * Ph)/((Peh * Ph) + (Pefh * Pfh));
}

console.log(BaeseFormul(0.99, 0.89, 0.01, 0.11))