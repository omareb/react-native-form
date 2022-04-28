import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import { Nullable } from '../types';
import styles from '../SharedStyles';
import { baseColors } from '../constants';

interface Props {
    isValid?: Nullable<boolean>;
    colors?: {
        valid?: string;
        error?: string;
    };
    style?: StyleProp<ViewStyle>;
    validLabel?: string;
    validLabelStyle?: StyleProp<ViewStyle>;
}

function ValidationDot(props: Props) {
    if (!props.validLabel && (props.isValid === undefined || props.isValid === null)) return null;

    const validColor = props.colors?.valid || baseColors.valid;
    const errorColor = props.colors?.error || baseColors.error;
    const customBackgroundStyle = { backgroundColor: props.isValid ? validColor : errorColor };

    return (
        <View style={[styles.validationDot, customBackgroundStyle, props.style]}>
            <Text style={[styles.labelStyle, props.validLabelStyle]}>
                {props?.validLabel}
            </Text>
        </View>
    );
}

export default React.memo(ValidationDot);
