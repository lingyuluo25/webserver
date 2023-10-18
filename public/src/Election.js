/*jshint esversion: 6*/

class Election {
	constructor (newName, newYear) {
	// Add Code
  this.partyCount = 0
  this.electorateCount = 0
  this.name = newName 
  this.year = newYear
  this.allMyParties = []
  this.allMyElectorate = []
	}

  addParty (newPartyName, newPartySeat) {
    let aNewParty = new Party(this, newPartyName, newPartySeat)
    this.allMyParties.push(aNewParty)
    this.partyCount += 1
  }

  addElectorate (newElectorateName) {
    let aNewElectorate = new Electorate(this, newElectorateName)
    this.allMyElectorate.push(aNewElectorate)
    this.electorateCount += 1
  }

  sortParties () {
    this.allMyParties.sort(function (a, b) {
      if (a.votePercentage < b.votePercentage) {
        return 1 
      }
      if (a.votePercentage > b.votePercentage) {
        return -1
      }
      return 0
    })
  }

  sortElectorate () {
    this.allMyElectorate.sort(function (a, b) {
      if (a.electorateName < b.electorateName) {
        return -1 
      }
      if (a.electorateName > b.electorateName) {
        return 1
      } 
      return 0
    })
  }

  setWinningParty (targetElectorate, theParty) {
    this.findElectorate(targetElectorate).allMyWinParties.push(theParty)
  }
 
  findParty (targetParty) {
    return this.allMyParties.find(aParty => aParty.partyName === targetParty)
  }

  setVotePercent(targetParty, newVotePercentage) {
    this.findParty(targetParty).votePercentage = newVotePercentage  
  }
  
  findElectorate (targetElectorate) {
    return this.allMyElectorate.find(aElectorate => aElectorate.electorateName === targetElectorate)
  }

	// JS Template Literals
	toString() {
    let result = `${this.name} ${this.year}`
    return result
  }

  toTable(){
    this.sortParties()
    this.sortElectorate()

	  let result = `<table><tr><th colspan="3">${this.toString()}</th></tr> `
    result += `<tr class="party-row"><td>PARTIES</td>`
    result += `<td>Seats</td>`
    result += `<td>Vote%</td></tr>`
    
    for (const aParty of this.allMyParties) {
      result += aParty.toTableRow() 
    }
	  
    result += `<tr class='electorate-row'><td>ELECTORATES</td>`
    result += `<td colspan = "2">Winning Party</td></tr>`
    
    for (const aElectorate of this.allMyElectorate) {
      result += aElectorate.toTableRow() 
    }

    result += `<tr class='chch-candidate'><td>Christchurch Central Candidates</td>`
    result += `<td colspan = "2">(Sort by Vote)</td></tr>`

    for(const aElectorate of this.allMyElectorate){
      result += aElectorate.getCandidate()
    }
    
    result += '</table>'

    return result
  }

}
