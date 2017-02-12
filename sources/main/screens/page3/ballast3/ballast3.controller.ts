import app from '../../../main.module';
import {ILogger, LoggerService} from '../../../helpers/logger/logger';
import {QuoteService} from '../../../web-services/quote/quote.service';

/**
 * Displays the home screen.
 */
export class Page3Ballast3Controller {

    isLoading: boolean = true;

    private logger: ILogger;

    constructor(logger: LoggerService) {

        this.logger = logger.getLogger('page3ballast3');

        this.logger.log('init');

    }

}

app.controller('page3Ballast3Controller', Page3Ballast3Controller);
