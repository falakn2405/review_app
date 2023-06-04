import * as React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

//Validations on form
const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(10),
    price: yup.string().required(),
    rating: yup.string().required()
        .test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})

const ReviewForm = ({ addReview }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Add Review</Text>
            <Formik 
                initialValues={{title: '', body: '', price: '', rating: ''}}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <TextInput 
                            multiline minHeight={95}
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='$-Price'
                            onChangeText={props.handleChange('price')}
                            value={props.values.price}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('price')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.price && props.errors.price}</Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        <FlatButton text='submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default ReviewForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 15,
        textAlign: 'center'
    }
})