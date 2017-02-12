import app from '../../../main.module';
import {ILogger, LoggerService} from '../../../helpers/logger/logger';
import {QuoteService} from '../../../web-services/quote/quote.service';

/**
 * Displays the home screen.
 */
export class Page1WhereFromController {

    isLoading: boolean = true;

    private logger: ILogger;

    constructor(logger: LoggerService) {

        this.logger = logger.getLogger('page1wherefrom');

        this.logger.log('init');

    }

}

app.controller('page1WhereFromController', Page1WhereFromController);
