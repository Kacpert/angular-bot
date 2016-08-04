import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { ChatComponent }         from './chat.component';
// import { APP_ROUTER_PROVIDERS }   from './app.routes';

bootstrap(ChatComponent, [ HTTP_PROVIDERS
    // APP_ROUTER_PROVIDERS,
    // HTTP_PROVIDERS,
    // { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    // { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
]);
