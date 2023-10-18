/* global describe beforeEach Controller it expect Election */
describe('Election Class:', () => {
  let theElection
    beforeEach(() => {
      theElection = new Election('New Zealand Election', 2023)
    })
  describe('should have the correct properties', () => {
    it('should have a name property', () => {
       expect(theElection.hasOwnProperty('name')).toBeTruthy()
    })

    it('should have a year property', () => {
      expect(theElection.hasOwnProperty('year')).toBeTruthy()
    })

    it('should have a partyCount property', () => {
      expect(theElection.hasOwnProperty('partyCount')).toBeTruthy()
    })

    it('should have a electorateCount property', () => {
      expect(theElection.hasOwnProperty('electorateCount')).toBeTruthy()
    })

   it('should have an allMyParties property', () => {
      expect(theElection.hasOwnProperty('allMyParties')).toBeTruthy()
    })
    it('should have an allMyElectorate property', () => {
      expect(theElection.hasOwnProperty('allMyElectorate')).toBeTruthy()
    })    
  })

  describe('should set up the Election instant by Controller.setup()', () => {
    beforeEach(() => {
      theElection = Controller.setup()
    })

    it('should have the correct name', () => {
      expect(theElection.name).toBe('New Zealand Election')
    })

    it('should have the correct year', () => {
       expect(theElection.year).toBe(2023)
    })
  })
  
    describe('should have the correct data type of the properties', () => {
      beforeEach(() => {
        theElection = Controller.setup()
      })

      it('name should NOT have leading spaces', () => {
        expect(theElection.name[0]).not.toBe(' ')
      })
      it('name should NOT have trailing spaces', () => {
        expect(theElection.name[theElection.name.length-1]).not.toBe(' ')
      })
      it('year should be a number', () => {
         expect(typeof theElection.year).toBe('number')
      })
      it('should return the correct String: New Zealand Election 2023', function() {
        var theWords = theElection.toString()
        expect(theWords).toBe('New Zealand Election 2023')
      })

      it("The allMyParties should reference an array", function () {
        expect(Array.isArray(theElection.allMyParties)).toBeTruthy();
      })
      it("The allMyElectorate should reference an array", function () {
        expect(Array.isArray(theElection.allMyElectorate)).toBeTruthy();
      })
      
  })
  
  describe('should set up the empty Election successfully', function() {
    beforeEach(function() {
      theElection = new Election()
    })
		//Checks all party property
    //If there is an empty party property.
    
	  it('should have a party count of 0', function() {
        const count = theElection.partyCount
        expect(count).toBe(0)
      })
	  it('should have nothing in the allMyParties array', function() {
        const arraySize = theElection.allMyParties.length 
        expect(arraySize).toBe(0)
     })                     
	})
  describe('should have the methods below', function() {
    beforeEach(function() {
      theElection = new Election()
    })
    it("should have an addParty function", function () {
      expect(typeof theElection.addParty).toBe('function');
    })
    it("should have an addElectorate function", function () {
      expect(typeof theElection.addElectorate).toBe('function');
    })
    it("should have a sortParties function", function () {
      expect(typeof theElection.sortParties).toBe('function');
    })
    it("should have a sortElectorate function", function () {
      expect(typeof theElection.sortElectorate).toBe('function');
    })
    it("should have a setWinningParty function", function () {
      expect(typeof theElection.setWinningParty).toBe('function');
    })
    it("should have a setVotePercent function", function () {
      expect(typeof theElection.setVotePercent).toBe('function');
    })
    it("should have a findParty function", function () {
      expect(typeof theElection.findParty).toBe('function');
    })
    it("should have a findElectorate function", function () {
      expect(typeof theElection.findElectorate).toBe('function');
    })
    it("should have a toString function", function () {
      expect(typeof theElection.toString).toBe('function');
    })
    it("should have a toTable function", function () {
      expect(typeof theElection.toTable).toBe('function');
    })
  })
  describe('testing the methods', () => {
    var theElection
    beforeEach(() => {
      theElection = Controller.setup()
    })
    it('should return the correct Electorate details', function() {
      var theElectorate, aCandidate, aElectorate
      theElectorate = theElection.findElectorate('Christchurch Central')
      aCandidate = theElectorate.allMyCandidate[4]
      expect(theElectorate.myElection).toEqual(theElection)
      expect(theElectorate.electorateName).toBe('Christchurch Central')
      expect(theElectorate.allMyWinParties[0]).toBe('Labour Party')
      
    })
    describe('testing the output of methods', function() {
      let theElection
      beforeEach(function() {
       theElection = new Election()
      })
      it('testing addParty, setVotePercent and sortParties methods, should return the correct candidate table rows', function() {
        theElection.addParty("Party A", 10);
        theElection.addParty("Party B", 0);
        theElection.addParty("Party C", 5);
        theElection.setVotePercent("Party A", 0);
        theElection.setVotePercent("Party B", 0.1);
        theElection.setVotePercent("Party C", 0.5);
        theElection.sortParties ()
        let expectedOutput = `Party C, 5, 0.5 %`;
        let actualOutput = theElection.allMyParties[0].toString();
  
        expect(actualOutput).toBe(expectedOutput);
      })
      it('testing addParty, setVotePercent and sortParties methods, should return the correct candidate table rows', function() {
        theElection.addElectorate("Electorate A");
        theElection.addElectorate("Electorate B");
        theElection.addElectorate("Electorate C");
        theElection.setWinningParty("Electorate A", "Party C");
        theElection.setWinningParty("Electorate B", "Party B");
        theElection.setWinningParty("Electorate C", "Party A");
        theElection.sortElectorate ()
        let expectedOutput = `Electorate A, Party C`;
        let actualOutput = theElection.allMyElectorate[0].toString();
  
        expect(actualOutput).toBe(expectedOutput);
      })
      
      
  }) 
  describe('testing findElectorate method', function() {
    let theElection
    beforeEach(function() {
     theElection = new Election()
    })
    it('should return the correct details of the target Electorate', function() {
      theElection.addElectorate("Electorate D");
      theElection.addElectorate("Electorate E");
      theElection.addElectorate("Electorate F");
      theElection.setWinningParty("Electorate D", "Party C");
      theElection.setWinningParty("Electorate E", "Party B");
      theElection.setWinningParty("Electorate F", "Party A");
      theElection.sortElectorate ()

      let theElectorate = theElection.findElectorate('Electorate E')
      expect(theElectorate.myElection).toEqual(theElection)
      expect(theElectorate.electorateName).toBe('Electorate E')
      expect(theElectorate.allMyWinParties[0]).toBe('Party B')
      expect(Array.isArray(theElectorate.allMyCandidate)).toBeTruthy()
      })
    })
  describe('testing toString and toTable Methods', function() {
    beforeEach(function() {
      theElection = new Election('NZ Election', 2020)
    })
    it('should return the correct String: New Zealand Election 2023', function() {
      let theWords = theElection.toString()
      expect(theWords).toBe('NZ Election 2020')
    })
    it('should return the correct String: New Zealand Election 2023', function() {
      let theWords = theElection.toTable()
      expect(theWords).toBe(`<table><tr><th colspan="3">NZ Election 2020</th></tr> <tr class="party-row"><td>PARTIES</td><td>Seats</td><td>Vote%</td></tr><tr class='electorate-row'><td>ELECTORATES</td><td colspan = "2">Winning Party</td></tr><tr class='chch-candidate'><td>Christchurch Central Candidates</td><td colspan = "2">(Sort by Vote)</td></tr></table>`)
    })
    })
  })
})
