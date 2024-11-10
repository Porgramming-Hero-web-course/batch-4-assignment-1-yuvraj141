{
    function countWordOccurrences(sentence:string,word:string):number{
const newSentence=sentence.toLowerCase()
    const newWord=word.toLowerCase()
        const splitWords=newSentence.split(' ')
  // console.log(splitWords);
        const res=splitWords.filter(word=>word ===newWord).length
    return res
    }
  //  console.log(countWordOccurrences('i love to sleep ','sleep'));
}