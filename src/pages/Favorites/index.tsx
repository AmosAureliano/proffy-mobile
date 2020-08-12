import React from 'react';
import { View } from 'react-native';
import styles from './style';
import PageHeader from '../../components/PageHeader/index';

export default function Favorites(){
    return(
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos"/>
        </View>
    )
}