import { Component, Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'title_case'
})

export class Title_Case implements PipeTransform{
    transform(value: string){
        if(!value){
            return null;
        }

        let words= value.split(" ");

        for(let i =0; i<words.length; i++){
            let word=words[i];
            if(i>0 && this.isPreposition(word)){
                words[i]=word.toLowerCase();
            }
        }
        return words.join(" ");

    }

    private isPreposition(w:string) : boolean{
        let lowerCaseWords = ["a", "an", "of", "the"];
        return lowerCaseWords.includes(w.toLowerCase());
    }

}