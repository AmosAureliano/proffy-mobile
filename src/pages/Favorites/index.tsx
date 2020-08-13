import React from 'react';
import { View, ScrollView} from 'react-native';

import styles from './style';

import PageHeader from '../../components/PageHeader/index';
import TeacherItem from '../../components/TeacherItem/index';

export default function Favorites(){
    return(
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos"/>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}