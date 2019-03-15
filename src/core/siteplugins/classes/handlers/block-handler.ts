// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Injector } from '@angular/core';
import { CoreSitePluginsBaseHandler } from './base-handler';
import { CoreBlockHandler, CoreBlockHandlerData } from '@core/block/providers/delegate';
import { CoreSitePluginsBlockComponent } from '@core/siteplugins/components/block/block';

/**
 * Handler to support a block using a site plugin. (sam update)
 */
export class CoreSitePluginsBlockHandler extends CoreSitePluginsBaseHandler implements CoreBlockHandler {

    constructor(name: string, public blockName: string, protected handlerSchema: any, protected initResult: any) {
        super(name);
    }

    getDisplayData(injector: Injector, block: any, contextLevel: string, instanceId: number): CoreBlockHandlerData | Promise<CoreBlockHandlerData> {
        console.log('getDisplayData for ' + block.name);
        let title,
            className;
        if (this.handlerSchema.displaydata && this.handlerSchema.displaydata.title) {
            title = this.handlerSchema.displaydata.title;
        } else {
            title = 'plugins.block_' + block + '.pluginname';
        }
        if (this.handlerSchema.displaydata && this.handlerSchema.displaydata.class) {
            className = this.handlerSchema.displaydata.class;
        } else {
            className = 'block_' + block;
        }
        return {
            title: title,
            class: className,
            component: CoreSitePluginsBlockComponent
        };
    }
}
