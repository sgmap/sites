import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Badge from '../src/cells/Badge';
import HttpsValid from '../src/cells/https/Valid';


describe("HttpsValid", () => {
  describe("when there is no data", () => {
    it("contains empty cell", () => {
      const expectedValue = <td className="unknown"></td>
      expect(shallow(<HttpsValid />).contains(expectedValue)).to.equal(true)
    })
  })

  describe("when there a valid HTTPS", () => {
    const inspect = {}
    inspect["Valid HTTPS"] = true
    it("contains a valid badge", () => {
      const expectedValue = <Badge status='valid' text='HTTPS valide' icon='fa-check-circle'/>
      expect(shallow(<HttpsValid inspect={inspect} />).contains(expectedValue)).to.equal(true)
    })
  })

  describe("when there a invalid HTTPS", () => {
    const inspect = {}
    inspect["Valid HTTPS"] = false
    it("contains a invalid badge", () => {
      const expectedValue = <Badge status='warning' text='HTTPS non valide' icon='fa-exclamation-triangle'/>
      expect(shallow(<HttpsValid inspect={inspect} />).contains(expectedValue)).to.equal(true)
    })
  })
})
