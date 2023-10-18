describe('Party class:', () => {
    
  describe('should have properties, references, methods in it', function() {
      let aParty
      beforeEach(function() {
        theElection = new Election()
        aParty = new Party()
      })
      it('should have aParty.partyName property', function() {
        expect(aParty.hasOwnProperty('partyName')).toBeTruthy()
      }) 
      it('should have aParty.partySeats property', function() {
        expect(aParty.hasOwnProperty('partySeats')).toBeTruthy()
      })
      it('should have aParty.votePercentage property', function() {
        expect(aParty.hasOwnProperty('votePercentage')).toBeTruthy()
      })
      it('should have aParty.partyCount property', function() {
        expect(aParty.hasOwnProperty('partyCount')).toBeTruthy()
      })
      it('should have aParty in the allMyParties array', function() { 
        expect(aParty instanceof Party).toBeTruthy()
      })
      it('should have aParty.toString function', function () {
        expect(typeof aParty.toString).toBe('function')
      })
      it('should have aParty.toTableRow function', function () {
        expect(typeof aParty.toTableRow).toBe('function')
      })
     
      })
      
      describe('should return the correct values of each property', function() {
        beforeEach(function() {
          theElection = Controller.setup()
          theElection.sortParties()
          aParty = theElection.allMyParties[0]
        })
        it('partyName should NOT have trailing spaces', () => {
          expect(aParty.partyName[0][aParty.partyName[0].length-1]).not.toBe(' ')
        })
        it('partyName should NOT have leading spaces', () => {
          expect(aParty.partyName[0]).not.toBe(' ')
        })
        it('partySeats should be a number', () => {
          expect(typeof aParty.partySeats).toBe('number')
        })
        it('partyName should be a string', () => {
          expect(typeof aParty.partyName).toBe('string')
       })
       it('votePercentage should be a number', () => {
        expect(typeof aParty.votePercentage).toBe('number')
        })
      })


      //check if the itmes in the allParties array are arranged in order.
      describe('The Party should have a first Party names Labour Party.', function() {
        beforeEach(function() {
          theElection = Controller.setup()
          theElection.sortParties()
          aParty = theElection.allMyParties[0]
        })
        it('should have aParty.partyName of "Labour Party"', function() {
          var theValue = aParty.partyName
          expect(theValue).toBe("Labour Party")
        })  
        it('should have aParty.partySeats of 43', function() {
          var theValue = aParty.partySeats
          expect(theValue).toBe(43)
        }) 
        it('should have aParty.votePercentage of 49.1', function() {
          var theValue = aParty.votePercentage
          expect(theValue).toBe(49.1)
        })
        it('should return the correct String', function() {
          var theWords = aParty.toString()
          expect(theWords).toBe(`Labour Party, 43, 49.1 %`)
        }) 
        it('should return the correct table row', function() {
          var theRow = aParty.toTableRow()
          expect(theRow).toBe(`<tr><td>${aParty.partyName}</td><td>${aParty.partySeats}</td><td>${aParty.votePercentage} %</td></tr>`)
        })
      })
      

      describe('The Party should have a Party names HeartlandNZ at the end.', function() {
        let aParty, theElection
        beforeEach(function() {
          theElection = Controller.setup()
          theElection.sortParties()
          aParty = theElection.allMyParties[16] 
        })
        it('should have aParty.partyName of "HeartlandNZ"', function() {
          var theValue = aParty.partyName
          expect(theValue).toBe("HeartlandNZ")
        })  
        it('should have aParty.partySeats of 0', function() {
          var theValue = aParty.partySeats
          expect(theValue).toBe(0)
        }) 
        it('should have aParty.votePercentage of 0', function() {
          var theValue = aParty.votePercentage
          expect(theValue).toBe(0)
        })
        it('should return the correct String', function() {
          var theWords = aParty.toString()
          expect(theWords).toBe('HeartlandNZ, 0, 0 %')
        }) 
        it('should return the correct table row', function() {
          var theRow = aParty.toTableRow()
          expect(theRow).toBe(`<tr><td>${aParty.partyName}</td><td>${aParty.partySeats}</td><td>${aParty.votePercentage} %</td></tr>`)
        })
      }) 
    })
