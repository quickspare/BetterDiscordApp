/**
 * BetterDiscord Plugin config interface
 * Copyright (c) 2015-present Jiiks - https://jiiks.net
 * All rights reserved.
 * https://github.com/Jiiks/BetterDiscordApp - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. 
*/

export interface IPluginConfig {
    info: {
        name: string;
        authors: string[];
        version: string;
        description: string;
        repository: string;
        homepage: string;
        reloadable: boolean;
    }
}