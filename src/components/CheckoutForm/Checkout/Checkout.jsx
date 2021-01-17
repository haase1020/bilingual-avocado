import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './styles'
import { commerce } from '../../../lib/commerce'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'


const steps=['Shipping address', 'Payment details'];

const Checkout = () => {
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
       const generateToken = async () => {
           try {
                const token = await commerce.checkout.generateToken()
           } catch (error) {

           }
       }
    },[]);

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    );

    const Form = () => activeStep === 0
    ? <AddressForm />
    : <PaymentForm />
    return (
        <>
        <div className={classes.toolbar} />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variatn="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} classNames={classes.stepper}>
                    {steps.map((step)=> (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : <Form />}
            </Paper>
        </main>
        </>
    )
}

export default Checkout
