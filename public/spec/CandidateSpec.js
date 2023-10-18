describe('Candidate Class', () => {
    describe('should have properties, references, and methods in it', function() {
        let aCandidate
        beforeEach(function() {
            aCandidate = new Candidate()
        })
        it('should have aCandidate.myElection property', function() {
            expect(aCandidate.hasOwnProperty('myElectorate')).toBeTruthy()
        }) 
        it('should have aCandidate.name property', function() {
            expect(aCandidate.hasOwnProperty('name')).toBeTruthy()
        })
        it('should have aCandidate.party property', function() {
            expect(aCandidate.hasOwnProperty('party')).toBeTruthy()
        })
        it('should have aCandidate.vote property', function() {
            expect(aCandidate.hasOwnProperty('vote')).toBeTruthy()
        })
        
    })
    describe('testing the toString() and toTableRow() methods', function() {
        let aCandidate, theElection, aElectorate
        beforeEach(function() {
            theElection = Controller.setup()
            theElection.sortElectorate()
            aElectorate = theElection.allMyElectorate[4] 
            aCandidate = aElectorate.allMyCandidate[0]
        })
        it('should return the correct String', function() {
            var theWords = aCandidate.toString()
            expect(theWords).toBe('GASKIN, Ian Camden, United Future, 80')
        })
        it('should return the correct table row', function() {
            var theRow = aCandidate.toTableRow()
            expect(theRow).toBe(`<tr><td>GASKIN, Ian Camden</td><td>United Future</td><td>80</td></tr>`)
        })
    })
})