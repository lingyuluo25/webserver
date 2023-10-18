describe('Electorate Class:', () => {
 
  describe('should have properties, references, methods and details of 72 Electorates in it', function() {
      let aElectorate
      beforeEach(function() {
        aElectorate = new Electorate()
      })
      it('should have aElectorate.myElection property', function() {
        expect(aElectorate.hasOwnProperty('myElection')).toBeTruthy()
      })
      it('should have aElectorate.electorateName property', function() {
        expect(aElectorate.hasOwnProperty('electorateName')).toBeTruthy()
      })  
      it('should have aElectorate.allMyWinParties property', function() {
        expect(aElectorate.hasOwnProperty('allMyWinParties')).toBeTruthy()
      })
      it('should have aElectorate.allMyCandidate property', function() {
        expect(aElectorate.hasOwnProperty('allMyCandidate')).toBeTruthy()
      })
      it('should have aElectorate.addCandidate function', function () {
        expect(typeof aElectorate.addCandidate).toBe('function')
      })
      it('should have aElectorate.setCandidateVote function', function () {
        expect(typeof aElectorate.setCandidateVote).toBe('function')
      })
      it('should have aElectorate.sortCandidate function', function () {
        expect(typeof aElectorate.sortCandidate).toBe('function')
      })
      it('should have aElectorate.getCandidate function', function () {
        expect(typeof aElectorate.getCandidate).toBe('function')
      })
      it('should have aElectorate.toString function', function () {
        expect(typeof aElectorate.toString).toBe('function')
      })
      it('should have aElectorate.toTableRow function', function () {
        expect(typeof aElectorate.toTableRow).toBe('function')
      }) 
    })
  describe('should have the correct data type of the properties', () => {
      beforeEach(() => {
        theElection = Controller.setup()
        aElectorate = theElection.allMyElectorate[0] 
      })

      it('electorateName should NOT have leading spaces', () => {
        expect(aElectorate.electorateName[0]).not.toBe(' ')
      })
      it('electorateName should NOT have trailing spaces', () => {
        expect(aElectorate.electorateName[aElectorate.electorateName.length-1]).not.toBe(' ')
      })
      
      it("The allMyWinParties should reference an array", function () {
        expect(Array.isArray(aElectorate.allMyWinParties)).toBeTruthy();
      })
      it("The allMyCandidate should reference an array", function () {
        expect(Array.isArray(aElectorate.allMyCandidate)).toBeTruthy();
      })
      
  })
  describe('should have allMyElectorate Array and the details', function() {
    let theElection
    beforeEach(function() {
      theElection = Controller.setup()
      theElection.sortElectorate()
    })  

    it('should have a Electorate count of 72', function() {
      const count = theElection.electorateCount
      expect(count).toBe(72)
    })
      
    it('should have 72 Electorates in the allMyElectorate array', function() {
      const arraySize = theElection.allMyElectorate.length
      expect(arraySize).toBe(72)
    })
      
    it('should have an Electorate in the allMyElectorate array', function() {
      const aElectorate = theElection.allMyElectorate[0] 
      expect(aElectorate instanceof Electorate).toBeTruthy()
    }) 
  })

    describe('should have the correct output of methods', function() {
      let theElection, aElectorate
      beforeEach(function() {
         theElection = Controller.setup()
         aElectorate = new Electorate() 
        })
      it('Testing addCandidate, setCandidateVote, sortCandidate and getCandidate methods, should return the correct candidate table rows', function() {
        aElectorate.addCandidate("Candidate 1", "Party A");
        aElectorate.addCandidate("Candidate 2", "Party B");
        aElectorate.addCandidate("Candidate 3", "Party C");
        aElectorate.setCandidateVote("Candidate 1", 120);
        aElectorate.setCandidateVote("Candidate 2", 300);
        aElectorate.setCandidateVote("Candidate 3", 20);
        aElectorate.sortCandidate()
        let expectedRows = `<tr><td>Candidate 2</td><td>Party B</td><td>300</td></tr><tr><td>Candidate 1</td><td>Party A</td><td>120</td></tr><tr><td>Candidate 3</td><td>Party C</td><td>20</td></tr>`;
        let actualRows = aElectorate.getCandidate();
    
        expect(actualRows).toBe(expectedRows);
      })
      
    })
      //check if the itmes in the allMyElectorate array are arranged in order.
      describe('should have the Electorate names Auckland Central at the begining.', function() {
		    let theElection, aElectorate
        
        beforeEach(function() {
          theElection = Controller.setup()
          theElection.sortElectorate()
          aElectorate = theElection.allMyElectorate[0] 
          
        })
        it('should have aElectorate.electorateName of "Auckland Central"', function() {
          let theValue = aElectorate.electorateName
          expect(theValue).toBe("Auckland Central")
        })  
        it('should have aElectorate.winningParty of "Green Party"', function() {
          let theValue = aElectorate.allMyWinParties[0]
          expect(theValue).toBe("Green Party")
        })
        
        it('should return the correct String', function() {
          let theWords = aElectorate.toString()
          expect(theWords).toBe("Auckland Central, Green Party")
        })
        it('should return the correct table row', function() {
          let theRow = aElectorate.toTableRow()
          expect(theRow).toBe(`<tr><td>Auckland Central</td><td colspan = "2">Green Party</td></tr>`)
        })

      })  

      describe('should have a Electorate names Ōtaki The New Zealand National Party at the end.', function() {
        let theElection, aElectorate 
        beforeEach(function() {
          theElection = Controller.setup()
          theElection.sortElectorate()
          aElectorate = theElection.allMyElectorate[71] 
        })
        it('should have aElectorate.electorateName of "Ōtaki"', function() {
          var theValue = aElectorate.electorateName
          expect(theValue).toBe("Ōtaki")
        })  
        it('should have aElectorate.winningParty of "Labour Party"', function() {
          var theValue = aElectorate.allMyWinParties[0]
          expect(theValue).toBe("Labour Party")
        })   
        it('should return the correct String', function() {
          var theWords = aElectorate.toString()
          expect(theWords).toBe('Ōtaki, Labour Party')
        })
        it('should return the correct table row', function() {
          var theRow = aElectorate.toTableRow()
          expect(theRow).toBe(`<tr><td>Ōtaki</td><td colspan = "2">Labour Party</td></tr>`)
        })
      }) 
})