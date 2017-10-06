/**
 * BetterDiscord Button Component Template
 * Copyright (c) 2015-present Jiiks - https://jiiks.net
 * All rights reserved.
 * https://github.com/Jiiks/BetterDiscordApp - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import { ReactComponent } from '../reactcomponent';
import { MaterialIcon } from './';

export enum EButtonType {
    default,
    red,
    green,
    none
}

export interface IButton {
    text?: string,
    icon?: string,
    onClick: any,
    type: EButtonType,
    zeroPadding?: boolean
}

export interface IInlineButton {
    text?: string,
    icon?: string,
    onClick: any,
    type: EButtonType,
    left?: boolean,
    right?: boolean,
    zeroPadding?: boolean
}

export class Button extends ReactComponent<IButton, IButton> {

    protected bindings(): void { }
    protected setInitialState(props: IButton): void { }

    public render() {
        const { text, onClick, type, icon, zeroPadding } = this.props;

        const className = ['bd-button'];

        switch (type) {
            case EButtonType.default:
                className.push('bd-button-db');
                break;
            case EButtonType.red:
                className.push('bd-button-red');
                break;
            case EButtonType.green:
                className.push('bd-button-green');
                break;
        }

        if (zeroPadding) className.push('bd-button-zeropad');

        return (
            <button className={className.join(' ')} onClick={onClick}>
                <div className="bd-button-text">{icon ? <MaterialIcon icon={icon} /> : text || ''}</div>
            </button>
        );
    }

}

export class InlineButton extends ReactComponent<IInlineButton, IInlineButton> {

    protected bindings(): void { }
    protected setInitialState(props: IButton): void { }

    public render() {
        const { text, icon, onClick, type, left, right, zeroPadding } = this.props;

        const className = ['bd-button', 'bd-button-inline', left ? 'bd-button-inline-left' : right ? 'bd-button-inline-right' : 'bd-button-inline-middle'];

        switch (type) {
            case EButtonType.default:
                className.push('bd-button-db');
                break;
            case EButtonType.red:
                className.push('bd-button-red');
                break;
            case EButtonType.green:
                className.push('bd-button-green');
                break;
        }

        if (zeroPadding) className.push('bd-button-zeropad');

        return (
            <button className={className.join(' ')} onClick={onClick}>
                <div className="bd-button-text">{icon ? <MaterialIcon icon={icon} /> : text || ''}</div>
            </button>
        );

    }
}