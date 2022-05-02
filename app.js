const Coder = function(){
    this.languages = ['JavaScript', 'TypeScript', 'Ruby', 'Python']
    this.frameworks = ['Ruby on Rails', 'Express', 'React']
}

Coder.prototype.checkLanguages = function() {
    let language = this.languages[Math.floor(Math.random() * this.languages.length)]
    return language
}

Coder.prototype.checkFrameworks = function(){
    let framework = this.frameworks[Math.floor(Math.random() * this.frameworks.length)]
    console.log(`This coder knows ${framework}`)
    return framework
}

let coder = new Coder()


module.exports = coder