import { View } from '@tarojs/components';
import React, { useMemo, useState } from 'react';
import ClIcon from '../icon';
import './index.scss';
import { classNames } from '../../lib';

export default function ClCurtain(props) {
    const { show, closeWithShadow, closeBtnPosition } = props;
    const [showImage, setShowImage] = useState(show);
    useMemo(() => {
        setShowImage(show);
    }, [show]);
    return showImage ? (React.createElement(View, { className: classNames('cu-load load-image', props.className), style: Object.assign({}, props.style), onClick: e => {
            e.stopPropagation();
            if (closeWithShadow) {
                setShowImage(false);
                props.onClose && props.onClose();
            }
        } },
        React.createElement(View, { className: 'cu-curtain__content', onClick: () => {
                props.onClick && props.onClick();
            } },
            props.children,
            React.createElement(View, { className: closeBtnPosition, onClick: e => {
                    e.stopPropagation();
                    setShowImage(false);
                    props.onClose && props.onClose();
                } },
                React.createElement(ClIcon, { iconName: 'close', color: 'white' }))))) : (React.createElement(View, null));
}
ClCurtain.options = {
    addGlobalClass: true
};
ClCurtain.defaultProps = {
    show: false,
    closeWithShadow: false,
    closeBtnPosition: 'bottom',
    onClose: () => { },
    onClick: () => { },
    imgUrl: ''
};
//# sourceMappingURL=index.js.map