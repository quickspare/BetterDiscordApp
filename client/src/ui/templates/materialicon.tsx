/**
 * BetterDiscord Material Icon Component Template
 * Copyright (c) 2015-present Jiiks - https://jiiks.net
 * All rights reserved.
 * https://github.com/Jiiks/BetterDiscordApp - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';

interface IMaterialIcon {
    icon: string
}

export class MaterialIcon extends React.Component<IMaterialIcon, IMaterialIcon> {

    constructor(props: IMaterialIcon) {
        super(props);
    }

    public render() {
        const { icon } = this.props;
        return (
            <i className="material-icons">{icon}</i>
        );
    }
}