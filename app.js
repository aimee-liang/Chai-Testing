const Coder = function(){
    this.languages = ['JavaScript', 'TypeScript', 'Ruby', 'Python']
}

Coder.prototype.checkLanguages = function() {
    let language = this.languages[Math.floor(Math.random() * this.languages.length)]
    return language
}

let coder = new Coder()


module.exports = coder