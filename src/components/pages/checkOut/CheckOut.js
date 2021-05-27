import React, { useEffect, useContext, useState, useRef } from 'react';
import { SignInForm } from '../checkOut/SignInForm';
import { GoogleAuth } from '../GoogleAuth';
import { OrderSummary } from '../Items/OrderSummary';
import { Grid, GridRow, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const CheckOut = () => {
    return (
        <Grid centered columns={3} >
            <Grid.Column >
                <Grid.Row style={{ marginTop: '15px' }}>
                    <GoogleAuth />
                </Grid.Row>
                <Grid.Row>
                    <Button className="ui red google button" style={{ width: '100%', marginTop: '15px' }} >
                        <Icon name="facebook" size='large'></Icon>
                        Sign In with Facebook
                        </Button>
                </Grid.Row>
                <Grid.Row>
                    <Link to="/signIn" className="ui button" style={{ width: '100%', marginTop: '15px' }}>
                        <Icon name="mail" size='large'></Icon>
                        Continue with Email
                    </Link>
                </Grid.Row>
                <Grid.Row >
                    <h3 style={{ marginTop: '15px' }}>   Don't have an account yet ?  <Link to='/signIn'> Sign Up</Link></h3>
                </Grid.Row>
            </Grid.Column>
        </Grid>
    )
}

