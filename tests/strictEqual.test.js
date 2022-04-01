const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect

const strictEqual = require('../strictEqual.js')

describe('strictEqual.js test suite', () => {
    describe('strictEqual tests', () => {
        it('tests a string and a string, equal in value', () => {
            const mockStringOne = 'hello'
            const mockStringTwo = 'hello'
            const expectedResult = true
            const actualResult = strictEqual(mockStringOne, mockStringTwo)

            expect(actualResult).to.equal(expectedResult)
        })
        it('tests a number and a number, equal in value', () => {
            const mockNumOne = 10
            const mockNumTwo = 10
            const expectedResult = true
            const actualResult = strictEqual(mockNumOne, mockNumTwo)

            expect(actualResult).to.equal(expectedResult)
        })
        it('tests a boolean and a boolean, equal in value', () => {
            const mockBoolOne = false
            const mockBoolTwo = false
            const expectedResult = true
            const actualResult = strictEqual(mockBoolOne, mockBoolTwo)

            expect(actualResult).to.equal(expectedResult)
        })
        it('tests a string and a boolean, equal in value, but not strictly equal', () => {
            const mockString = 'false'
            const mockBool = false
            const expectedResult = false
            const actualResult = strictEqual(mockString, mockBool)

            expect(actualResult).to.equal(expectedResult)
        })
        it('tests a number and a string, equal in value, but not strictly equal', () => {
            const mockNum = 10
            const mockString = '10'
            const expectedResult = false
            const actualResult = strictEqual(mockNum, mockString)

            expect(actualResult).to.equal(expectedResult)
        })
        it('tests a string and a string, not equal in value', () => {
            const mockStringOne = 'hello'
            const mockStringTwo = 'goodbye'
            const expectedResult = false
            const actualResult = strictEqual(mockStringOne, mockStringTwo)

            expect(actualResult).to.equal(expectedResult)
        })
        it('tests a number and a number, not equal in value', () => {
            const mockNumOne = 10
            const mockNumTwo = 20
            const expectedResult = false
            const actualResult = strictEqual(mockNumOne, mockNumTwo)

            expect(actualResult).to.equal(expectedResult)
        })
        it('tests a boolean and a boolean, not equal in value', () => {
            const mockBoolOne = true
            const mockBoolTwo = false
            const expectedResult = false
            const actualResult = strictEqual(mockBoolOne, mockBoolTwo)

            expect(actualResult).to.equal(expectedResult)
        })
        it('tests a string and a boolean, not equal in value', () => {
            const mockString = 'hello'
            const mockBool = false
            const expectedResult = false
            const actualResult = strictEqual(mockString, mockBool)

            expect(actualResult).to.equal(expectedResult)
        })
        it('tests a number and a string, not equal in value', () => {
            const mockNum = '20'
            const mockString = 10
            const expectedResult = false
            const actualResult = strictEqual(mockNum, mockString)

            expect(actualResult).to.equal(expectedResult)
        })
    })
})
