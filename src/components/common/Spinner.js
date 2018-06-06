import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStye} >
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStye: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
};
export { Spinner };
