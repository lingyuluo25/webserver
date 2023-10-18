/* globals Election */
class Controller { // eslint-disable-line no-unused-vars
  static setup (ElectionJSON) {
    // https://www.electionresults.govt.nz/electionresults_2020_preliminary/

    const theElection = new Election('NZ Election', 2023)
	let theElectorate
	ElectionJSON.Parties.forEach((aParty) => {
			theElection.addParty(aParty.name, aParty.seats);
			theElection.setVotePercent(aParty.name, aParty.votePercentage);
		});

	  ElectionJSON.Electorates.forEach((anElectorate) => {
		theElection.addElectorate(anElectorate.name);
		theElection.setWinningParty(anElectorate.name, anElectorate.winningParty);
		
		});
	 let chchElecorate =  ElectionJSON.Electorates.find(electorate => electorate.name === "Christchurch Central")
	 chchElecorate.allMyCandidates.forEach((aCandidate) => {
		theElectorate = theElection.findElectorate('Christchurch Central')
		theElectorate.addCandidate(aCandidate.candidateName, aCandidate.candidateParty)
		theElectorate.setCandidateVote(aCandidate.candidateName, aCandidate.candidateVote)	
		})
	
    return theElection
  }
}