var assert = require('chai').assert
var expect = require('chai').expect
var should = require('chai').should()

const Coder  = require('../app')

describe('Coder Languages', function(){
    let coder = Coder

    it ('check that language is a valid string', function(){
        assert.isString(coder.checkLanguages(), 'string')
    })

    it ('check for a language', function(){
        let language = coder.checkLanguages()
        assert.oneOf(language, coder.languages)
    })

    it ('check that frameworks to be an array', function(){
        expect([coder.frameworks]).to.be.an('array')
    })

    it ('check that framework is a valid string', function(){
        let framework = coder.checkFrameworks()
        assert.oneOf(framework, coder.frameworks)
    })

    it ('check coder for level of experience', function(){
        assert.isAtLeast(coder.yearsOfExperience, 0)
    })

})