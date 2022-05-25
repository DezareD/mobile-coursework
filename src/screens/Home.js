import { Center } from 'native-base';
import { Text, View, StyleSheet } from 'react-native';
import { Colors, Typography } from '../styles';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.bodyContainer}>
                <Text style={[Typography.H2, styles.title, {color: Colors.WHITE}]}>Hello, world!</Text>
                <Text style={[Typography.TAGLINE, styles.title, {color: Colors.GRAY_MEDIUM}]}>Thi is main page, developed worked...</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK
    },
    bodyContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center'
    }
});
 

export default Home;