import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { ArticleService } from '../services/articleService'

@inject(Router, ArticleService)

export class Blog{
    constructor(router, articleService){
        this.articles = null;
        this.router = router;
        this.articleService = articleService;
    }

    activate(params, routeConfig, $navigationInstruction) {
        this.articleService.getArticles().then((response) => {
            this.articles = response;
         });
        return true;
    }

    created(owningView, myView) {
        
    }
}