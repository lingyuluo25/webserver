class Electorate {
    constructor (theElection, newElectorateName) {
        this.myElection = theElection
        this.electorateName = newElectorateName
        this.allMyWinParties = []
        this.allMyCandidate = []
        
    }
    
    addCandidate(newName, newParty) {
        let aCandidate = new Candidate(this, newName, newParty)
        this.allMyCandidate.push(aCandidate)
    }

    setCandidateVote(targetCandidate, newVote){
        let aCandidate
        for (aCandidate of this.allMyCandidate) {
            if (aCandidate.name === targetCandidate) {
                aCandidate.vote = newVote
            }
        }
    }

    sortCandidate(){
        this.allMyCandidate.sort(function(a,b) {
            if (a.vote > b.vote) {
                return -1
              }
              if (a.vote < b.vote) {
                return 1
              }
              if (a.vote === b.vote) {
                return 0
              }
        })
    }

    getCandidate() {
        this.sortCandidate()
        let result = ''
        for (const aCandidate of this.allMyCandidate){
            result += aCandidate.toTableRow()
        }
        return result
    }
    
    toString () {
        let result = `${this.electorateName}, ${this.allMyWinParties[0]}`
        return result
    }

    toTableRow () {
        let result = '<tr>'
        result += `<td>${this.electorateName}</td>`
		result += `<td colspan = "2">${this.allMyWinParties[0]}</td>`
		result += '</tr>'
        
        return result
    }
}