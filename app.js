const Coder = function(){
    this.languages = ['JavaScript', 'TypeScript', 'Ruby', 'Python'],
    this.frameworks = ['Ruby on Rails', 'Express', 'React']
    this.yearsOfExperience = 3
}

Coder.prototype.checkLanguages = function() {
    let language = this.languages[Math.floor(Math.random() * this.languages.length)]
    return language
}

Coder.prototype.checkFrameworks = function(){
    let framework = this.frameworks[Math.floor(Math.random() * this.frameworks.length)]
    return framework
}

Coder.prototype.levels = function(){
    if (this.yearsOfExperience <= 2){
        console.log(`Junior`)
    } else if (this.yearsOfExperience >= 2 && this.yearsOfExperience <= 5){
        console.log(`Mid`)
    } else if (this.yearsOfExperience >= 5){
        console.log(`Senior`)
    }
}

let coder = new Coder()


module.exports = coder