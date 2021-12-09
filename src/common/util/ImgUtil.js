
export class ImgUtil {

    static getBackImgUrl(imgSrc) {
        return "background-image: url(" + imgSrc + ");";
    }

    static getImgHeight(imgSrc) {
        let img = new Image();
        img.src = imgSrc;
        let height = img.height > img.width ? img.height * 0.2 : img.width * 0.2;
        console.log("getImgHeight -> img.width: " + img.width + " ================");
        console.log("getImgHeight -> img.height: " + img.height + " ================");
        if (height < 170) {
            height = 170;
        }
        console.log("getImgHeight -> height: " + height + " ================");
        return "height: " + height + "px;";
    }

}