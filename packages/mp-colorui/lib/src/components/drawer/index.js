import { View } from '@tarojs/components';
import React, { useMemo, useState } from 'react';
import { classNames } from '../../lib';
export default function ClDrawer(props) {
    const [showModal, setShowModal] = useState(props.show);
    useMemo(() => {
        setShowModal(props.show);
    }, [props.show]);
    const hideModal = () => {
        props.closeWithShadow && setShowModal(false);
        props.onCancel && props.onCancel();
    };
    const leftComponent = (React.createElement(View, { className: classNames(`cu-modal drawer-modal justify-start ${showModal ? 'show' : ''}`, props.className), style: Object.assign({}, props.style), onClick: e => {
            hideModal();
            e.stopPropagation();
        } },
        React.createElement(View, { className: 'cu-dialog basis-lg', onClick: e => {
                e.stopPropagation();
            }, style: { height: '100vh' } }, props.children)));
    const rightComponent = (React.createElement(View, { className: classNames(`cu-modal drawer-modal justify-end ${showModal ? 'show' : ''}`, props.className), style: Object.assign({}, props.style), onClick: e => {
            hideModal();
            e.stopPropagation();
        } },
        React.createElement(View, { className: 'cu-dialog basis-lg', onClick: e => {
                e.stopPropagation();
            }, style: { height: '100vh' } }, props.children)));
    const bottomComponent = (React.createElement(View, { className: classNames(`cu-modal bottom-modal ${showModal ? 'show' : ''}`, props.className), style: Object.assign({}, props.style), onClick: e => {
            hideModal();
            e.stopPropagation();
        } },
        React.createElement(View, { className: 'cu-dialog', style: { maxHeight: '70vh' }, onClick: e => {
                e.stopPropagation();
            } }, props.children)));
    return props.direction === 'left'
        ? leftComponent
        : props.direction === 'right'
            ? rightComponent
            : bottomComponent;
}
ClDrawer.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.js.map