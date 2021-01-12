import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import { classNames } from '../../lib';
export default function ClScreenDrawer(props) {
    const hideModal = () => {
        props.onHide && props.onHide();
    };
    return (React.createElement(View, { className: classNames(props.className), style: Object.assign({}, props.style) },
        React.createElement(ScrollView, { scrollY: true, className: `DrawerPage ${props.show ? 'show' : ''}` }, props.renderPage),
        React.createElement(View, { className: `DrawerClose ${props.show ? 'show' : ''}`, onClick: hideModal },
            React.createElement(Text, { className: 'cuIcon-pullright' })),
        React.createElement(ScrollView, { scrollY: true, className: `DrawerWindow ${props.show ? 'show' : ''}` }, props.renderDrawer)));
}
ClScreenDrawer.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map