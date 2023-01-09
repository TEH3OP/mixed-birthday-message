const headerStrings = ["Дорогая именинница,", "я желаю", "будь", "и пусть"];

const secondPhrases = [ "от всего сердца и души", 
                        "в твой праздник с удовольствием поднимаю бокал и",
                        "с Днем рождения!", 
                        "поздравляю!",
                        "в твой прекрасный день рождения", 
                        "в этот самый светлый день"];

const fourthPhrases = ["оставаться такой же сияющей, жизнерадостной, очаровательной и просто прекрасной",
                        "успехов, удачи, везения. В делах - мудрости",
                        "впереди - счастливых лет, здоровья, радостей, побед",
                        "чтобы все мечты и желания сбывались",
                        "самой счастливой, чудесной и прекрасной жизни"]

const sixthPhrases = ["всегда любимой и очень-очень счастливой",
                        "всегда такой же яркой",
                        "счастлива каждую секунду",
                        "всегда самой красивой",
                        "такой-же прекрасной и всё время любимой"]

const eightPhrases = ["не будет неразрешимых проблем в твоей жизни!",
                        "всегда рядом будут люди, способные помочь и поддержать!",
                        "каждый день приносит только радость и самые яркие, позитивные впечатления",
                        "жизнь, как яркая мозаика, складывается из добра, радостей и самых прекрасный событий!",
                        "каждый новый день дарит тебе отличное настроение и вдохновляет на упехи во всех делах"]

const summaryArray = [secondPhrases, fourthPhrases, sixthPhrases, eightPhrases];

const getRandomPhrase = arrayStrings => 
    arrayStrings[Math.floor(Math.random()*arrayStrings.length)];


const createMessage = (headerStrings, summaryArray) =>{
    let resultString = "";
    for (let i = 0; i < headerStrings.length && i < summaryArray.length; i++){
        resultString += headerStrings[i] + " " + getRandomPhrase(summaryArray[i]) + " ";
    }
    return resultString
}
console.log(createMessage(headerStrings, summaryArray));
    