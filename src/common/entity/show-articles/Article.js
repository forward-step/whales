
import {Text} from "@/common/entity/show-articles/Text";
import {Style} from "@/common/entity/show-articles/Style";
import {Image} from "@/common/entity/show-articles/Image";
import {Number} from "@/common/entity/show-articles/Number";

export class Article {

    static get TEN() {
        return {
            text: Text.TEN,
            style: Style.TEN(Image.TEN),
            number: Number.TEN
        }
    }

    static get NINE() {
        return {
            text: Text.NINE,
            style: Style.NINE(Image.NINE),
            number: Number.NINE
        }
    }

    static get EIGHT() {
        return {
            text: Text.EIGHT,
            style: Style.EIGHT(Image.EIGHT),
            number: Number.EIGHT
        }
    }

    static get SEVEN() {
        return {
            text: Text.SEVEN,
            style: Style.SEVEN(Image.SEVEN),
            number: Number.SEVEN
        }
    }

    static get SIX() {
        return {
            text: Text.SIX,
            style: Style.SIX(Image.SIX),
            number: Number.SIX
        }
    }

    static get FIVE() {
        return {
            text: Text.FIVE,
            style: Style.FIVE(Image.FIVE),
            number: Number.FIVE
        }
    }

    static get FOUR() {
        return {
            text: Text.FOUR,
            style: Style.FOUR(Image.FOUR),
            number: Number.FOUR
        }
    }

    static get THREE() {
        return {
            text: Text.THREE,
            style: Style.THREE(Image.THREE),
            number: Number.THREE
        }
    }

    static get TWO() {
        return {
            text: Text.TWO,
            style: Style.TWO(Image.TWO),
            number: Number.TWO
        }
    }

    static get ONE() {
        return {
            text: Text.ONE,
            style: Style.ONE(Image.ONE),
            number: Number.ONE
        }
    }

}