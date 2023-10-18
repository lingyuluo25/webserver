/* global describe beforeEach Controller it expect Election */
describe('task1 adding Election', () => {
  let theElection
    beforeEach(() => {
      theElection = new Election('New Zealand Election', 2023)
    })
  describe('Election Properties', () => {

    it('should have a .name property', () => {
       expect(theElection.hasOwnProperty('name')).toBeTruthy()
    })

    it('should have a .year property', () => {
      expect(theElection.hasOwnProperty('year')).toBeTruthy()
    })
  })

  describe('values of Election from the setup method of Controller ', () => {
    var theElection
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
  
    describe('Types of values of Election from the setup method of Controller ', () => {
     
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
  })
  
  describe('An empty Election', function() {
    beforeEach(function() {
      theElection = new Election()
    })
		//Checks all party property
    //If there is an empty party property.
	it('should have a .partyCount property', function() {
      expect(theElection.hasOwnProperty('partyCount')).toBeTruthy()
    })
	
	it('should have a party count of 0', function() {
      const count = theElection.partyCount
      expect(count).toBe(0)
    })
	
	it('should have an .allMyParties property', function() {
      expect(theElection.hasOwnProperty('allMyParties')).toBeTruthy()
    })
	
    it('should have an array for the .allMyParties ', function() {
      expect(Array.isArray(theElection.allMyParties)).toBeTruthy()
    })
	
	it('should have nothing in the allMyParties array', function() {
      const arraySize = theElection.allMyParties.length 
      expect(arraySize).toBe(0)
    })
  //Check count
                         
	})
	
	//If there is 1 party in the party property.
	describe('an Election with 1 party in it', function() {
    
		beforeEach(function() {
			theElection.addParty('ACT New Zealand')
		})

		it('should have a party count of 1', function() {
		  const count = theElection.partyCount
		  expect(count).toBe(1)
		})
		
		it('should have 1 entry in the allMyParties array', function() {
			const arraySize = theElection.allMyParties.length 
			expect(arraySize).toBe(1)
		  })

		it('should have a Party in the allMyParties array', function() {
		  const aParty = theElection.allMyParties[0] 
		  expect(aParty instanceof Party).toBeTruthy()
		}) 
		
	  })

    describe(' Election with 18 parties in it', function() {
      
      beforeEach(function() {
        theElection.addParty('ACT New Zealand')
        theElection.addParty('Aotearoa Legalise Cannabis Party')
        theElection.addParty('Heartland New Zealand Party')
        theElection.addParty('MANA Movement')
        theElection.addParty('Māori Party')
        theElection.addParty('New Conservative')
        theElection.addParty('New Zealand First Party')
        theElection.addParty('New Zealand Labour Party')
        theElection.addParty('New Zealand TEA Party')
        theElection.addParty('NZ Outdoors Party')
        theElection.addParty('ONE Party')
        theElection.addParty('Sustainable New Zealand Party')
        theElection.addParty('The Advance New Zealand Party')
        theElection.addParty('The Green Party of Aotearoa/New Zealand')
        theElection.addParty('The New Zealand Democratic Party for Social Credit')
        theElection.addParty('The New Zealand National Party')
        theElection.addParty('The Opportunities Party (TOP)')
        theElection.addParty('Vision New Zealand')
      })
  
      it('should have a party count of 18', function() {
        const count = theElection.partyCount
        expect(count).toBe(18)
      })
      
      it('should have 18 entries in the allMyParties array', function() {
        const arraySize = theElection.allMyParties.length 
        expect(arraySize).toBe(18)
      })

      it('should return the right string', function() {
        const output = theElection.toString() 
        expect(output).toBe('New Zealand Election ' + 2023 + 'ACT New ZealandAotearoa Legalise Cannabis PartyHeartland New Zealand PartyMANA MovementMāori PartyNZ Outdoors PartyNew ConservativeNew Zealand First PartyNew Zealand Labour PartyNew Zealand TEA PartyONE PartySustainable New Zealand PartyThe Advance New Zealand PartyThe Green Party of Aotearoa/New ZealandThe New Zealand Democratic Party for Social CreditThe New Zealand National PartyThe Opportunities Party (TOP)Vision New Zealand')
      })
      //check if the itmes in the allParties array are arranged in order.
      describe('The Party should have a first Party names ACT New Zealand.', function() {
        var aParty
        beforeEach(function() {
          aParty = theElection.allMyParties[0] 
        })
        it('should have a .name property', function() {
          expect(aParty.hasOwnProperty('partyName')).toBeTruthy()
        }) 
        it('should have a .name of "ACT New Zealand"', function() {
          var theValue = aParty.partyName
          expect(theValue).toBe("ACT New Zealand")
        })  
        it('should return the correct String', function() {
          var theWords = aParty.toString()
          expect(theWords).toBe('ACT New Zealand')
        })
      })  

      describe('The Party should have a Party names Vision New Zealand at the end.', function() {
        var aParty
        beforeEach(function() {
          aParty = theElection.allMyParties[17] 
        })
        it('should have a .name property', function() {
          expect(aParty.hasOwnProperty('partyName')).toBeTruthy()
        }) 
        it('should have a .name of "Vision New Zealand"', function() {
          var theValue = aParty.partyName
          expect(theValue).toBe("Vision New Zealand")
        })  
        it('should return the correct String', function() {
          var theWords = aParty.toString()
          expect(theWords).toBe('Vision New Zealand')
        })
      }) 
    })
  
})
