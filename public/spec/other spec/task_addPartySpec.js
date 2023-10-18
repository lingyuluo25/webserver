/* global describe beforeEach Controller it expect Party */
describe('task1 adding Party', () => {
  
  describe('Party Properties', () => {
    let aNewParty
    beforeEach(() => {
      aNewParty = new Party('New Zealand Party', 2023)
    })

    it('should have a .name property', () => {
       expect(aNewParty.hasOwnProperty('name')).toBeTruthy()
    })

    it('should have a .year property', () => {
      expect(aNewParty.hasOwnProperty('year')).toBeTruthy()
    })
  })

  describe('values of Party from the setup method of Controller ', () => {
    var aNewParty
    beforeEach(() => {
      aNewParty = Controller.setup()
    })

    it('should have the correct name', () => {
      expect(aNewParty.name).toBe('New Zealand Party')
    })

    it('should have the correct year', () => {
       expect(aNewParty.year).toBe(2023)
    })
  })
  
    describe('types of values of Party from the setup method of Controller ', () => {
      var aNewParty
      beforeEach(() => {
        aNewParty = Controller.setup()
      })

      it('name should NOT have leading spaces', () => {
        expect(aNewParty.name[0]).not.toBe(' ')
      })
      
      it('name should NOT have trailing spaces', () => {
        expect(aNewParty.name[aNewParty.name.length-1]).not.toBe(' ')
      })


      it('year should be a number', () => {
         expect(typeof aNewParty.year).toBe('number')
      })
  })
})

/* global describe beforeEach Controller it expect Party */
describe('task1 adding Party', () => {
  
  describe('Party Properties', () => {
    let aNewParty
    beforeEach(() => {
      aNewParty = new Party('New Zealand Party', 2023)
    })

    it('should have a .name property', () => {
       expect(aNewParty.hasOwnProperty('name')).toBeTruthy()
    })

  })

/*  describe('values of Party from the setup method of Controller ', () => {
    var aNewParty
    beforeEach(() => {
      aNewParty = Controller.setup()
    })

    it('should have the correct name', () => {
      expect(aNewParty.name).toBe('New Zealand Party')
    })

    it('should have the correct year', () => {
       expect(aNewParty.year).toBe(2023)
    })
  }) */
  
    describe('types of values of Party from the setup method of Controller ', () => {
      var aNewParty
      beforeEach(() => {
        aNewParty = Controller.setup()
      })

      it('name should NOT have leading spaces', () => {
        expect(aNewParty.name[0]).not.toBe(' ')
      })
      
      it('name should NOT have trailing spaces', () => {
        expect(aNewParty.name[aNewParty.name.length-1]).not.toBe(' ')
      })


      
  })
})
