import app from '../../main.module';
import {ILogger, LoggerService} from '../../helpers/logger/logger';
import {QuoteService} from '../../web-services/quote/quote.service';

/**
 * Displays the home screen.
 */
export class Page1Controller {

    isLoading: boolean = true;

    private logger: ILogger;

    constructor(logger: LoggerService) {

        this.logger = logger.getLogger('page1');

        this.logger.log('init');

    }

}

app.controller('page1Controller', Page1Controller);
