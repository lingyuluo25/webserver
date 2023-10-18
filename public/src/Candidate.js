class Candidate{
    constructor (theElectorate, newName, newParty, newVote){
        this.myElectorate = theElectorate
        this.name = newName
        this.party = newParty
        this.vote = newVote
    }

    toString() {
        const result = `${this.name}, ${this.party}, ${this.vote}`
        return result
    }
    
    toTableRow() {
        let result = '<tr>'
        result += `<td>${this.name}</td>`
		result += `<td>${this.party}</td>`
		result += `<td>${this.vote}</td>`
		result += '</tr>'
        
        return result
    }
}