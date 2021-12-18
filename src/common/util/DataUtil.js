
import {LogUtil} from "@/common/util/LogUtil";
import {Article} from "@/common/entity/show-articles/Article";

export class DataUtil {

    static scrollToButtom(vue) {
        console.log(vue.$refs.content);
        console.log("vue.$refs.content.scrollHeight: " + vue.$refs.content.scrollHeight);
        console.log("vue.$refs.content.scrollTop: " + vue.$refs.content.scrollTop);
        console.log("document.documentElement.scrollTop: " + document.documentElement.scrollTop);
        console.log("document.body.scrollTop: " + document.body.scrollTop);
        console.log("window.pageYOffset: " + window.pageYOffset);
    }

    static getArticleByNum(num) {
        let articles = this.getArticles();
        let lstArticle = [];
        let start = num === 0 ? 0 : 5;
        let end = num === 0 ? 5 : 10;
        for (let i = start; i < end; i++) {
            lstArticle.push(articles[i]);
        }

        return lstArticle;
    }

    static getDefaultArticle() {
        return Article.ONE;
    }

    static getArticles() {
        return [
            Article.ONE, Article.TWO, Article.THREE, Article.FOUR, Article.FIVE,
            Article.SIX, Article.SEVEN, Article.EIGHT, Article.NINE, Article.TEN
        ]
    }

    static getArticleList() {
        let articles = this.getArticles();
        let lstArticle = [[], [], [], [], []];
        for (let i = 0; i < 5; i++) {
            for (let j = i; j < articles.length; j += 5) {
                lstArticle[i].push(articles[j]);
            }
        }
        LogUtil.delimiter();
        LogUtil.infoInDetail("getArticleList", "articles", articles);
        LogUtil.delimiter();
        LogUtil.infoInDetail("getArticleList", "lstArticle", lstArticle);
        LogUtil.delimiter();

        return lstArticle;
    }

}