import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../components/context';

export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const { signOut } = React.useContext(AuthContext);

    // Function to toggle between light and dark theme
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Scrollable content of the drawer */}
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            {/* User avatar */}
                            <Avatar.Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Falak Naz</Title>
                                <Caption style={styles.caption}>@FN2405</Caption>
                            </View>
                        </View>
                    </View>
                    {/* Drawer section with navigation items */}
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name='home-outline' color={color} size={size} />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name='information-outline' color={color} size={size} />
                            )}
                            label="About"
                            onPress={() => { props.navigation.navigate('Explore') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialIcons name='post-add' color={color} size={size} />
                            )}
                            label="Review"
                            onPress={() => { props.navigation.navigate('Review') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialIcons name='settings-applications' color={color} size={size} />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate('Setting') }}
                        />
                    </Drawer.Section>
                    {/* Drawer section for theme preference */}
                    <Drawer.Section>
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents='none'>
                                    {/* Toggle switch for theme */}
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            {/* Drawer section for Sign Out */}
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        // Icon for Sign Out
                        <MaterialCommunityIcons name='exit-to-app' color={color} size={size} />
                    )}
                    label="Sign Out"
                    onPress={() => { signOut() }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
