
import {LogUtil} from "@/common/util/LogUtil";
import {Article} from "@/common/entity/show-articles/Article";

export class DataUtil {

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