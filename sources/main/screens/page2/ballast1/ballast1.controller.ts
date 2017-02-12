import app from '../../../main.module';
import {ILogger, LoggerService} from '../../../helpers/logger/logger';
import {QuoteService} from '../../../web-services/quote/quote.service';

/**
 * Displays the home screen.
 */
export class Page2Ballast1Controller {

    isLoading: boolean = true;

    private logger: ILogger;

    constructor(logger: LoggerService) {

        this.logger = logger.getLogger('page2ballast1');

        this.logger.log('init');

    }

}

app.controller('page2Ballast1Controller', Page2Ballast1Controller);
