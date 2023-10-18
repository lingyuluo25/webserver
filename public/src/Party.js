/*jshint esversion: 6*/
class Party {
  constructor(theElection, newPartyName, newPartySeat, newVotePercentage) {
	this.myElection = theElection
    this.partyName = newPartyName;
    this.partySeats = newPartySeat;
    this.votePercentage = newVotePercentage;
    this.partyCount += 1;
  }

  toString() {
    return `${this.partyName}, ${this.partySeats}, ${this.votePercentage} %`;
  }

  toTableRow() {
    let result = "<tr>";
    result += `<td>${this.partyName}</td>`;
    result += `<td>${this.partySeats}</td>`;
    result += `<td>${this.votePercentage} %</td>`;
    result += "</tr>";

    return result;
  }
}